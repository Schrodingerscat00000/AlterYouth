
"use client";
import Image from "next/image";

import React, { useState } from "react";


export default function Home() {

  const [selectedSchool, setSelectedSchool] = useState(null);

  const schools = [
    {
      name: "Birabo Government Primary School",
      location: "Bholabo, Bangladesh",
      image: "images/school5.jpeg",
      description:
        <p>"9 Scholarship Applicants.<br/>Established in 1992 in Bholabo, Bangladesh. It now hosts 18 Students taught by 2 Teachers."</p>,
      teachers: [
        {
          name: "Pori Bhanu Akhter",
          comment:
            "A good education can change anyone. A good teacher can change everything.",
        },
      ],
    },
    {
      name: "Another School",
      location: "Location, Bangladesh",
      image: "/path/to/another-school.jpg",
      description:
       <p> "10 Scholarship Applicants.<br/>Established in 1988. It now hosts 25 Students taught by 3 Teachers."</p>,
      teachers: [
        {
          name: "Rahim Uddin",
          comment:
            "The future of the nation lies in the education of its children.",
        },
      ],
    },
  ];

  const handleOpenModal = (schoolName) => {
    const school = schools.find((s) => s.name === schoolName);
    setSelectedSchool(school);
  };
  
  const handleCloseModal = () => {
    setSelectedSchool(null);
  };
  

  return (
    <div>
{/* Section 1: Login */}
<section
  className="relative bg-cover bg-center text-white"
  style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }} // Replace with your image path
>
  <div className="flex flex-wrap items-center justify-between w-full h-full p-8 md:px-20 md:py-24 bg-black bg-opacity-50">
    {/* Left: Description */}
    <div className="w-full md:w-1/2 text-left">
      <h1 className="text-4xl font-bold mb-4 leading-tight">
        Start your <br />
        Scholarship
      </h1>
      <p className="mb-4">
        Directly for students in Government Primary Schools throughout
        Bangladesh
      </p>
      
    </div>

    {/* Right: Login Box */}
    <div className="w-full md:w-1/3 bg-white text-black p-8 rounded shadow-lg">
      <h2 className="text-xl font-bold text-center mb-4  text-green">Join the #alteryouthrevolution</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your name"
          className="block w-full p-3 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Your email"
          className="block w-full p-3 border border-gray-300 rounded"
        />
        <div className="flex items-center gap-2">
          <select className="p-3 border border-gray-300 rounded w-1/3">
            <option value="+880">Bangladesh +880</option>
            <option value="+91">India +91</option>
            <option value="+1">USA +1</option>
            <option value="+44">UK +44</option>
            <option value="+81">Japan +81</option>
            {/* Add more country codes as needed */}
          </select>
          <input
            type="text"
            placeholder="Your number"
            className="flex-1 p-3 border border-gray-300 rounded"
          />
        </div>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Number of Scholarships"
            className="w-2/5 p-3 border border-gray-300 rounded"
          />
          <span className="text-gray-700 font-semibold">BDT 1,650/month</span>
        </div>
        <button className="bg-blue-500 text-white font-bold py-2 px-6 w-full rounded hover:bg-blue-600">
          Start Now
        </button>
      </form>
    </div>
  </div>
</section>




      {/* Section 2: The Uber for Scholarships */}
