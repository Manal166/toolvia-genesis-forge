
export interface RegexResult {
  regex: string;
  explanation: string;
}

export const generateRegex = async (description: string): Promise<RegexResult> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Mock regex generation based on common patterns
  const patterns: Record<string, RegexResult> = {
    'email': {
      regex: '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}',
      explanation: '• [a-zA-Z0-9._%+-]+ - Matches one or more alphanumeric characters, dots, underscores, percent signs, plus signs, or hyphens for the username\n• @ - Matches the literal @ symbol\n• [a-zA-Z0-9.-]+ - Matches one or more alphanumeric characters, dots, or hyphens for the domain name\n• \\. - Matches a literal dot\n• [a-zA-Z]{2,} - Matches two or more letters for the top-level domain'
    },
    'phone': {
      regex: '\\([0-9]{3}\\) [0-9]{3}-[0-9]{4}',
      explanation: '• \\( - Matches a literal opening parenthesis\n• [0-9]{3} - Matches exactly 3 digits for area code\n• \\) - Matches a literal closing parenthesis\n• [space] - Matches a literal space\n• [0-9]{3} - Matches exactly 3 digits\n• - - Matches a literal hyphen\n• [0-9]{4} - Matches exactly 4 digits'
    },
    'url': {
      regex: 'https?://[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}(?:/[^\\s]*)?',
      explanation: '• https? - Matches "http" followed by an optional "s"\n• :// - Matches the literal "://"\n• [a-zA-Z0-9.-]+ - Matches domain characters\n• \\. - Matches a literal dot\n• [a-zA-Z]{2,} - Matches the top-level domain\n• (?:/[^\\s]*)? - Optionally matches a path (non-whitespace characters after /)'
    },
    'date': {
      regex: '(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])/([0-9]{4})',
      explanation: '• (0[1-9]|1[0-2]) - Matches months 01-12\n• / - Matches literal forward slash\n• (0[1-9]|[12][0-9]|3[01]) - Matches days 01-31\n• / - Matches literal forward slash\n• ([0-9]{4}) - Matches exactly 4 digits for year'
    },
    'hex': {
      regex: '#[0-9A-Fa-f]{6}',
      explanation: '• # - Matches the literal hash symbol\n• [0-9A-Fa-f]{6} - Matches exactly 6 hexadecimal characters (0-9, A-F, a-f)'
    },
    'ip': {
      regex: '(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)',
      explanation: '• 25[0-5] - Matches 250-255\n• 2[0-4][0-9] - Matches 200-249\n• [01]?[0-9][0-9]? - Matches 0-199\n• \\. - Matches literal dot\n• Pattern repeats 3 times for first three octets, then once more for the final octet'
    }
  };

  const lowerDescription = description.toLowerCase();
  
  // Try to match common patterns
  for (const [key, result] of Object.entries(patterns)) {
    if (lowerDescription.includes(key)) {
      return result;
    }
  }

  // Default fallback for unrecognized patterns
  if (lowerDescription.includes('word')) {
    return {
      regex: '\\b[A-Za-z]+\\b',
      explanation: '• \\b - Word boundary\n• [A-Za-z]+ - One or more letters\n• \\b - Word boundary'
    };
  }

  if (lowerDescription.includes('number') || lowerDescription.includes('digit')) {
    return {
      regex: '\\d+',
      explanation: '• \\d - Matches any digit (0-9)\n• + - Matches one or more of the preceding character'
    };
  }

  if (lowerDescription.includes('capital') || lowerDescription.includes('uppercase')) {
    return {
      regex: '\\b[A-Z][a-z]*\\b',
      explanation: '• \\b - Word boundary\n• [A-Z] - Matches one uppercase letter\n• [a-z]* - Matches zero or more lowercase letters\n• \\b - Word boundary'
    };
  }

  // Generic fallback
  return {
    regex: '.*',
    explanation: '• . - Matches any character except newline\n• * - Matches zero or more of the preceding character\n\nNote: This is a generic pattern. For better results, try describing your pattern more specifically (e.g., "email addresses", "phone numbers", "dates").'
  };
};
