
const ExamplePrompts = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
        Example Prompts
      </h3>
      <div className="space-y-2 text-sm">
        <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <span className="font-mono text-blue-600 dark:text-blue-400">HTML:</span> "a responsive login form with validation"
        </div>
        <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <span className="font-mono text-green-600 dark:text-green-400">Python:</span> "a calculator class with basic operations"
        </div>
        <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <span className="font-mono text-purple-600 dark:text-purple-400">JavaScript:</span> "a to-do list with add/remove functionality"
        </div>
      </div>
    </div>
  );
};

export default ExamplePrompts;
