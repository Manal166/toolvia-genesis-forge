
import { openaiService } from './openai';

export interface InterviewQuestion {
  id: string;
  question: string;
  answer?: string;
  hints?: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
}

export interface InterviewGenerationRequest {
  prompt: string;
  technology: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  questionCount: number;
}

export interface InterviewGenerationResult {
  questions: InterviewQuestion[];
  success: boolean;
  error?: string;
}

class AIInterviewService {
  async generateInterviewQuestions(request: InterviewGenerationRequest): Promise<InterviewGenerationResult> {
    try {
      const { prompt, technology, difficulty, questionCount } = request;
      
      const systemPrompt = `You are an expert technical interview question generator. Generate ${questionCount} high-quality technical interview questions for ${technology} at ${difficulty} level.

Requirements:
- Questions should be realistic and commonly asked in technical interviews
- Include a brief answer or key points for each question
- Vary question types: conceptual, practical, coding problems, and scenario-based
- Ensure questions are appropriate for ${difficulty} level
- Format response as JSON array with this structure:
[
  {
    "id": "unique_id",
    "question": "Question text",
    "answer": "Brief answer or key points",
    "hints": ["hint1", "hint2"],
    "difficulty": "${difficulty}",
    "category": "category_name"
  }
]

Focus on: ${prompt}`;

      const userPrompt = `Generate ${questionCount} ${difficulty} level interview questions for ${technology}. ${prompt}`;

      const response = await openaiService.makeRequest([
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ]);

      // Parse the JSON response
      const cleanedResponse = response.replace(/```json|```/g, '').trim();
      const questions: InterviewQuestion[] = JSON.parse(cleanedResponse);

      // Validate and ensure proper structure
      const validatedQuestions = questions.map((q, index) => ({
        id: q.id || `q_${index + 1}`,
        question: q.question || '',
        answer: q.answer || '',
        hints: q.hints || [],
        difficulty: q.difficulty || difficulty,
        category: q.category || technology
      }));

      return {
        questions: validatedQuestions,
        success: true
      };
    } catch (error) {
      console.error('Error generating interview questions:', error);
      return {
        questions: [],
        success: false,
        error: error instanceof Error ? error.message : 'Failed to generate interview questions'
      };
    }
  }

  getExamplePrompts(): string[] {
    return [
      "React hooks and state management",
      "Python data structures and algorithms",
      "JavaScript async/await and promises",
      "Java object-oriented programming concepts",
      "Node.js backend development",
      "HTML semantic elements and accessibility",
      "CSS Flexbox and Grid layouts",
      "Database design and SQL queries",
      "System design for web applications",
      "Testing strategies and best practices"
    ];
  }

  getTechnologyOptions(): string[] {
    return [
      'JavaScript',
      'Python',
      'Java',
      'React',
      'Node.js',
      'HTML/CSS',
      'TypeScript',
      'C++',
      'SQL',
      'System Design',
      'Data Structures',
      'Algorithms',
      'Frontend Development',
      'Backend Development',
      'Full Stack Development'
    ];
  }

  getDifficultyLevels(): Array<{ value: string; label: string; description: string }> {
    return [
      {
        value: 'Beginner',
        label: 'Beginner',
        description: 'Entry-level questions for new developers'
      },
      {
        value: 'Intermediate',
        label: 'Intermediate',
        description: 'Mid-level questions for experienced developers'
      },
      {
        value: 'Advanced',
        label: 'Advanced',
        description: 'Senior-level questions for expert developers'
      }
    ];
  }

  exportToText(questions: InterviewQuestion[]): string {
    let content = 'AI-Generated Interview Questions\n';
    content += '================================\n\n';
    
    questions.forEach((q, index) => {
      content += `${index + 1}. ${q.question}\n`;
      content += `   Difficulty: ${q.difficulty}\n`;
      content += `   Category: ${q.category}\n`;
      if (q.answer) {
        content += `   Answer: ${q.answer}\n`;
      }
      if (q.hints && q.hints.length > 0) {
        content += `   Hints: ${q.hints.join(', ')}\n`;
      }
      content += '\n';
    });
    
    return content;
  }
}

export const aiInterviewService = new AIInterviewService();
