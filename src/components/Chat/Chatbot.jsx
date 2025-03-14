import React, { useState } from "react";

import { fetchOpenAIResponse } from "../../services/chatBot";

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
      {/* Botón de chat flotante */}
      <button
        onClick={toggleChat}
        className="fixed bottom-10 right-10 md:bottom-10 md:right-10 bg-gray-800 hover:bg-gray-700 text-white text-2xl px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-sky-500/20 flex items-center gap-2 z-50"
      >
        <span>Chat</span>
        <span className="text-yellow-300">✨</span>
      </button>

      {/* Ventana de chat */}
      <div
        className={`fixed bottom-5 right-5 w-[350px] md:w-[400px] bg-gray-900 text-white rounded-xl shadow-2xl shadow-sky-500/10 overflow-hidden z-50 transition-all duration-300 transform ${
          open
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        {/* Encabezado del chat */}
        <div className="bg-gray-800 px-4 py-3 flex justify-between items-center border-b border-gray-700">
          <span className="font-medium text-sky-400">Chatbot</span>
          <button
            onClick={closeChat}
            className="text-gray-400 hover:text-white transition-colors"
          >
            ✖
          </button>
        </div>

        {/* Cuerpo del chat con mensajes */}
        <div className="p-4 h-[400px] md:h-[400px] overflow-y-auto bg-gray-900/90">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-4 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] px-4 py-2 rounded-lg ${
                  msg.sender === "user"
                    ? "bg-sky-600 text-white rounded-tr-none"
                    : "bg-gray-800 text-gray-100 rounded-tl-none"
                }`}
                dangerouslySetInnerHTML={{ __html: msg.text }}
              />
            </div>
          ))}
        </div>

        {/* Área de entrada de texto */}
        <div className="flex border-t border-gray-700">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleSendMessage}
            placeholder="Escribe un mensaje..."
            className="flex-1 px-4 py-3 bg-gray-800 text-white placeholder-gray-500 focus:outline-none"
          />
          <button
            onClick={handleSendButtonClick}
            className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 transition-colors"
          >
            Enviar
          </button>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
