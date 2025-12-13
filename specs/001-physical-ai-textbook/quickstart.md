# Quickstart Guide: Physical AI and Humanoid Robotics Textbook

## Setting Up Your Learning Environment

This guide will help you set up everything needed to work with the Physical AI and Humanoid Robotics textbook content.

### Prerequisites

- Basic programming knowledge (Python and C++)
- Familiarity with command line interfaces
- Git version control system
- GitHub account

### Step 1: Clone the Textbook Repository

```bash
git clone https://github.com/javeri-a/physical-ai-humanoid-textbook.git
cd physical-ai-humanoid-textbook
```

### Step 2: Install Docusaurus

The textbook is built with Docusaurus, a modern static website generator.

```bash
# Install Node.js dependencies
npm install
```

### Step 3: Start the Development Server

```bash
npm start
```

This command starts a local development server and opens the textbook in your default browser at `http://localhost:3000`.

### Step 4: Explore the Content Structure

Once the development server is running, you'll see the textbook organized into these main modules:

1. **Robotic Nervous System (ROS 2)** - Understanding ROS 2 concepts and implementation
2. **Digital Twin (Gazebo & Unity)** - Simulation environments for robotics
3. **AI-Robot Brain (NVIDIA Isaac)** - AI-driven robotics with Isaac platform
4. **Vision-Language-Action (VLA)** - Integrating perception and action systems
5. **Capstone Project** - Complete humanoid robot with voice control

### Step 5: Working with Simulations

Most chapters include simulation exercises that require additional tools:

#### For ROS 2 Exercises
```bash
# Install ROS 2 (follow the official installation guide for your OS)
# Recommended: ROS 2 Humble Hawksbill (Ubuntu 22.04) or Rolling
```

#### For Gazebo Exercises
```bash
# Install Gazebo Garden or Fortress
# Follow installation guide at: https://gazebosim.org/docs
```

#### For Unity Exercises
```bash
# Download Unity Hub and install Unity 2022.3 LTS or later
# Add the Robotics package through Unity's Package Manager
```

#### For NVIDIA Isaac Exercises
```bash
# Install Isaac Sim (available through NVIDIA Developer account)
# Or use Isaac ROS packages with ROS 2
```

### Step 6: Running Code Examples

Each chapter will contain code examples you can run. For example:

```bash
# Navigate to the chapter's code directory
cd docs/modules/module1-ros2/practical-examples

# Run the example (details will vary by example)
python3 example_publisher.py
```

### Step 7: Validating Your Setup

After setting up your environment, verify that everything works by running the basic example in Chapter 1:

```bash
# From the project root
cd docs/getting-started/
python3 -c "import sys; print(f'Python version: {sys.version}')"
```

### Troubleshooting

If you encounter issues:

1. Check that Node.js version is 18.x or higher
2. Verify all prerequisites are installed
3. Consult the troubleshooting section in the reference materials
4. Check the textbook's GitHub repository for known issues

### Next Steps

Now that your environment is set up:

1. Read the first module on ROS 2 basics
2. Complete the practical examples
3. Set up your simulation environment
4. Work through the exercises in order
5. Start on the capstone project when you've completed the foundational modules