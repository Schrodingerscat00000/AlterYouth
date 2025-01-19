import React from "react";

export default function ScholarshipPolicy() {
  return (
    <section className="bg-gradient-to-r from-teal-400 to-indigo-500 text-white py-12 px-6">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-6">Literacy Scholarship Policy</h2>

      {/* Description */}
      <p className="text-lg mb-8">
        Hi there! Welcome to AlterYouth, a scholarship app enabling users worldwide to start scholarships directly for students in government primary schools of Bangladesh. 
        The app facilitates automated scholarship transfers through mobile banking with student's academic requirement logic incorporated into the software.
      </p>

      {/* First Policy Block */}
      <div className="bg-white text-black p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-2xl font-bold mb-4">First thing to keep in mind!</h3>
        <p className="text-lg mb-4">
          Eligible scholarship candidates are those children who do not have a father to support them financially. 
          By default, they have a lack of parental guidance and are often the students who underperform in class. Scholarships open a new window of opportunity for them to continue their education 
          and app users are humbly requested to keep this in mind during the tenure of their scholarship.
        </p>
      </div>

      {/* Student Privacy Policy Block */}
      <div className="bg-white text-black p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4">Student Privacy Policy</h3>
        <p className="text-lg mb-4">
          The AlterYouth app facilitates numerous scholarships started by individuals from all around the world. Scholarship recipients indeed lack financial support, however, they deserve their right to privacy and dignity. 
          Keeping the above as a top priority, as well as security and well-being of students, the app does not allow communication with scholarship recipients. 
          All contact information of scholarship recipients are withheld and the app does not facilitate the exchange of such information. AlterYouth app users are humbly requested to respect the privacy of students.
        </p>
      </div>
    </section>
  );
}
