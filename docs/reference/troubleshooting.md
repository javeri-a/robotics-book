# Environment Configuration for Physical AI and Humanoid Robotics Textbook

This document outlines the configuration settings for different deployment targets.

## Development Environment

- Node.js version: 18.x or higher
- Docusaurus version: 3.1.0
- Package manager: npm or yarn

### Development Setup

```bash
# Install dependencies
npm install

# Start development server
npm start
```

## Production Environment

- Host: GitHub Pages
- Base URL: /physical-ai-humanoid-textbook/
- Build command: npm run build

### Production Build

```bash
# Build for production
npm run build

# Test production build locally
npm run serve
```

## Simulation Environment

For simulation exercises, the following configurations are required:

### ROS 2 Environment
- Distribution: Humble Hawksbill or Rolling
- RMW Implementation: FastDDS or CycloneDDS
- Domain ID: Configurable via environment variable

### Gazebo Environment
- Version: Garden or Fortress
- Resource paths configured for models and worlds
- Graphics drivers properly configured

### Unity Environment
- Version: 2022.3 LTS or later
- Robotics package installed
- ML-Agents package installed

## Configuration Files

- `.env.development` - Development-specific settings
- `.env.production` - Production-specific settings
- `docusaurus.config.js` - Main Docusaurus configuration
- `sidebars.js` - Navigation structure
- `package.json` - Dependencies and scripts

## Environment Variables

The following environment variables can be used to customize the textbook:

- `TEXTBOOK_VERSION` - Version of the textbook
- `SIMULATION_BACKEND` - Default simulation backend (gazebo/unity)
- `ROS_DISTRO` - Default ROS distribution
- `GITHUB_TOKEN` - For automated deployment