# Data Model: Physical AI and Humanoid Robotics Textbook

## Entities

### Textbook Module
- **Name**: Unique identifier for the module (e.g., "ROS_2_Basics", "Gazebo_Simulation")
- **Title**: Human-readable title of the module
- **Description**: Brief overview of the module's content and objectives
- **Learning Objectives**: Specific skills or knowledge students should gain
- **Prerequisites**: Knowledge or skills required before starting the module
- **Duration**: Estimated time to complete the module
- **Content Path**: File path to the module's content files

### Content Section
- **ID**: Unique identifier within the module
- **Title**: Section title
- **Type**: Content type (text, code example, exercise, quiz, simulation tutorial)
- **Content**: The actual text or structured content
- **Assets**: Associated files (images, code files, simulation configs)
- **Citations**: List of sources cited in this section

### Code Example
- **ID**: Unique identifier within the textbook
- **Title**: Brief description of the example
- **Language**: Programming language used (Python, C++, etc.)
- **Description**: Explanation of what the example demonstrates
- **Code**: The actual code sample
- **Expected Output**: What students should see when running the code
- **Troubleshooting Tips**: Common issues and solutions

### Simulation Exercise
- **ID**: Unique identifier within the textbook
- **Title**: Name of the exercise
- **Description**: Overview of the exercise objectives
- **Requirements**: Software/hardware needed
- **Steps**: Detailed instructions for completing the exercise
- **Expected Results**: What students should observe
- **Verification**: How to confirm successful completion

### Capstone Project Component
- **ID**: Unique identifier for the component
- **Title**: Name of the project component
- **Module Integration**: Which modules this component builds on
- **Objectives**: What this component teaches
- **Implementation Steps**: How to build this component
- **Integration Points**: How this connects with other components

### Citation
- **ID**: Unique identifier (e.g., author_year)
- **Type**: Source type (journal, conference, documentation, book)
- **Authors**: List of authors
- **Title**: Title of the publication/work
- **Journal/Book**: Publication venue
- **Date**: Publication date
- **URL**: Link to the source if available
- **APA Format**: Properly formatted APA citation

## Relationships

- A **Textbook Module** contains multiple **Content Sections**
- A **Content Section** may reference multiple **Code Examples**
- A **Content Section** may include multiple **Simulation Exercises**
- **Content Sections** across different modules contribute to the **Capstone Project Components**
- All entities may reference multiple **Citations**

## Validation Rules

- All **Textbook Modules** must have a unique Name
- All **Content Sections** must belong to exactly one Module
- All **Content Sections** must have a defined Type
- All **Code Examples** must include both Code and Expected Output
- All **Citations** must follow APA format
- All **Simulation Exercises** must have clear verification steps