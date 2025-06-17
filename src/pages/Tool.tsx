import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import ToolNavigation from "@/components/ToolNavigation";
import CodeConfiguration from "@/components/CodeConfiguration";
import ExamplePrompts from "@/components/ExamplePrompts";
import CodeOutput from "@/components/CodeOutput";

const Tool = () => {
  const [isDark, setIsDark] = useState(true);
  const [language, setLanguage] = useState("");
  const [description, setDescription] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

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
        self.history = []

# Example usage
def main():
    calc = Calculator()
    
    print("Simple Calculator")
    print("Available operations: +, -, *, /")
    print("Type 'quit' to exit, 'history' to see calculation history")
    
    while True:
        try:
            user_input = input("\\nEnter calculation (e.g., 5 + 3): ")
            
            if user_input.lower() == 'quit':
                break
            elif user_input.lower() == 'history':
                for operation in calc.get_history():
                    print(operation)
                continue
            
            # Parse the input
            parts = user_input.split()
            if len(parts) != 3:
                print("Invalid format. Use: number operator number")
                continue
            
            a, operator, b = parts
            a, b = float(a), float(b)
            
            if operator == '+':
                result = calc.add(a, b)
            elif operator == '-':
                result = calc.subtract(a, b)
            elif operator == '*':
                result = calc.multiply(a, b)
            elif operator == '/':
                result = calc.divide(a, b)
            else:
                print("Invalid operator. Use +, -, *, or /")
                continue
            
            print(f"Result: {result}")
            
        except ValueError as e:
            print(f"Error: {e}")
        except Exception as e:
            print(f"An error occurred: {e}")

if __name__ == "__main__":
    main()`,
    java: `// Simple Bank Account Management System
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

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
    
    public void displayAccountInfo() {
        System.out.println("\\n=== Account Information ===");
        System.out.println("Account Number: " + this.accountNumber);
        System.out.println("Account Holder: " + this.accountHolder);
        System.out.println("Current Balance: $" + this.balance);
    }
    
    public void displayTransactionHistory() {
        System.out.println("\\n=== Transaction History ===");
        for (String transaction : this.transactions) {
            System.out.println(transaction);
        }
    }
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Welcome to Simple Bank!");
        System.out.print("Enter account number: ");
        String accountNumber = scanner.nextLine();
        System.out.print("Enter account holder name: ");
        String accountHolder = scanner.nextLine();
        System.out.print("Enter initial deposit: $");
        double initialBalance = scanner.nextDouble();
        
        BankAccount account = new BankAccount(accountNumber, accountHolder, initialBalance);
        
        while (true) {
            System.out.println("\\n=== Banking Menu ===");
            System.out.println("1. Check Balance");
            System.out.println("2. Deposit");
            System.out.println("3. Withdraw");
            System.out.println("4. Account Info");
            System.out.println("5. Transaction History");
            System.out.println("6. Exit");
            System.out.print("Choose an option: ");
            
            int choice = scanner.nextInt();
            
            switch (choice) {
                case 1:
                    System.out.println("Current Balance: $" + account.getBalance());
                    break;
                case 2:
                    System.out.print("Enter deposit amount: $");
                    double depositAmount = scanner.nextDouble();
                    account.deposit(depositAmount);
                    break;
                case 3:
                    System.out.print("Enter withdrawal amount: $");
                    double withdrawAmount = scanner.nextDouble();
                    account.withdraw(withdrawAmount);
                    break;
                case 4:
                    account.displayAccountInfo();
                    break;
                case 5:
                    account.displayTransactionHistory();
                    break;
                case 6:
                    System.out.println("Thank you for using Simple Bank!");
                    scanner.close();
                    return;
                default:
                    System.out.println("Invalid option. Please try again.");
            }
        }
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
    
    void calculateAverage(Student& student) {
        if (student.grades.empty()) {
            student.average = 0.0;
            return;
        }
        
        double sum = 0.0;
        for (double grade : student.grades) {
            sum += grade;
        }
        student.average = sum / student.grades.size();
    }
    
    void displayStudent(const std::string& name) {
        auto it = std::find_if(students.begin(), students.end(),
            [&name](const Student& s) { return s.name == name; });
        
        if (it != students.end()) {
            std::cout << "\\n=== " << it->name << " ===" << std::endl;
            std::cout << "Grades: ";
            for (size_t i = 0; i < it->grades.size(); ++i) {
                std::cout << it->grades[i];
                if (i < it->grades.size() - 1) std::cout << ", ";
            }
            std::cout << "\\nAverage: " << it->average << std::endl;
            std::cout << "Letter Grade: " << getLetterGrade(it->average) << std::endl;
        } else {
            std::cout << "Student " << name << " not found.\\n";
        }
    }
    
    void displayAllStudents() {
        if (students.empty()) {
            std::cout << "No students in the system.\\n";
            return;
        }
        
        std::cout << "\\n=== All Students ===\\n";
        for (const auto& student : students) {
            std::cout << student.name << " - Average: " << student.average 
                      << " (" << getLetterGrade(student.average) << ")\\n";
        }
    }
    
    std::string getLetterGrade(double average) {
        if (average >= 90) return "A";
        else if (average >= 80) return "B";
        else if (average >= 70) return "C";
        else if (average >= 60) return "D";
        else return "F";
    }
};

int main() {
    StudentGradeManager manager;
    int choice;
    std::string name;
    double grade;
    
    std::cout << "Student Grade Management System\\n";
    
    while (true) {
        std::cout << "\\n=== Menu ===\\n";
        std::cout << "1. Add Student\\n";
        std::cout << "2. Add Grade\\n";
        std::cout << "3. Display Student\\n";
        std::cout << "4. Display All Students\\n";
        std::cout << "5. Exit\\n";
        std::cout << "Enter your choice: ";
        std::cin >> choice;
        
        switch (choice) {
            case 1:
                std::cout << "Enter student name: ";
                std::cin.ignore();
                std::getline(std::cin, name);
                manager.addStudent(name);
                break;
                
            case 2:
                std::cout << "Enter student name: ";
                std::cin.ignore();
                std::getline(std::cin, name);
                std::cout << "Enter grade: ";
                std::cin >> grade;
                manager.addGrade(name, grade);
                break;
                
            case 3:
                std::cout << "Enter student name: ";
                std::cin.ignore();
                std::getline(std::cin, name);
                manager.displayStudent(name);
                break;
                
            case 4:
                manager.displayAllStudents();
                break;
                
            case 5:
                std::cout << "Thank you for using the Grade Management System!\\n";
                return 0;
                
            default:
                std::cout << "Invalid choice. Please try again.\\n";
        }
    }
    
    return 0;
}`
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
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <ToolNavigation isDark={isDark} onToggleTheme={toggleTheme} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            AI Code Generator
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Describe what you want to build, and we'll generate the code for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <CodeConfiguration
              language={language}
              description={description}
              isGenerating={isGenerating}
              onLanguageChange={setLanguage}
              onDescriptionChange={setDescription}
              onGenerateCode={generateCode}
            />

            <ExamplePrompts />
          </div>

          {/* Output Section */}
          <div className="space-y-6">
            <CodeOutput
              generatedCode={generatedCode}
              copied={copied}
              onCopyToClipboard={copyToClipboard}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tool;
