import React, { useState } from "react";

import { fetchOpenAIResponse } from "../../services/chatBot";

import {
  ChatbotWrapper,
  ChatHeader,
  CloseButton,
  ChatBody,
  MessageContainer,
  MessageBubble,
  ChatInputWrapper,
  ChatInput,
  ChatButton,
  SendButton,
} from "./ChatboyStyle";

const Chatbot = ({ context }) => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleChat = () => {
    setOpen((prevOpen) => {
      if (!prevOpen) {
        setMessages([
          {
            text: "Hola, soy Jaime Aza, desarrollador de software. ¿Qué deseas saber de mí?",
            sender: "bot",
          },
        ]);
      }
      return !prevOpen;
    });
  };

  const closeChat = () => setOpen(false);

  const handleSendMessage = async (e) => {
    if (e.key === "Enter" && input.trim()) {
      setMessages([
        ...messages,
        { text: input, sender: "user" },
        { text: "...", sender: "bot" },
      ]);
      const userMessage = input;
      setInput("");
      await fetchOpenAIResponse(userMessage, setMessages, context);
    }
  };

  const handleSendButtonClick = async () => {
    // New function for button click
    if (input.trim()) {
      setMessages([
        ...messages,
        { text: input, sender: "user" },
        { text: "...", sender: "bot" },
      ]);
      const userMessage = input;
      setInput("");
      await fetchOpenAIResponse(userMessage, setMessages, context);
    }
  };

  return (
    <>
      <ChatButton onClick={toggleChat}>Chat ✨</ChatButton>
      <ChatbotWrapper open={open}>
        <ChatHeader>
          <span>Chatbot</span>
          <CloseButton onClick={closeChat}>✖</CloseButton>
        </ChatHeader>
        <ChatBody>
          {messages.map((msg, index) => (
            <MessageContainer key={index} sender={msg.sender}>
              <MessageBubble
                sender={msg.sender}
                dangerouslySetInnerHTML={{ __html: msg.text }}
              />{" "}
              {/* Render HTML */}
            </MessageContainer>
          ))}
        </ChatBody>
        <ChatInputWrapper>
          <ChatInput
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleSendMessage}
            placeholder="Escribe un mensaje..."
          />
          <SendButton onClick={handleSendButtonClick}>Enviar</SendButton>{" "}
          {/* Send button */}
        </ChatInputWrapper>
      </ChatbotWrapper>
    </>
  );
};

export default Chatbot;
