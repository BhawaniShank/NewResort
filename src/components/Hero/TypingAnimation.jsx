import React, { useState, useEffect } from "react";

const TypingAnimation = () => {
  const lines = [
    "Welcome to India's first luxury heritage polo resort",
    "Experience the blend of tradition and elegance",
    "Discover a world of unparalleled luxury",
  ];

  // Define different functions for each line
  const functions = [
    () => alert("Exploring the luxury polo resort!"),
    () => alert("Exploring tradition and elegance!"),
    () => alert("Exploring unparalleled luxury!"),
  ];

  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let typingInterval;

    if (isTyping) {
      // Typing effect
      typingInterval = setInterval(() => {
        if (charIndex < lines[currentLine].length) {
          setDisplayedText((prev) => prev + lines[currentLine][charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          clearInterval(typingInterval);
          setIsTyping(false); // Stop typing and wait
        }
      }, 100); // Typing speed
    } else {
      // Wait for 5 seconds before moving to the next line
      const displayTimeout = setTimeout(() => {
        setDisplayedText(""); // Clear the text
        setCharIndex(0); // Reset character index
        setCurrentLine((prev) => (prev + 1) % lines.length); // Move to the next line
        setIsTyping(true); // Restart typing
      }, 5000);

      return () => clearTimeout(displayTimeout);
    }

    return () => clearInterval(typingInterval);
  }, [charIndex, currentLine, isTyping, lines]);

  return (
    <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-center items-center text-center gap-5 text-white px-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
        {displayedText}
      </h1>
      {!isTyping && (
        <button
          onClick={functions[currentLine]}
          className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all"
        >
          Explore
        </button>
      )}
    </div>
  );
};

export default TypingAnimation;
