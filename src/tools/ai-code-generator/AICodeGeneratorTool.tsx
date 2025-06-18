
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import ToolWrapper from "@/components/ToolWrapper";
import ToolSection from "@/components/ToolSection";
import ToolInputPanel from "@/components/ToolInputPanel";
import ToolOutputPanel from "@/components/ToolOutputPanel";
import { ToolConfig } from "@/config/tools.config";

interface AICodeGeneratorToolProps {
  tool: ToolConfig;
  isDark: boolean;
  onToggleTheme: () => void;
}

const AICodeGeneratorTool = ({ tool, isDark, onToggleTheme }: AICodeGeneratorToolProps) => {
  const [language, setLanguage] = useState("");
  const [description, setDescription] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const { toast } = useToast();

  // Sample codes for different languages
  const sampleCodes = {
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Form</title>
    <style>
        .login-form {
            max-width: 400px;
            margin: 50px auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
        }
        .form-group {
            margin-bottom: 15px;
        }
        label {
            display: block;
            margin-bottom: 5px;
        }
        input {
            width: 100%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <form class="login-form">
        <h2>Login</h2>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" required>
        </div>
        <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" required>
        </div>
        <button type="submit">Login</button>
    </form>
</body>
</html>`,
    css: `.login-form {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
    color: #333;
}

.form-group input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
    transition: border-color 0.3s;
}

.form-group input:focus {
    outline: none;
    border-color: #007bff;
}

.btn-primary {
    width: 100%;
    padding: 12px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.btn-primary:hover {
    background: #0056b3;
}`,
    javascript: `// Simple To-Do List Application
class TodoApp {
    constructor() {
        this.todos = [];
        this.init();
    }

    init() {
        this.renderTodos();
        this.setupEventListeners();
    }

    addTodo(text) {
        const todo = {
            id: Date.now(),
            text: text,
            completed: false
        };
        this.todos.push(todo);
        this.renderTodos();
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.renderTodos();
    }

    toggleTodo(id) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.renderTodos();
        }
    }

    renderTodos() {
        const todoList = document.getElementById('todo-list');
        todoList.innerHTML = '';

        this.todos.forEach(todo => {
            const li = document.createElement('li');
            li.className = todo.completed ? 'completed' : '';
            li.innerHTML = \`
                <span>\${todo.text}</span>
                <button onclick="app.toggleTodo(\${todo.id})">Toggle</button>
                <button onclick="app.deleteTodo(\${todo.id})">Delete</button>
            \`;
            todoList.appendChild(li);
        });
    }

    setupEventListeners() {
        const addBtn = document.getElementById('add-btn');
        const todoInput = document.getElementById('todo-input');

        addBtn.addEventListener('click', () => {
            const text = todoInput.value.trim();
            if (text) {
                this.addTodo(text);
                todoInput.value = '';
            }
        });
    }
}

// Initialize the app
const app = new TodoApp();`,
    python: `# Simple Calculator Application
class Calculator:
    def __init__(self):
        self.history = []
    
    def add(self, a, b):
        result = a + b
        self.history.append(f"{a} + {b} = {result}")
        return result
    
    def subtract(self, a, b):
        result = a - b
        self.history.append(f"{a} - {b} = {result}")
        return result
    
    def multiply(self, a, b):
        result = a * b
        self.history.append(f"{a} * {b} = {result}")
        return result
    
    def divide(self, a, b):
        if b == 0:
            raise ValueError("Cannot divide by zero")
        result = a / b
        self.history.append(f"{a} / {b} = {result}")
        return result
    
    def get_history(self):
        return self.history
    
    def clear_history(self):
        self.history = []`,
    java: `// Simple Bank Account Management System
import java.util.ArrayList;
import java.util.List;

public class BankAccount {
    private String accountNumber;
    private String accountHolder;
    private double balance;
    private List<String> transactions;
    
    public BankAccount(String accountNumber, String accountHolder, double initialBalance) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
        this.transactions = new ArrayList<>();
        this.transactions.add("Account created with balance: $" + initialBalance);
    }
    
    public void deposit(double amount) {
        if (amount > 0) {
            this.balance += amount;
            this.transactions.add("Deposited: $" + amount + " | Balance: $" + this.balance);
            System.out.println("Successfully deposited $" + amount);
        } else {
            System.out.println("Invalid deposit amount");
        }
    }
    
    public void withdraw(double amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.transactions.add("Withdrawn: $" + amount + " | Balance: $" + this.balance);
            System.out.println("Successfully withdrawn $" + amount);
        } else if (amount > this.balance) {
            System.out.println("Insufficient funds");
        } else {
            System.out.println("Invalid withdrawal amount");
        }
    }
    
    public double getBalance() {
        return this.balance;
    }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

class StudentGradeManager {
private:
    struct Student {
        std::string name;
        std::vector<double> grades;
        double average;
        
        Student(const std::string& n) : name(n), average(0.0) {}
    };
    
    std::vector<Student> students;
    
public:
    void addStudent(const std::string& name) {
        students.emplace_back(name);
        std::cout << "Student " << name << " added successfully.\\n";
    }
    
    void addGrade(const std::string& name, double grade) {
        auto it = std::find_if(students.begin(), students.end(),
            [&name](const Student& s) { return s.name == name; });
        
        if (it != students.end()) {
            it->grades.push_back(grade);
            calculateAverage(*it);
            std::cout << "Grade " << grade << " added for " << name << "\\n";
        } else {
            std::cout << "Student " << name << " not found.\\n";
        }
    }
};`
  };

  const generateCode = async () => {
    if (!language || !description) {
      toast({
        title: "Missing Information",
        description: "Please select a language and enter a description.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate API call
    setTimeout(() => {
      const code = sampleCodes[language as keyof typeof sampleCodes] || `// Generated ${language} code for: ${description}\n\nconsole.log("Hello, CodeBoost!");`;
      setGeneratedCode(code);
      setIsGenerating(false);
      
      toast({
        title: "Code Generated!",
        description: "Your code is ready to use.",
      });
    }, 2000);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedCode);
      setCopied(true);
      toast({
        title: "Copied!",
        description: "Code copied to clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please copy the code manually.",
        variant: "destructive",
      });
    }
  };

  return (
    <ToolWrapper 
      tool={tool} 
      isDark={isDark} 
      onToggleTheme={onToggleTheme}
    >
      {/* Input Section */}
      <ToolSection>
        <ToolInputPanel
          tool={tool}
          language={language}
          description={description}
          isGenerating={isGenerating}
          onLanguageChange={setLanguage}
          onDescriptionChange={setDescription}
          onGenerateCode={generateCode}
        />
      </ToolSection>

      {/* Output Section */}
      <ToolSection>
        <ToolOutputPanel
          tool={tool}
          generatedCode={generatedCode}
          copied={copied}
          onCopyToClipboard={copyToClipboard}
        />
      </ToolSection>
    </ToolWrapper>
  );
};

export default AICodeGeneratorTool;
