import React from 'react';
import { MessageSquare } from 'lucide-react';
import './FloatingChat.css';

const FloatingChat = () => {
    const phoneNumber = "919000000000"; // Placeholder: User should replace this with their actual number
    const message = encodeURIComponent("Hi Tiles IT Solutions, I'm interested in a consultation.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="floating-chat-btn"
            aria-label="Chat on WhatsApp"
        >
            <div className="chat-tooltip">Chat with us</div>
            <MessageSquare size={24} />
            <div className="pulse-ring"></div>
        </a>
    );
};

export default FloatingChat;