<section className="bg-gray-100 py-16 px-8 md:px-20">
  <div className="text-center mb-12">
    {/* Section Title */}
    <h2 className="text-4xl font-bold text-blue-600 mb-4">
      The Uber for Scholarships
    </h2>
    {/* Description */}
    <p className="text-gray-700 text-lg">
      A platform connecting the world with financially struggling students in 
      Government Primary Schools of Bangladesh
    </p>
  </div>

  {/* Download Links */}
  <div className="flex justify-center items-center space-x-4 mb-12">
    <a
      href="/https://apps.apple.com/us/app/alteryouth-start-scholarships/id1569106859" // Replace with your iOS app link
      className="bg-black text-white py-3 px-6 rounded shadow-lg flex items-center hover:bg-gray-800"
    >
      <img
        src="/path-to-ios-logo.png" // Replace with your iOS logo image path
        alt="iOS Logo"
        className="h-6 mr-3"
      />
      Download on iOS
    </a>
    <a
      href="/https://play.google.com/store/apps/details?id=com.alteryouth.userapp" // Replace with your Google Play app link
      className="bg-green-500 text-white py-3 px-6 rounded shadow-lg flex items-center hover:bg-green-600"
    >
      <img
        src="/path-to-google-play-logo.png" // Replace with your Google Play logo image path
        alt="Google Play Logo"
        className="h-6 mr-3"
      />
      Get it on Google Play
    </a>
  </div>

  {/* Image and Description Grid */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Image 1 */}
    <div className="text-center">
      <img
        src="images/app_scholarship.jpg" // Replace with your image 1 path
        alt="Transfer directly"
        className="w-full h-48 object-cover rounded shadow-lg"
      />
      <h3 className="text-xl font-bold text-blue-600 mt-4">Transfer directly</h3>
      <p className="text-gray-700 mt-2">
        Your scholarship is transferred directly to your student's family on their mobile bank account.
      </p>
    </div>

    {/* Image 2 */}
    <div className="text-center">
      <img
        src="images/app_school.png" // Replace with your image 2 path
        alt="Get school reports"
        className="w-full h-48 object-cover rounded shadow-lg"
      />
      <h3 className="text-xl font-bold text-blue-600 mt-4">Get school reports</h3>
      <p className="text-gray-700 mt-2">
        View attendance data and report cards from your student's school, until completion of Class 5.
      </p>
    </div>

    {/* Image 3 */}
    <div className="text-center">
      <img
        src="images/app_graduation.png" // Replace with your image 3 path
        alt="Ensure a literate citizen"
        className="w-full h-48 object-cover rounded shadow-lg"
      />
      <h3 className="text-xl font-bold text-blue-600 mt-4">Ensure a literate citizen</h3>
      <p className="text-gray-700 mt-2">
        Your scholarship continues until completion of class 5, when your student achieves literacy.
      </p>
    </div>
  </div>
</section>


{/* Third Section */}
<section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12 px-6">
  <h2 className="text-4xl font-bold text-center mb-6">#alteryouthrevolution</h2>
  <h3 className="text-2xl font-bold text-center mb-4">The Scholarship Community</h3>
  <p className="text-lg text-center mb-12">
    Despite public primary schools being free of cost in Bangladesh, many students still drop out of school to work and earn in order to support their families. Your scholarship helps a child attend school and support their families at the same time.
  </p>

  {/* Giver and Recipient Info */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Giver Info - Example 1 */}
    <div className="bg-white text-black p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <span className="font-semibold">anika8</span>
        <span className="text-sm text-gray-500">Joined today</span>
      </div>
      <div className="flex items-center mt-4">
        <img src="/path/to/GB-flag.png" alt="GB flag" className="w-6 h-4 mr-2" />
        <span>1 Scholarship</span>
      </div>

      {/* Recipient Info */}
      <div className="mt-4">
        <p className="font-bold">Mohammad Siyam, Class 5</p>
        <p>Bhitorgor Anondomoyee Government Primary</p>
      </div>

      {/* Link to Invite Page */}
      <a href={`/invite/anika8`} className="text-blue-400 hover:underline mt-4 block">
        View Scholarship Details
      </a>
    </div>

    {/* Giver Info - Example 2 */}
    <div className="bg-white text-black p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <span className="font-semibold">habib</span>
        <span className="text-sm text-gray-500">Joined today</span>
      </div>
      <div className="flex items-center mt-4">
        <img src="/path/to/US-flag.png" alt="US flag" className="w-6 h-4 mr-2" />
        <span>1 Scholarship</span>
      </div>

      {/* Recipient Info */}
      <div className="mt-4">
        <p className="font-bold">Maria Akter, Class 2</p>
        <p>Hoolashubari Government Primary School</p>
      </div>

      {/* Link to Invite Page */}
      <a href={`/invite/habib`} className="text-blue-400 hover:underline mt-4 block">
        View Scholarship Details
      </a>
    </div>

    {/* Giver Info - Example 3 */}
    <div className="bg-white text-black p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <span className="font-semibold">lubna7</span>
        <span className="text-sm text-gray-500">Joined yesterday</span>
      </div>
      <div className="flex items-center mt-4">
        <img src="/path/to/US-flag.png" alt="US flag" className="w-6 h-4 mr-2" />
        <span>7 Scholarships</span>
      </div>

      {/* Recipient Info */}
      <div className="mt-4">
        <p className="font-bold">Shamim Mahmud, Class 3</p>
        <p>Kalilkapur Government Primary School</p>
        <p className="font-bold">Mahim Islam, Class 2</p>
        <p>Dakkhin Bhatiapara Government Primary School</p>
      </div>

      {/* Link to Invite Page */}
      <a href={`/invite/lubna7`} className="text-blue-400 hover:underline mt-4 block">
        View Scholarship Details
      </a>
    </div>
  </div>
