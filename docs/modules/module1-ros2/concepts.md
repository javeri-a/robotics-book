---
id: concepts
title: Core ROS 2 Concepts
sidebar_position: 2
---

# Core ROS 2 Concepts

## Nodes

In ROS 2, computation is broken down into nodes. A node is a process that performs computation. Nodes are designed to be modular and perform a single function well.

### Creating a Node

To create a node, you typically:
1. Initialize the ROS client library
2. Create a node
3. Spin the node to execute callbacks
4. Shutdown when finished

## Topics and Messages

Topics are named buses over which nodes exchange messages. Messages are data structures that are passed between nodes.

### Publisher-Subscriber Pattern

In the publisher-subscriber pattern:
- Publishers send messages to a topic
- Subscribers receive messages from a topic
- Multiple publishers and subscribers can use the same topic

## Services

Services provide a request/response communication pattern that is synchronous.

## Actions

Actions are a more advanced communication pattern that supports:
- Long-running requests
- Feedback during execution
- Result reporting

## Practice

Try implementing a simple publisher and subscriber node before proceeding.