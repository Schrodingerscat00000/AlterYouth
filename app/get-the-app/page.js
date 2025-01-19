import React from "react";

export default function GetTheApp() {
  return (
    <section className="bg-gradient-to-r from-teal-500 to-blue-500 text-white py-12 px-6">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-6">Get the App</h2>

      {/* Description */}
      <p className="text-lg text-center mb-8">
        Download the AlterYouth app today and start making a difference in a child's education. Join us in building a better future for Bangladesh's youth!
      </p>

      {/* Button to Google Play Store */}
      <div className="text-center">
        <a
          href="https://play.google.com/store/apps/details?id=com.alteryouth.userapp"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-8 py-4 rounded-lg shadow-lg text-lg font-semibold hover:bg-green-600 transition duration-300"
        >
          Get it on Google Play
        </a>
      </div>
    </section>
  );
}
