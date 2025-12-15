import React, { useState, useRef, useEffect } from 'react';
import './ChatInterface.css';

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Welcome to the Humanoid Robotics Textbook! I'm here to help you with any questions about physical AI and robotics.", sender: 'bot', timestamp: new Date() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSend = async (e) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    
    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: generateBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const generateBotResponse = (userInput) => {
    // Simple response generation based on keywords
    const input = userInput.toLowerCase();
    
    if (input.includes('hello') || input.includes('hi')) {
      return "Hello! Welcome to the Humanoid Robotics Textbook. What would you like to know about physical AI and robotics?";
    } else if (input.includes('ros') || input.includes('ros2')) {
      return "ROS (Robot Operating System) is a flexible framework for writing robot software. Chapter 2 of our textbook covers ROS 2 basics and advanced concepts.";
    } else if (input.includes('simulation') || input.includes('digital twin')) {
      return "Digital twins and simulation are crucial for developing humanoid robots. Module 2 of our textbook explores various simulation environments and tools.";
    } else if (input.includes('nvidia') || input.includes('isaac')) {
      return "NVIDIA Isaac is a comprehensive robotics platform that includes hardware, software, and simulators. Module 3 covers Isaac in detail.";
    } else if (input.includes('vla') || input.includes('vision')) {
      return "Vision-Language-Action (VLA) systems are transforming robotics. Module 4 discusses VLA systems and their applications in humanoid robots.";
    } else if (input.includes('capstone') || input.includes('project')) {
      return "The capstone module integrates everything you've learned, focusing on a complete humanoid robot project. Check out Module 5!";
    } else if (input.includes('thank')) {
      return "You're welcome! Feel free to ask more questions about humanoid robotics.";
    } else {
      return "That's an interesting question about humanoid robotics. The textbook covers many topics including ROS 2, simulation, NVIDIA Isaac, and VLA systems. Which area would you like to explore further?";
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend(e);
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h3>Humanoid Robotics Assistant</h3>
        <p>Ask questions about physical AI and robotics</p>
      </div>
      
      <div className="chat-messages">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`message ${message.sender}`}
            style={{ animationDelay: `${(message.id - messages[0].id) * 0.1}s` }}
          >
            <div className="message-bubble">
              <div className="message-content">{message.text}</div>
              <div className="message-timestamp">{formatTime(message.timestamp)}</div>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="message bot">
            <div className="message-bubble">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <form className="chat-input-form" onSubmit={handleSend}>
        <textarea
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask a question about humanoid robotics..."
          rows="1"
          className="chat-input"
        />
        <button type="submit" className="send-button" disabled={!inputValue.trim()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default ChatInterface;