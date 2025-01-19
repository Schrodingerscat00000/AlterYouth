"use client";

import React, { useState } from "react";

export default function GetInTouch() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted", { email, message });
  };

  return (
    <section className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-12 px-6">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-6">Get in Touch</h2>

      {/* Description */}
      <p className="text-lg text-center mb-8">
        Hey there! Feel free to reach out. We look forward to hearing from you!
      </p>

      {/* Contact Form */}
      <div className="max-w-lg mx-auto bg-white text-black p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
            />
          </div>

          {/* Message Input */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-semibold mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Type your message here..."
              rows="4"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="mb-4 text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-600 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Or Message via Messenger */}
        <div className="text-center mt-6">
          <p className="text-lg mb-4">Or</p>
          <a
            href="https://m.me/yourusername" // Replace with your Messenger link
            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Message us on Messenger
          </a>
        </div>
      </div>
    </section>
  );
}
