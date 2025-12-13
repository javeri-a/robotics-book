import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner, isMounted && styles.heroBannerLoaded)}>
      <div className="container">
        <div className={styles.heroBackgroundPattern}></div>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.heroSubtitle}>
              <span className={styles.heroBadge}>ADVANCED ROBOTICS CURRICULUM</span>
            </div>
            <h1 className={clsx('hero__title', styles.fadeIn, isMounted && styles.loaded)}>
              {siteConfig.title}
            </h1>
            <p className={clsx('hero__subtitle', styles.fadeIn, isMounted && styles.loaded)}>
              {siteConfig.tagline}
            </p>
            <p className={clsx(styles.heroDescription, styles.fadeIn, isMounted && styles.loaded)}>
              Master the complete stack of humanoid robotics development. From ROS 2 fundamentals to advanced AI integration,
              learn to build sophisticated humanoid control systems used in research labs and industry.
            </p>
            <div className={styles.heroIcons}>
              <div className={clsx(styles.heroIcon, styles.fadeIn, isMounted && styles.loaded)} style={{ animationDelay: '0.4s' }}>
                <div className={styles.iconWrapper}>⚙️</div>
                <span>ROS 2</span>
              </div>
              <div className={clsx(styles.heroIcon, styles.fadeIn, isMounted && styles.loaded)} style={{ animationDelay: '0.5s' }}>
                <div className={styles.iconWrapper}>🧠</div>
                <span>AI/ML</span>
              </div>
              <div className={clsx(styles.heroIcon, styles.fadeIn, isMounted && styles.loaded)} style={{ animationDelay: '0.6s' }}>
                <div className={styles.iconWrapper}>🎮</div>
                <span>Simulators</span>
              </div>
              <div className={clsx(styles.heroIcon, styles.fadeIn, isMounted && styles.loaded)} style={{ animationDelay: '0.7s' }}>
                <div className={styles.iconWrapper}>🔗</div>
                <span>Hardware</span>
              </div>
            </div>
            <div className={clsx(styles.buttons, styles.fadeIn, isMounted && styles.loaded)}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro">
                Get Started
              </Link>
              <Link
                className="button button--outline button--lg margin-left--md"
                to="/docs/modules/module1-ros2/intro">
                View Modules
              </Link>
            </div>
          </div>
          <div className={clsx(styles.heroImage, styles.fadeIn, isMounted && styles.loaded)}>
            <div className={styles.robotGraphic}></div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Feature({title, description, icon, index}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={clsx('col col--4', styles.featureCard, isVisible && styles.featureVisible)}>
      <div className="text--center padding-horiz--md">
        <div className={styles.featureIcon}>{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function UseCase({title, description, index}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={clsx('col col--6', styles.useCaseCard, isVisible && styles.useCaseVisible)}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function StatsCard() {
  const [stats, setStats] = useState([
    { value: 0, label: 'Modules', target: 5 },
    { value: 0, label: 'Projects', target: 12 },
    { value: 0, label: 'Concepts', target: 50 },
    { value: 0, label: 'Developers', target: 1500 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prevStats =>
        prevStats.map(stat =>
          stat.value < stat.target
            ? { ...stat, value: Math.min(stat.target, stat.value + 1) }
            : stat
        )
      );
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={clsx('container', styles.statsSection)}>
      <div className="row">
        {stats.map((stat, index) => (
          <div key={index} className="col col--3 text--center">
            <div className={styles.statNumber}>{stat.value}+</div>
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Testimonial() {
  return (
    <div className={clsx('container', styles.testimonialSection)}>
      <div className="row">
        <div className="col col--12 text--center">
          <h3 className={styles.testimonialTitle}>Trusted by Robotics Engineers</h3>
          <p className={styles.testimonialText}>
            "This curriculum provided the foundation I needed to build advanced humanoid control systems at my research lab."
          </p>
          <p className={styles.testimonialAuthor}>— Lead Robotics Engineer, Research Institution</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  const features = [
    {
      title: 'Complete ROS 2 Integration',
      description: 'Learn robotics middleware with practical examples for humanoid robot control systems.',
      icon: '⚙️'
    },
    {
      title: 'Simulation to Reality',
      description: 'Develop and test in Gazebo and NVIDIA Isaac Sim before deploying to real hardware.',
      icon: '🎮'
    },
    {
      title: 'AI & Machine Learning',
      description: 'Implement computer vision, path planning, and behavior learning in robots.',
      icon: '🧠'
    },
    {
      title: 'Hardware Control',
      description: 'Master real-time control systems for actuators, sensors, and robot platforms.',
      icon: '🔗'
    },
    {
      title: 'Vision-Language-Action Systems',
      description: 'Build robots that understand natural language commands and perform complex tasks.',
      icon: '💬'
    },
    {
      title: 'Capstone Projects',
      description: 'Apply your knowledge to complex, real-world humanoid robotics challenges.',
      icon: '🎯'
    }
  ];

  const useCases = [
    {
      title: 'ROS 2 Development',
      description: 'Master the Robot Operating System for distributed robotics applications with real-time communication.'
    },
    {
      title: 'Simulation Environments',
      description: 'Create and test algorithms in realistic physics engines before deploying to hardware.'
    },
    {
      title: 'Computer Vision',
      description: 'Integrate perception systems for object detection, tracking, and environment understanding.'
    },
    {
      title: 'Motion Planning',
      description: 'Implement algorithms for pathfinding, trajectory generation, and obstacle avoidance.'
    }
  ];

  return (
    <Layout
      title={`Home`}
      description="Physical AI & Humanoid Robotics Textbook - Connecting digital AI to real robots">
      <HomepageHeader />
      <main>
        <StatsCard />

        <section className={styles.features}>
          <div className="container padding-vert--xl">
            <div className="row">
              <div className="col col--12 text--center">
                <h2 className={styles.sectionTitle}>Learn Humanoid Robotics Development</h2>
                <p className="padding-horiz--md">
                  Comprehensive curriculum covering the full stack of humanoid robotics: from low-level hardware control to high-level AI integration.
                </p>
              </div>
            </div>

            <div className="row">
              {features.map((props, idx) => (
                <Feature key={idx} {...props} index={idx} />
              ))}
            </div>
          </div>
        </section>

        <Testimonial />

        <section className={styles.usecases}>
          <div className="container padding-vert--xl">
            <div className="row">
              <div className="col col--12">
                <h2 className="text--center sectionTitle">Developer-Focused Learning Path</h2>
                <p className="text--center padding-horiz--md">
                  Practical modules designed for engineers and researchers building humanoid robots
                </p>
              </div>
            </div>

            <div className="row">
              {useCases.map((props, idx) => (
                <UseCase key={idx} {...props} index={idx} />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.codeExample}>
          <div className="container padding-vert--xl">
            <div className="row">
              <div className="col col--8 col--offset--2">
                <h2 className="text--center">Example: ROS 2 Node</h2>
                <p className="text--center padding-horiz--md">
                  Simple implementation of a robot controller node
                </p>
                <div className="code-block">
                  <pre><code>{`import rclpy
from rclpy.node import Node
from sensor_msgs.msg import JointState

class RobotController(Node):
    def __init__(self):
        super().__init__('robot_controller')
        self.subscription = self.create_subscription(
            JointState,
            'joint_states',
            self.listener_callback,
            10)

    def listener_callback(self, msg):
        # Process joint positions for humanoid control
        for position in msg.position:
            print(f"Joint position: {position}")

def main(args=None):
    rclpy.init(args=args)
    controller = RobotController()
    rclpy.spin(controller)
    controller.destroy_node()
    rclpy.shutdown()`}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.finalcta}>
          <div className="container padding-vert--xl text--center">
            <h2>Start Building Humanoid Robots</h2>
            <p className="padding-horiz--md">Join developers creating the next generation of physical AI systems</p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/intro">
                Begin Your Journey
              </Link>
              <Link
                className="button button--secondary button--lg margin-left--md"
                to="/docs/modules/module1-ros2/intro">
                Explore Modules
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}