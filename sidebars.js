// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['getting-started/index', 'getting-started/ros2', 'getting-started/simulation'],
    },
    {
      type: 'doc',
      id: 'intro',
    },
    {
      type: 'category',
      label: 'Module 1: Robotic Nervous System (ROS 2)',
      items: [
        'modules/module1-ros2/intro',
        'modules/module1-ros2/concepts',
        'modules/module1-ros2/practical-examples',
        'modules/module1-ros2/exercises'
      ],
    },
    {
      type: 'category',
      label: 'Module 2: Digital Twin (Gazebo & Unity)',
      items: [
        'modules/module2-simulation/intro',
        'modules/module2-simulation/gazebo',
        'modules/module2-simulation/unity',
        'modules/module2-simulation/exercises'
      ],
    },
    {
      type: 'category',
      label: 'Module 3: AI-Robot Brain (NVIDIA Isaac)',
      items: [
        'modules/module3-nvidia-isaac/intro',
        'modules/module3-nvidia-isaac/perception',
        'modules/module3-nvidia-isaac/training',
        'modules/module3-nvidia-isaac/exercises'
      ],
    },
    {
      type: 'category',
      label: 'Module 4: Vision-Language-Action (VLA)',
      items: [
        'modules/module4-vla/intro',
        'modules/module4-vla/vision',
        'modules/module4-vla/language',
        'modules/module4-vla/action',
        'modules/module4-vla/exercises'
      ],
    },
    {
      type: 'category',
      label: 'Module 5: Capstone Project',
      items: [
        'modules/module5-capstone/intro',
        'modules/module5-capstone/humanoid-setup',
        'modules/module5-capstone/voice-control',
        'modules/module5-capstone/full-integration',
        'modules/module5-capstone/exercises'
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/citations',
        'reference/glossary',
        'reference/troubleshooting',
        'chat-interface'
      ],
    }
  ],
};

module.exports = sidebars;