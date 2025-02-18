import styled from "styled-components";
import { SECONDARY_COLOR } from "../../utils/const";

export const ChatbotWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 400px; // Increased width
  background: #1e1e1e;
  color: white;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.2);
  display: ${(props) => (props.open ? "block" : "none")};
  font-size: 16px;
  overflow: hidden; // Prevents content from overflowing

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 0;
    bottom: 0;
    right: 0;
  }
`;

export const ChatHeader = styled.div`
  background: #333;
  padding: 10px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
`;

export const ChatBody = styled.div`
  padding: 10px;
  height: 400px;
  overflow-y: auto;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

export const MessageContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: ${(props) =>
    props.sender === "user" ? "flex-end" : "flex-start"};
`;

export const MessageBubble = styled.div`
  background-color: ${(props) =>
    props.sender === "user" ? "#007bff" : "#444"}; // Different colors
  color: white;
  padding: 10px 15px;
  border-radius: 10px;
  max-width: 80%; // Prevents bubbles from taking up full width
  word-wrap: break-word; // Wraps long words
`;

export const ChatInputWrapper = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid #333; // Separator line
`;

export const ChatInput = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  outline: none;
  background: #2c2c2c;
  color: white;
  font-size: 16px;
  border-bottom-left-radius: 10px;
`;

export const ChatButton = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 1rem;
  font-size: 2rem;
  cursor: pointer;

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
  }
`;

export const SendButton = styled.button`
  background: ${SECONDARY_COLOR};
  color: #000000;
  border: none;
  padding: 10px 15px; // Adjusted padding
  border-bottom-right-radius: 10px;
  cursor: pointer;
`;
