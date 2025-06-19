
import { useState } from "react";
import { FileText, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface APIDocGeneratorInputProps {
  language: string;
  code: string;
  isGenerating: boolean;
  onLanguageChange: (value: string) => void;
  onCodeChange: (value: string) => void;
  onGenerateDoc: () => void;
}

const APIDocGeneratorInput = ({
  language,
  code,
  isGenerating,
  onLanguageChange,
  onCodeChange,
  onGenerateDoc
}: APIDocGeneratorInputProps) => {
  const exampleCodes = {
    javascript: `// Express.js API routes
app.get('/api/users', (req, res) => {
  // Get all users
  res.json(users);
});

app.post('/api/users', (req, res) => {
  // Create new user
  const user = req.body;
  users.push(user);
  res.status(201).json(user);
});

app.get('/api/users/:id', (req, res) => {
  // Get user by ID
  const user = users.find(u => u.id === req.params.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});`,
    python: `# Flask API routes
@app.route('/api/users', methods=['GET'])
def get_users():
    """Get all users"""
    return jsonify(users)

@app.route('/api/users', methods=['POST'])
def create_user():
    """Create a new user"""
    user_data = request.get_json()
    user = User(**user_data)
    db.session.add(user)
    db.session.commit()
    return jsonify(user.to_dict()), 201

@app.route('/api/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    """Get user by ID"""
    user = User.query.get_or_404(user_id)
    return jsonify(user.to_dict())`,
    java: `// Spring Boot REST Controller
@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @GetMapping
    public List<User> getAllUsers() {
        return userService.findAll();
    }
    
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User savedUser = userService.save(user);
        return ResponseEntity.status(201).body(savedUser);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = userService.findById(id);
        return ResponseEntity.ok(user);
    }
}`
  };

  const loadExample = () => {
    const example = exampleCodes[language as keyof typeof exampleCodes] || exampleCodes.javascript;
    onCodeChange(example);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-white mb-4">
          API Documentation Generator
        </h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Programming Language
            </label>
            <Select value={language} onValueChange={onLanguageChange}>
              <SelectTrigger className="w-full text-white">
                <SelectValue placeholder="Select a language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="javascript">JavaScript/Node.js</SelectItem>
                <SelectItem value="python">Python/Flask/Django</SelectItem>
                <SelectItem value="java">Java/Spring Boot</SelectItem>
                <SelectItem value="php">PHP/Laravel</SelectItem>
                <SelectItem value="csharp">C#/.NET</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                API Code
              </label>
              <Button
                variant="outline"
                size="sm"
                onClick={loadExample}
                className="text-blue-600 hover:text-blue-700"
              >
                <Upload className="h-4 w-4 mr-1" />
                Load Example
              </Button>
            </div>
            <Textarea
              placeholder="Paste your API code here (routes, controllers, endpoints)..."
              value={code}
              onChange={(e) => onCodeChange(e.target.value)}
              className="min-h-[200px] font-mono text-sm text-white placeholder:text-gray-400"
            />
          </div>

          <Button 
            onClick={onGenerateDoc}
            disabled={isGenerating || !language || !code.trim()}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            size="lg"
          >
            {isGenerating ? (
              <>
                <FileText className="mr-2 h-4 w-4 animate-spin" />
                Generating Documentation...
              </>
            ) : (
              <>
                <FileText className="mr-2 h-4 w-4" />
                Generate API Documentation
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Documentation Features */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Documentation Features</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <span className="font-semibold text-blue-600 dark:text-blue-400">Endpoints:</span> Methods, paths, descriptions
          </div>
          <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <span className="font-semibold text-green-600 dark:text-green-400">Parameters:</span> Request body, query params
          </div>
          <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <span className="font-semibold text-purple-600 dark:text-purple-400">Responses:</span> Status codes, data formats
          </div>
          <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
            <span className="font-semibold text-orange-600 dark:text-orange-400">Examples:</span> Request/response samples
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIDocGeneratorInput;
