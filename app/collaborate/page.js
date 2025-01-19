"use client";

import React, { useState } from "react";

export default function Collaborate() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    portfolio: null,
    thoughts: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, portfolio: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Handle form submission logic (e.g., send to server)
  };

  return (
    <section className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-12 px-6">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-6">Collaborate with AlterYouth</h2>

      {/* Description */}
      <p className="text-lg mb-10">
        The alteryouth app is a scholarship tool that enables people like us to directly support students stay in school and away from child labor. Statistically, 
        there are more of us worldwide than the number of vulnerable students in our schools. And hypothetically, when every single student in Bangladesh who 
        could have dropped out of school is supported with a scholarship from one of us, Bangladesh would have its first 100% literate generation; changing the 
        entire trajectory of the nation.
      </p>
      <p className="text-lg mb-10">
        However, for this grand vision to succeed, the existence of the alteryouth app alone is not enough but awareness of its existence needs to reach every 
        Bengali worldwide. We believe it is critical for the world to know about alteryouth and understand how it works in order to achieve the grand vision of 
        a fully literate Bangladesh.
      </p>
      <p className="text-lg mb-10">
        If you are a person/organization who has the ability to help achieve the grand vision, we look forward to collaborating with you and working together 
        to build a better Bangladesh.
      </p>
      <p className="text-lg mb-10 font-bold">
        What do you think we can achieve together and why do you think so?
      </p>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="bg-white text-black rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
        {/* Thoughts Input */}
        <div className="mb-6">
          <label htmlFor="thoughts" className="block font-semibold mb-2">
            Share your thoughts
          </label>
          <textarea
            id="thoughts"
            name="thoughts"
            rows="4"
            value={formData.thoughts}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            placeholder="Your thoughts here..."
          />
        </div>

        {/* Name Input */}
        <div className="mb-6">
          <label htmlFor="name" className="block font-semibold mb-2">
            Your name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            placeholder="Jane Doe"
          />
        </div>

        {/* Phone Input */}
        <div className="mb-6">
          <label htmlFor="phone" className="block font-semibold mb-2">
            Your phone number:
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            placeholder="+880*******"
          />
        </div>

        {/* Email Input */}
        <div className="mb-6">
          <label htmlFor="email" className="block font-semibold mb-2">
            Your email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            placeholder="you@example.com"
          />
        </div>

        {/* Portfolio Upload */}
        <div className="mb-6">
          <label htmlFor="portfolio" className="block font-semibold mb-2">
            Upload your portfolio or resume:
          </label>
          <input
            type="file"
            id="portfolio"
            name="portfolio"
            onChange={handleFileChange}
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-gradient-to-r from-green-500 to-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:scale-105 transform transition"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
