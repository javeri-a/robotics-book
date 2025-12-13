// Basic content validation script
// This script checks for common issues in textbook content

const fs = require('fs');
const path = require('path');

// Define required content types based on our data model
const requiredFields = {
  'module': ['id', 'title', 'description', 'learning_objectives', 'prerequisites', 'duration', 'sections', 'citations'],
  'section': ['id', 'title', 'type', 'content', 'citations'],
  'code_example': ['id', 'title', 'language', 'description', 'code', 'expected_output'],
  'simulation_exercise': ['id', 'title', 'description', 'requirements', 'steps', 'expected_results', 'verification'],
  'citation': ['id', 'type', 'authors', 'title', 'journal_book', 'date', 'url', 'apa_format']
};

function validateContent(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Check if content has frontmatter
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n/;
  const frontmatterMatch = content.match(frontmatterRegex);
  
  if (!frontmatterMatch) {
    console.log(`❌ No frontmatter found in ${filePath}`);
    return false;
  }
  
  // Extract frontmatter and content
  const frontmatter = frontmatterMatch[1];
  const body = content.slice(frontmatterMatch[0].length);
  
  // Validate basic structure
  const hasTitle = /# .+/.test(content);
  const hasContent = body.trim().length > 0;
  
  if (!hasTitle) {
    console.log(`❌ No title found in ${filePath}`);
    return false;
  }
  
  if (!hasContent) {
    console.log(`❌ No content found in ${filePath}`);
    return false;
  }
  
  console.log(`✅ ${filePath} passed basic validation`);
  return true;
}

// Walk through the docs directory and validate all markdown files
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
  console.log('Starting content validation...\n');
  validateDirectory(docsPath);
  console.log('\nContent validation completed.');
} else {
  console.log('Docs directory not found');
}