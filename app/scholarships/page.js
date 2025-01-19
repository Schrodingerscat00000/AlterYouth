"use client";

export default function ScholarshipsPage() {
  const scholarships = [
    {
      donor: "@habib",
      flag: "/images/bangladesh-flag.png", // Update with the actual path
      scholarships: 1,
      studentPhoto: "/images/maria.webp", // Update with the actual path
      studentName: "Maria Akter",
      studentClass: "Class 2",
      schoolName: "Hoolashubari Government Primary School",
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-blue-500">Scholarships</h1>
      <div className="space-y-6">
        {scholarships.map((scholarship, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-4 text-green-500"
          >
            <img
              src={scholarship.flag}
              alt="Country flag"
              className="w-12 h-12 object-cover rounded-full"
            />
            <div>
              <p className="text-sm text-gray-500">{scholarship.donor}</p>
              <p className="text-gray-700">
                {scholarship.scholarships} Scholarship
              </p>
            </div>
            <img
              src={scholarship.studentPhoto}
              alt={`${scholarship.studentName} profile`}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div>
              <p className="text-lg font-semibold">
                {scholarship.studentName}, {scholarship.studentClass}
              </p>
              <p className="text-sm text-gray-500">{scholarship.schoolName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
