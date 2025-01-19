import React from "react";

export default function HowItWorks() {
  return (
    <section className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-12 px-6">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-6">How the Scholarship Platform Works</h2>

      {/* Main Description */}
      <p className="text-lg text-center mb-10">
        Get matched to a scholarship applicant and transfer your scholarship to your student every month, directly through mobile banking.
        Despite public primary schools being free of cost in Bangladesh, many students still drop out of school to work and earn in order to
        support their families. Your scholarship helps a child attend school and support their families at the same time.
      </p>

      {/* Steps Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <div>
          <img
            src="images/school1.jpeg"
            alt="Step 1"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Step 1 Description */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Step 1</h3>
          <p className="text-lg">
            Only students enrolled in Government Primary Schools throughout Bangladesh are eligible to apply for scholarships.
          </p>
        </div>
      </div>
    </section>
  );
}
