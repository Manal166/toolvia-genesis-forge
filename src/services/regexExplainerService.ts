
import { openaiService } from './openaiService';

export const explainRegex = async (regex: string): Promise<string> => {
  try {
    const systemMessage = "You are an expert at interpreting regular expressions. Explain the following regex in clear, step-by-step language that a beginner can understand. Break down each component and provide examples of what it would match.";
    
    const userMessage = `Explain this regex pattern: ${regex}

Please provide:
1. A brief overview of what this regex does
2. Step-by-step breakdown of each component
3. Examples of strings it would match
4. Examples of strings it would NOT match (if relevant)
5. Any common use cases for this pattern`;

    return await openaiService.makeRequest([
      { role: 'system', content: systemMessage },
      { role: 'user', content: userMessage }
    ]);
  } catch (error) {
    console.error('Error explaining regex:', error);
    
    // Fallback to mock explanation
    return generateMockExplanation(regex);
  }
};

const generateMockExplanation = (regex: string): string => {
  const commonPatterns: Record<string, string> = {
    '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$': `**Email Validation Pattern**

This regex validates email addresses with the following breakdown:

**Step-by-step explanation:**
1. \`^\` - Start of string anchor
2. \`[a-zA-Z0-9._%+-]+\` - Username part (letters, numbers, dots, underscores, percent, plus, hyphen)
3. \`@\` - Literal @ symbol
4. \`[a-zA-Z0-9.-]+\` - Domain name (letters, numbers, dots, hyphens)
5. \`\\.\` - Literal dot (escaped)
6. \`[a-zA-Z]{2,}\` - Top-level domain (2 or more letters)
7. \`$\` - End of string anchor

**Matches:** user@example.com, test.email+tag@domain.org
**Doesn't match:** invalid@, @domain.com, user@domain`,

    '\\d{3}-\\d{3}-\\d{4}': `**Phone Number Pattern (XXX-XXX-XXXX)**

This regex matches US phone numbers in the format XXX-XXX-XXXX:

**Step-by-step explanation:**
1. \`\\d{3}\` - Exactly 3 digits (area code)
2. \`-\` - Literal hyphen
3. \`\\d{3}\` - Exactly 3 digits (exchange)
4. \`-\` - Literal hyphen
5. \`\\d{4}\` - Exactly 4 digits (number)

**Matches:** 123-456-7890, 555-123-4567
**Doesn't match:** 12-345-6789, 123.456.7890, (123) 456-7890`,

    'https?://[^\\s]+': `**URL Pattern**

This regex matches HTTP and HTTPS URLs:

**Step-by-step explanation:**
1. \`http\` - Literal "http"
2. \`s?\` - Optional "s" (for https)
3. \`://\` - Literal "://"
4. \`[^\\s]+\` - One or more non-whitespace characters

**Matches:** https://example.com, http://site.org/path
**Doesn't match:** ftp://example.com, just-text`
  };

  // Check for exact matches first
  if (commonPatterns[regex]) {
    return commonPatterns[regex];
  }

  // Check for partial matches or similar patterns
  for (const [pattern, explanation] of Object.entries(commonPatterns)) {
    if (regex.includes(pattern.slice(1, -1)) || pattern.includes(regex)) {
      return explanation + "\n\n*Note: This is a similar pattern explanation. Your specific regex may have slight variations.*";
    }
  }

  // Generic fallback
  return `**Regex Pattern Analysis**

**Pattern:** \`${regex}\`

**General Breakdown:**
This appears to be a custom regular expression pattern. Here are some common elements that might be present:

- \`^\` and \`$\` - Start and end anchors
- \`\\d\` - Matches any digit (0-9)
- \`\\w\` - Matches word characters (letters, digits, underscore)
- \`\\s\` - Matches whitespace
- \`+\` - One or more of the preceding element
- \`*\` - Zero or more of the preceding element
- \`?\` - Zero or one of the preceding element
- \`[]\` - Character class (matches any character inside)
- \`()\` - Grouping
- \`|\` - Alternation (OR operator)

**Recommendation:** For a detailed explanation of this specific pattern, please use our AI-powered analysis feature which can provide more accurate breakdowns of complex regex patterns.`;
};