</section>




      {/* Fourth Section */}
<section className="bg-gradient-to-b from-teal-500 to-blue-500 text-white py-12 px-6">
  <h2 className="text-4xl font-bold text-center mb-6">Community Impact</h2>
  <p className="text-lg text-center mb-8">
    Every scholarship begins with shipping a mobile phone to the parent of the student. Then they create their own mobile bank account
    using that phone, to start receiving their child's scholarships directly, every month.
  </p>

  {/* Image Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {/* Example Image 1 */}
    <div className="bg-white text-black p-4 rounded-lg shadow-lg">
      <img
        src="images/community_2.jpg"
        alt="Scholarship Impact 1"
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <p className="mt-4 font-semibold text-center">Parents receiving phones</p>
    </div>

    {/* Example Image 2 */}
    <div className="bg-white text-black p-4 rounded-lg shadow-lg">
      <img
        src="images/community_4.jpg"
        alt="Scholarship Impact 2"
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <p className="mt-4 font-semibold text-center">Creating a mobile bank account</p>
    </div>

    {/* Example Image 3 */}
    <div className="bg-white text-black p-4 rounded-lg shadow-lg">
      <img
        src="images/community_6.jpg"
        alt="Scholarship Impact 3"
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <p className="mt-4 font-semibold text-center">Monthly scholarships sent</p>
    </div>

    {/* Example Image 4 */}
    <div className="bg-white text-black p-4 rounded-lg shadow-lg">
      <img
        src="images/community_8.jpg"
        alt="Scholarship Impact 4"
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <p className="mt-4 font-semibold text-center">Impactful education</p>
    </div>
  </div>
</section>


      {/* Fifth Section */}
