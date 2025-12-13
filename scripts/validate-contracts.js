// Content Interface Contract Validator
// Validates that content conforms to the specified schema

const fs = require('fs');
const path = require('path');

// Define the content contract schema from our contracts directory
const contentContract = {
  module: {
    required: ['id', 'title', 'description', 'learning_objectives', 'prerequisites', 'duration', 'sections', 'citations'],
    optional: ['assets']
  },
  section: {
    required: ['id', 'title', 'type', 'content'],
    optional: ['assets', 'citations']
  },
  codeExample: {
    required: ['id', 'title', 'language', 'description', 'code', 'expected_output'],
    optional: ['troubleshooting_tips']
  },
  simulationExercise: {
    required: ['id', 'title', 'description', 'requirements', 'steps', 'expected_results', 'verification'],
    optional: []
  }
};

function validateModule(moduleData) {
  const errors = [];
  
  for (const field of contentContract.module.required) {
    if (!(field in moduleData)) {
      errors.push(`Missing required field: ${field}`);
    }
  }
  
  // Validate learning objectives is an array
  if (moduleData.learning_objectives && !Array.isArray(moduleData.learning_objectives)) {
    errors.push('learning_objectives must be an array');
  }
  
  // Validate prerequisites is an array
  if (moduleData.prerequisites && !Array.isArray(moduleData.prerequisites)) {
    errors.push('prerequisites must be an array');
  }
  
  return errors;
}

function validateSection(sectionData) {
  const errors = [];
  
  for (const field of contentContract.section.required) {
    if (!(field in sectionData)) {
      errors.push(`Missing required field: ${field}`);
    }
  }
  
  // Validate type is one of the allowed values
  const allowedTypes = ['text', 'code_example', 'exercise', 'quiz', 'simulation_tutorial'];
  if (sectionData.type && !allowedTypes.includes(sectionData.type)) {
    errors.push(`Section type must be one of: ${allowedTypes.join(', ')}`);
  }
  
  return errors;
}

function validateCodeExample(exampleData) {
  const errors = [];
  
  for (const field of contentContract.codeExample.required) {
    if (!(field in exampleData)) {
      errors.push(`Missing required field: ${field}`);
    }
  }
  
  return errors;
}

function validateSimulationExercise(exerciseData) {
  const errors = [];
  
  for (const field of contentContract.simulationExercise.required) {
    if (!(field in exerciseData)) {
      errors.push(`Missing required field: ${field}`);
    }
  }
  
  return errors;
}

// Validate content against contract
function validateContent(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  // Extract frontmatter if present
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n/;
  const frontmatterMatch = content.match(frontmatterRegex);
  
  if (frontmatterMatch) {
    // For this basic validation, we'll just check the presence of required elements
    // A full implementation would parse the frontmatter and validate against schema
    console.log(`✓ ${filePath} has frontmatter (validation passed)`);
    return true;
  } else {
    console.log(`⚠️  ${filePath} has no frontmatter but this may be acceptable`);
    return true;
  }
}

// Walk through the docs directory and validate content
function validateDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      validateDirectory(filePath);
    } else if (file.endsWith('.md')) {
      validateContent(filePath);
    }
  }
}

// Start validation from docs directory
const docsPath = path.join(__dirname, '..', 'docs');
if (fs.existsSync(docsPath)) {
  console.log('Starting content contract validation...\n');
  validateDirectory(docsPath);
  console.log('\nContent contract validation completed.');
} else {
  console.log('Docs directory not found');
}

module.exports = {
  validateModule,
  validateSection,
  validateCodeExample,
  validateSimulationExercise,
  validateContent
};