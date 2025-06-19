
import { openaiService } from './openaiService';

export const generatePseudocode = async (code: string, language: string): Promise<string> => {
  try {
    return await openaiService.generatePseudocode(code, language);
  } catch (error) {
    console.error('Error generating pseudocode:', error);
    
    // Fallback to mock response if API fails
    return generateMockPseudocode(code, language);
  }
};

const generateMockPseudocode = (code: string, language: string): string => {
  // Generate pseudocode based on code patterns
  if (code.includes('function') || code.includes('def') || code.includes('public static')) {
    return generateFunctionPseudocode(code, language);
  }
  
  if (code.includes('for') || code.includes('while') || code.includes('forEach')) {
    return generateLoopPseudocode(code, language);
  }
  
  if (code.includes('if') || code.includes('switch') || code.includes('case')) {
    return generateConditionalPseudocode(code, language);
  }
  
  // Generic pseudocode generation
  return generateGenericPseudocode(code, language);
};

const generateFunctionPseudocode = (code: string, language: string): string => {
  return `**PSEUDOCODE BREAKDOWN**

**Algorithm: Function Implementation**

**STEP 1: INITIALIZATION**
• Define function with proper parameters
• Set up any required variables
• Prepare input validation if needed

**STEP 2: MAIN LOGIC**
• Process the input parameters
• Apply the core algorithm logic
• Handle any calculations or transformations

**STEP 3: CONDITIONAL PROCESSING**
• Check for edge cases or special conditions
• Apply different logic paths based on conditions
• Ensure all scenarios are handled

**STEP 4: RESULT PROCESSING**
• Calculate or prepare the final result
• Format the output as needed
• Perform any final validations

**STEP 5: RETURN/OUTPUT**
• Return the processed result
• Handle any error cases
• Provide appropriate feedback

**COMPLEXITY ANALYSIS:**
• Time Complexity: O(n) where n is the input size
• Space Complexity: O(1) for basic operations

**ALGORITHM SUMMARY:**
This ${language} function implements a step-by-step process to handle input, process data, and return results while maintaining proper error handling and efficiency.`;
};

const generateLoopPseudocode = (code: string, language: string): string => {
  return `**PSEUDOCODE BREAKDOWN**

**Algorithm: Iterative Processing**

**STEP 1: SETUP**
• Initialize loop counter or iterator
• Set up collection/array to process
• Prepare any accumulator variables

**STEP 2: LOOP INITIALIZATION**
• START iteration process
• Set initial conditions
• Define termination criteria

**STEP 3: LOOP BODY (REPEATED PROCESS)**
• FOR each element in the collection:
  → Access current element
  → Apply processing logic
  → Update any tracking variables
  → Perform required operations

**STEP 4: LOOP CONTINUATION**
• Check if termination condition is met
• IF not finished:
  → Move to next element
  → REPEAT Step 3
• IF finished:
  → PROCEED to Step 5

**STEP 5: POST-PROCESSING**
• Finalize any accumulated results
• Clean up temporary variables
• Return or output final results

**LOOP PATTERN:**
\`\`\`
WHILE (condition is true) DO
    process current item
    update variables
    move to next item
END WHILE
\`\`\`

**ALGORITHM SUMMARY:**
This ${language} code uses iterative processing to handle each element systematically, ensuring all items are processed according to the defined logic.`;
};

const generateConditionalPseudocode = (code: string, language: string): string => {
  return `**PSEUDOCODE BREAKDOWN**

**Algorithm: Conditional Logic Processing**

**STEP 1: INPUT EVALUATION**
• Receive input parameters
• Prepare variables for condition checking
• Set up default values if needed

**STEP 2: CONDITION ANALYSIS**
• Evaluate primary condition
• Check all relevant criteria
• Determine which path to follow

**STEP 3: DECISION BRANCHING**
• IF (primary condition is TRUE):
  → Execute Path A logic
  → Perform specific operations for this case
  → Set appropriate result values

• ELSE IF (secondary condition is TRUE):
  → Execute Path B logic
  → Handle alternative scenario
  → Apply different processing rules

• ELSE:
  → Execute default Path C logic
  → Handle fallback case
  → Apply standard processing

**STEP 4: RESULT CONSOLIDATION**
• Merge results from chosen path
• Apply any common post-processing
• Validate final output

**STEP 5: OUTPUT**
• Return processed result
• Handle any cleanup
• Provide status feedback

**DECISION TREE:**
\`\`\`
IF condition1 THEN
    action1
ELSE IF condition2 THEN
    action2
ELSE
    default_action
END IF
\`\`\`

**ALGORITHM SUMMARY:**
This ${language} code implements branching logic to handle different scenarios, ensuring appropriate processing based on input conditions.`;
};

const generateGenericPseudocode = (code: string, language: string): string => {
  const lines = code.trim().split('\n').length;
  
  return `**PSEUDOCODE BREAKDOWN**

**Algorithm: ${language} Code Processing**

**STEP 1: INITIALIZATION**
• Set up required variables and constants
• Import necessary libraries or modules
• Prepare the execution environment

**STEP 2: INPUT PROCESSING**
• Receive or define input data
• Validate input parameters
• Convert data to required format

**STEP 3: MAIN ALGORITHM**
• Apply core business logic
• Process data according to requirements
• Handle calculations and transformations

**STEP 4: LOGIC FLOW**
• Execute sequential operations (${lines} lines of code)
• Apply conditional logic where needed
• Manage data flow between operations

**STEP 5: OUTPUT GENERATION**
• Format results for output
• Perform final validations
• Return or display final results

**GENERAL STRUCTURE:**
\`\`\`
BEGIN program
    DECLARE variables
    INPUT data
    PROCESS data according to logic
    OUTPUT results
END program
\`\`\`

**ALGORITHM SUMMARY:**
This ${language} code implements a structured approach to process input data, apply business logic, and generate appropriate output while maintaining code quality and readability.

**KEY CONCEPTS:**
• Sequential execution of operations
• Data transformation and processing
• Result generation and output handling`;
};