<section className="bg-gradient-to-r from-pink-500 to-orange-500 text-white py-12 px-6">
  <h2 className="text-4xl font-bold text-center mb-6">Students from Government Primary Schools Nationwide</h2>
  <p className="text-lg text-center mb-8">
    Explore the schools that are part of the scholarship community across Bangladesh.
  </p>

  {/* School Image Row */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {/* Example School Card */}
    <div
      className="bg-white text-black p-4 rounded-lg shadow-lg cursor-pointer hover:scale-105 transform transition"
      onClick={() => handleOpenModal("Birabo Government Primary School")}
    >
      <img
        src="images/school5.jpeg"
        alt="Birabo Government Primary School"
        className="w-full h-48 object-cover rounded-lg"
      />
      <p className="mt-4 font-bold text-center">Birabo Government Primary School</p>
      <p className="text-sm text-center">Bholabo, Bangladesh</p>
    </div>

    {/* Add similar cards for other schools here */}
    {/* Example School Card */}
    <div
      className="bg-white text-black p-4 rounded-lg shadow-lg cursor-pointer hover:scale-105 transform transition"
      onClick={() => handleOpenModal("Another School")}
    >
      <img
        src="images/school2.jpeg"
        alt="Primary School"
        className="w-full h-48 object-cover rounded-lg"
      />
      <p className="mt-4 font-bold text-center">Another School</p>
      <p className="text-sm text-center">Location, Bangladesh</p>
    </div>
  </div>

  {/* Modal for School Details */}
  {selectedSchool && (
  <div
    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
    onClick={handleCloseModal}
  >
    <div
      className="bg-white text-black rounded-lg p-6 max-w-lg mx-4"
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
    >
      <h3 className="text-2xl font-bold mb-4">{selectedSchool.name}</h3>
      <p className="text-lg mb-2">{selectedSchool.location}</p>
      <p className="text-sm text-gray-600 mb-4">{selectedSchool.description}</p>
      <h4 className="text-xl font-bold mb-2">Teachers' Comments</h4>
      {selectedSchool.teachers.map((teacher, index) => (
        <div key={index} className="mb-4">
          <p className="font-semibold">{teacher.name}</p>
          <p className="italic">"{teacher.comment}"</p>
        </div>
      ))}
      <button
        className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-lg mt-4"
        onClick={handleCloseModal}
      >
        Close
      </button>
    </div>
  </div>
)}
</section>


      {/* Sixth Section */}
<section className="bg-gradient-to-r from-green-500 to-teal-500 text-white py-12 px-6">
  {/* Title */}
  <h2 className="text-4xl font-bold text-center mb-6">Scholarship Eligibility</h2>
  {/* Description */}
  <p className="text-lg text-center mb-10">
    Only students who are currently enrolled in Government Primary Schools and fall
    under any of the following criteria are eligible to apply for scholarships.
  </p>

  {/* Eligibility Criteria */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Disabled Father */}
    <div className="bg-white text-black p-6 rounded-lg shadow-lg transform hover:scale-105 transition">
      <h3 className="text-2xl font-bold mb-4 text-center text-teal-600">Disabled Father</h3>
      <p className="text-center text-gray-700">
        Student's father is physically unable to work.
      </p>
    </div>

    {/* Single Mother */}
    <div className="bg-white text-black p-6 rounded-lg shadow-lg transform hover:scale-105 transition">
      <h3 className="text-2xl font-bold mb-4 text-center text-green-600">Single Mother</h3>
      <p className="text-center text-gray-700">
        Student's father is deceased or has abandoned the family.
      </p>
    </div>

    {/* Orphan */}
    <div className="bg-white text-black p-6 rounded-lg shadow-lg transform hover:scale-105 transition">
      <h3 className="text-2xl font-bold mb-4 text-center text-indigo-600">Orphan</h3>
      <p className="text-center text-gray-700">
        Both parents are deceased or have abandoned the child.
      </p>
    </div>
  </div>
</section>


      {/* Sections 7 & 8: Call-to-Actions & Video */}
      <section className="bg-blue-50 p-8">
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
    {/* First Box: Headteacher */}
    <div className="bg-white p-4 shadow-lg rounded-lg">
      <img
        src="/images/headteacher.jpg"  // Update with your actual image path
        alt="Headteacher"
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="font-semibold text-xl text-blue-700">Are you a teacher?</h2>
        <p className="text-sm text-gray-700">Get your students listed on the platform.</p>
        <a
          href="https://play.google.com/store/apps/details?id=com.alteryouth.teacher"
          className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-full text-center"
        >
          Download the school app
        </a>
      </div>
    </div>

    {/* Second Box: Global Opportunities */}
    <div className="bg-white p-4 shadow-lg rounded-lg">
      <img
        src="/images/person.jpg"  // Update with your actual image path
        alt="Global Opportunity"
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="font-semibold text-xl text-blue-700">You can be anywhere in the world</h2>
        <p className="text-sm text-gray-700">See all scholarships available.</p>
        <a
          href="/scholarships"
          className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-full text-center"
        >
          See all scholarships
        </a>
      </div>
    </div>

    {/* Third Box: Students' Dreams */}
    <div className="bg-white p-4 shadow-lg rounded-lg">
      <img
        src="/images/applicant.jpg"  // Update with your actual image path
        alt="Graduates"
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="font-semibold text-xl text-blue-700">While students get closer to their dreams</h2>
        <p className="text-sm text-gray-700">See all graduates who received scholarships.</p>
        <a
          href="/graduates"
          className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-full text-center"
        >
          See all graduates
        </a>
      </div>
    </div>
  </div>
</section>

<section className="bg-blue-100 py-12 flex items-center">
  <div className="container mx-auto flex flex-col sm:flex-row items-center space-x-8">
    <div className="flex-1">
      <video
        src="/videos/ay_explainer.mp4"  // Update with your actual video path
        controls
        className="w-full rounded-lg shadow-lg"
      ></video>
    </div>
    <div className="flex-1 text-center sm:text-left">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700">The Scholarship App</h2>
      <p className="text-lg text-gray-700 mb-4">
        In Bangladesh, while 98% of children enroll in school, 2 million children drop out to work before achieving literacy in order to support their families financially. On the flipside, Bangladesh has a diaspora population of 10 million in advanced economies who wish to make an impact on their homeland. AlterYouth, imagine Uber for scholarships, is a C2C scholarship app enabling users from around the world to start scholarships directly for financially struggling students in Government Primary Schools of Bangladesh, through digital banking.
      </p>
    </div>
  </div>
</section>

<section className="bg-white py-12">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-semibold mb-8 text-green-700">In Association With</h2>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
      {/* First Sponsor */}
      <div className="flex flex-col items-center">
        <img
          src="/images/undp.jpg"  // Update with your actual sponsor logo path
          alt="Sponsor 1"
          className="w-32 h-32 mb-4"
        />
        <p className="text-lg font-semibold text-gray-700">"Asia Pacific
        SDG Enterprise Award"</p>
      </div>

      {/* Second Sponsor */}
      <div className="flex flex-col items-center">
        <img
          src="/images/expo.png"  // Update with your actual sponsor logo path
          alt="Sponsor 2"
          className="w-32 h-32 mb-4"
        />
        <p className="text-lg font-semibold text-gray-700"></p>
      </div>

      {/* Third Sponsor */}
      <div className="flex flex-col items-center">
        <img
          src="/images/google.webp"  // Update with your actual sponsor logo path
          alt="Sponsor 3"
          className="w-32 h-32 mb-4"
        />
        <p className="text-lg font-semibold text-gray-700">Winner of Google Business Group Stories</p>
      </div>
    </div>
  </div>
</section>
 
<section className="bg-blue-50 py-12">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-semibold mb-8 text-blue-700">Learn About AlterYouth</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Home Link */}
      <a href="/" className="text-lg text-gray-700 hover:text-blue-600">Home</a>

      {/* About Us Link */}
      <a href="/about" className="text-lg text-gray-700 hover:text-blue-600">About us</a>

      {/* How It Works Link */}
      <a href="/how-it-works" className="text-lg text-gray-700 hover:text-blue-600">How it works</a>

      {/* Scholarship Policy Link */}
      <a href="/scholarship-policy" className="text-lg text-gray-700 hover:text-blue-600">Scholarship Policy</a>

      {/* Get the App Link */}
      <a href="/get-the-app" className="text-lg text-gray-700 hover:text-blue-600">Get the app</a>

      {/* Towards a Literate Bangladesh Link */}
      <a href="/literacy" className="text-lg text-gray-700 hover:text-blue-600">Towards a literate Bangladesh</a>
    </div>
  </div>
</section>



      {/* Footer */}
      <footer className="bg-gray-800 py-8 text-white text-center">
  <div className="container mx-auto">
    <p className="text-sm mb-4">© 2025 AlterYouth Limited</p>
    <div className="flex justify-center space-x-4">
      {/* Terms of Service Link */}
      <a href="/terms-of-service" className="text-sm hover:underline">Terms of Service</a>

      {/* Privacy Policy Link */}
      <a href="/privacy-policy" className="text-sm hover:underline">Privacy Policy</a>
    </div>
  </div>
</footer>

    </div>
  );
}
