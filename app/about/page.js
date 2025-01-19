"use client";
import React from "react";

export default function About() {
  return (
    <section className="bg-gradient-to-r from-blue-400 to-green-400 text-white py-12 px-6">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-6">Moving towards a 100% literate Bangladesh through an app</h2>

      {/* Description */}
      <p className="text-lg mb-10">
        In Bangladesh, while 98% of children enroll in school, 2 million children drop out to work before achieving literacy in order to support their families financially. 
        On the flipside, Bangladesh has a diaspora population of 10 million in advanced economies who wish to make an impact on their homeland. 
        AlterYouth, imagine Uber for scholarships, is a C2C scholarship app enabling users from around the world to start scholarships directly for financially struggling students in 
        Government Primary Schools of Bangladesh, through digital banking. AlterYouth does not accept donations, the app simply transfers scholarships from users to student&apos;s bank 
        accounts, with the primary aim of preventing children from choosing work over school.
      </p>

      {/* Sponsor Image with Link */}
      <div className="mb-10 text-center">
        <p className="text-xl font-semibold mb-4">Our Sponsors</p>
        <a
          href="https://blog.google/around-the-globe/google-asia/small-ventures-big-impact-celebrating-inspiring-entrepreneurs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://www.gstatic.com/webp/gallery/1.jpg"
            alt="Google"
            className="mx-auto w-40 h-40 object-cover rounded-full"
          />
        </a>
      </div>

      {/* Video Section */}
      <div className="text-center mb-10">
        <p className="text-xl font-semibold mb-4">Watch Google Business Group&apos;s documentary on AlterYouth</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/your-video-id"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
