"use client"; // Add this directive at the very top

import { useState } from "react";

export default function Donate() {
  const [amount, setAmount] = useState(0);

  const handleInputChange = (event) => {
    setAmount(event.target.value);
  };

  const handleDonate = () => {
    alert(`Thank you for donating $${amount}!`);
    setAmount(0); // Reset the amount after donation
  };

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Donate</h1>
      <input
        type="number"
        value={amount}
        onChange={handleInputChange}
        className="border rounded-md p-2 text-center mb-4"
        placeholder="Enter amount"
      />
      <button
        onClick={handleDonate}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Donate
      </button>
    </div>
  );
}
