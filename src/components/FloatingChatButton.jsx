import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './FloatingChatButton.css';

const FloatingChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(true);

  // Close chat when pressing Escape key
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [isOpen]);

  // Show/hide button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 100px
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        // Only hide button if chat is closed
        if (!isOpen) {
          setShowButton(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Render the chat button to the body
  if (typeof document !== 'undefined') {
    let chatContainer = document.getElementById('floating-chat-container');
    if (!chatContainer) {
      chatContainer = document.createElement('div');
      chatContainer.id = 'floating-chat-container';
      document.body.appendChild(chatContainer);
    }

    return ReactDOM.createPortal(
      <>
        <button
          className={`floating-chat-button ${showButton ? 'visible' : ''} ${isOpen ? 'open' : ''}`}
          onClick={toggleChat}
          aria-label={isOpen ? "Close chat" : "Open chat"}
          title="Ask questions about humanoid robotics"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          )}
        </button>

        {isOpen && (
          <div className="chat-overlay" onClick={toggleChat}>
            <div className="chat-window" onClick={(e) => e.stopPropagation()}>
              <ChatWindow onClose={() => setIsOpen(false)} />
            </div>
          </div>
        )}
      </>,
      chatContainer
    );
  }

  return null;
};

const ChatWindow = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! 👋 I'm your Humanoid Robotics Assistant. How can I help you with physical AI and robotics today?", sender: 'bot', timestamp: new Date() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = React.useRef(null);
  const inputRef = React.useRef(null);

  // Auto-focus input when chat opens
  React.useEffect(() => {
    if (inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 100);
    }
  }, []);

  // Auto-scroll to bottom when new messages arrive
  React.useEffect(() => {
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
    <div className="chat-window-content">
      <div className="chat-header">
        <h3>Humanoid Robotics Assistant</h3>
        <button className="close-button" onClick={onClose} aria-label="Close chat">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
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

export default FloatingChatButton;