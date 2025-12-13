import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/physical-ai-humanoid-textbook/404',
    component: ComponentCreator('/physical-ai-humanoid-textbook/404', 'a2d'),
    exact: true
  },
  {
    path: '/physical-ai-humanoid-textbook/docs',
    component: ComponentCreator('/physical-ai-humanoid-textbook/docs', 'f18'),
    routes: [
      {
        path: '/physical-ai-humanoid-textbook/docs',
        component: ComponentCreator('/physical-ai-humanoid-textbook/docs', 'a5b'),
        routes: [
          {
            path: '/physical-ai-humanoid-textbook/docs',
            component: ComponentCreator('/physical-ai-humanoid-textbook/docs', '30d'),
            routes: [
              {
                path: '/physical-ai-humanoid-textbook/docs/getting-started/',
                component: ComponentCreator('/physical-ai-humanoid-textbook/docs/getting-started/', '738'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-textbook/docs/getting-started/ros2',
                component: ComponentCreator('/physical-ai-humanoid-textbook/docs/getting-started/ros2', 'b7f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-textbook/docs/getting-started/simulation',
                component: ComponentCreator('/physical-ai-humanoid-textbook/docs/getting-started/simulation', '90a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-textbook/docs/intro',
                component: ComponentCreator('/physical-ai-humanoid-textbook/docs/intro', '606'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-textbook/docs/modules/module1-ros2/concepts',
                component: ComponentCreator('/physical-ai-humanoid-textbook/docs/modules/module1-ros2/concepts', 'bfb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-textbook/docs/modules/module1-ros2/exercises',
                component: ComponentCreator('/physical-ai-humanoid-textbook/docs/modules/module1-ros2/exercises', '194'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-textbook/docs/modules/module1-ros2/intro',
                component: ComponentCreator('/physical-ai-humanoid-textbook/docs/modules/module1-ros2/intro', '83e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-textbook/docs/modules/module1-ros2/practical-examples',
                component: ComponentCreator('/physical-ai-humanoid-textbook/docs/modules/module1-ros2/practical-examples', '98b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-textbook/docs/modules/module2-simulation/exercises',
                component: ComponentCreator('/physical-ai-humanoid-textbook/docs/modules/module2-simulation/exercises', 'ae6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-textbook/docs/modules/module2-simulation/gazebo',
                component: ComponentCreator('/physical-ai-humanoid-textbook/docs/modules/module2-simulation/gazebo', '93b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-textbook/docs/modules/module2-simulation/intro',
                component: ComponentCreator('/physical-ai-humanoid-textbook/docs/modules/module2-simulation/intro', '579'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-textbook/docs/modules/module2-simulation/unity',
                component: ComponentCreator('/physical-ai-humanoid-textbook/docs/modules/module2-simulation/unity', 'ab7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-textbook/docs/modules/module3-nvidia-isaac/exercises',
                component: ComponentCreator('/physical-ai-humanoid-textbook/docs/modules/module3-nvidia-isaac/exercises', '6f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-textbook/docs/modules/module3-nvidia-isaac/intro',
                component: ComponentCreator('/physical-ai-humanoid-textbook/docs/modules/module3-nvidia-isaac/intro', 'b98'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-textbook/docs/modules/module3-nvidia-isaac/perception',
                component: ComponentCreator('/physical-ai-humanoid-textbook/docs/modules/module3-nvidia-isaac/perception', 'b93'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-textbook/docs/modules/module3-nvidia-isaac/training',
                component: ComponentCreator('/physical-ai-humanoid-textbook/docs/modules/module3-nvidia-isaac/training', 'bf0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-textbook/docs/modules/module4-vla/action',
                component: ComponentCreator('/physical-ai-humanoid-textbook/docs/modules/module4-vla/action', '3fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-textbook/docs/modules/module4-vla/exercises',
                component: ComponentCreator('/physical-ai-humanoid-textbook/docs/modules/module4-vla/exercises', 'd5e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-textbook/docs/modules/module4-vla/intro',
                component: ComponentCreator('/physical-ai-humanoid-textbook/docs/modules/module4-vla/intro', '118'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-textbook/docs/modules/module4-vla/language',
                component: ComponentCreator('/physical-ai-humanoid-textbook/docs/modules/module4-vla/language', 'aaa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-textbook/docs/modules/module4-vla/vision',
                component: ComponentCreator('/physical-ai-humanoid-textbook/docs/modules/module4-vla/vision', 'e68'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-textbook/docs/modules/module5-capstone/exercises',
                component: ComponentCreator('/physical-ai-humanoid-textbook/docs/modules/module5-capstone/exercises', '3fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-textbook/docs/modules/module5-capstone/full-integration',
                component: ComponentCreator('/physical-ai-humanoid-textbook/docs/modules/module5-capstone/full-integration', 'cba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-textbook/docs/modules/module5-capstone/humanoid-setup',
                component: ComponentCreator('/physical-ai-humanoid-textbook/docs/modules/module5-capstone/humanoid-setup', 'eaf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-textbook/docs/modules/module5-capstone/intro',
                component: ComponentCreator('/physical-ai-humanoid-textbook/docs/modules/module5-capstone/intro', '72e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-textbook/docs/modules/module5-capstone/voice-control',
                component: ComponentCreator('/physical-ai-humanoid-textbook/docs/modules/module5-capstone/voice-control', '152'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-textbook/docs/reference/citations',
                component: ComponentCreator('/physical-ai-humanoid-textbook/docs/reference/citations', '91d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-textbook/docs/reference/glossary',
                component: ComponentCreator('/physical-ai-humanoid-textbook/docs/reference/glossary', 'abe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-textbook/docs/reference/troubleshooting',
                component: ComponentCreator('/physical-ai-humanoid-textbook/docs/reference/troubleshooting', '078'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/physical-ai-humanoid-textbook/',
    component: ComponentCreator('/physical-ai-humanoid-textbook/', 'c98'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
