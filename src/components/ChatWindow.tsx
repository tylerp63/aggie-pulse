"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // Adjust the import path as necessary

const ChatWindow: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ user: string; bot: string }[]>([]);
  const [input, setInput] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = input;
      setMessages([...messages, { user: userMessage, bot: "" }]);
      setInput("");

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: userMessage }),
        });

        if (response.ok) {
          const data = await response.json();
          setMessages((prevMessages) =>
            prevMessages.map((msg, index) =>
              index === prevMessages.length - 1
                ? { ...msg, bot: data.message }
                : msg
            )
          );
        } else {
          const errorData = await response.json();
          console.error("Error from API:", errorData.error);
        }
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  return (
    <div className="fixed bottom-4 right-4 w-80">
      <div
        className="bg-[#500000] text-white p-2 rounded-lg cursor-pointer"
        onClick={toggleChat}
      >
        {isOpen ? "Close Chat" : "Open Chat"}
      </div>
      {isOpen && (
        <div className="bg-white border border-gray-300 rounded-b shadow-lg">
          <div className="p-2 h-64 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className="mb-2">
                <div className="bg-gray-200 p-2 rounded mb-1">
                  <strong>User:</strong> {msg.user}
                </div>
                {msg.bot && (
                  <div className="bg-gray-100 p-2 rounded">
                    <strong>Bot:</strong> {msg.bot}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="p-2 border-t border-gray-300">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Type a message..."
            />
            <Button
              onClick={handleSend}
              className="mt-2 w-full p-2 rounded"
              variant="secondary"
            >
              Send
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWindow;
