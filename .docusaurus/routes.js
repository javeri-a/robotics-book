import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/404',
    component: ComponentCreator('/404', '973'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '3c0'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '83f'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '393'),
            routes: [
              {
                path: '/docs/getting-started/',
                component: ComponentCreator('/docs/getting-started/', 'cd1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/ros2',
                component: ComponentCreator('/docs/getting-started/ros2', '490'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/simulation',
                component: ComponentCreator('/docs/getting-started/simulation', 'd23'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'aed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/modules/module1-ros2/concepts',
                component: ComponentCreator('/docs/modules/module1-ros2/concepts', 'ee9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/modules/module1-ros2/exercises',
                component: ComponentCreator('/docs/modules/module1-ros2/exercises', '418'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/modules/module1-ros2/intro',
                component: ComponentCreator('/docs/modules/module1-ros2/intro', '5a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/modules/module1-ros2/practical-examples',
                component: ComponentCreator('/docs/modules/module1-ros2/practical-examples', '132'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/modules/module2-simulation/exercises',
                component: ComponentCreator('/docs/modules/module2-simulation/exercises', '586'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/modules/module2-simulation/gazebo',
                component: ComponentCreator('/docs/modules/module2-simulation/gazebo', '3e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/modules/module2-simulation/intro',
                component: ComponentCreator('/docs/modules/module2-simulation/intro', 'a9a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/modules/module2-simulation/unity',
                component: ComponentCreator('/docs/modules/module2-simulation/unity', '320'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/modules/module3-nvidia-isaac/exercises',
                component: ComponentCreator('/docs/modules/module3-nvidia-isaac/exercises', 'f5b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/modules/module3-nvidia-isaac/intro',
                component: ComponentCreator('/docs/modules/module3-nvidia-isaac/intro', 'da2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/modules/module3-nvidia-isaac/perception',
                component: ComponentCreator('/docs/modules/module3-nvidia-isaac/perception', 'fe2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/modules/module3-nvidia-isaac/training',
                component: ComponentCreator('/docs/modules/module3-nvidia-isaac/training', 'e7f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/modules/module4-vla/action',
                component: ComponentCreator('/docs/modules/module4-vla/action', '9a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/modules/module4-vla/exercises',
                component: ComponentCreator('/docs/modules/module4-vla/exercises', '84e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/modules/module4-vla/intro',
                component: ComponentCreator('/docs/modules/module4-vla/intro', 'bfa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/modules/module4-vla/language',
                component: ComponentCreator('/docs/modules/module4-vla/language', '1d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/modules/module4-vla/vision',
                component: ComponentCreator('/docs/modules/module4-vla/vision', '62f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/modules/module5-capstone/exercises',
                component: ComponentCreator('/docs/modules/module5-capstone/exercises', '484'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/modules/module5-capstone/full-integration',
                component: ComponentCreator('/docs/modules/module5-capstone/full-integration', '4e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/modules/module5-capstone/humanoid-setup',
                component: ComponentCreator('/docs/modules/module5-capstone/humanoid-setup', '8d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/modules/module5-capstone/intro',
                component: ComponentCreator('/docs/modules/module5-capstone/intro', '57b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/modules/module5-capstone/voice-control',
                component: ComponentCreator('/docs/modules/module5-capstone/voice-control', '5e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/reference/citations',
                component: ComponentCreator('/docs/reference/citations', '4f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/reference/glossary',
                component: ComponentCreator('/docs/reference/glossary', '545'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/reference/troubleshooting',
                component: ComponentCreator('/docs/reference/troubleshooting', '336'),
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
    path: '/',
    component: ComponentCreator('/', 'c4f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
