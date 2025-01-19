"use client";

export default function GraduatesPage() {
  const graduates = [
    {
      name: "Sejan Hassan Siam",
      school: "Kuliyadi Government Primary School",
      image: "/images/siam.webp", // Update the path to your actual image
    },
    {
      name: "Maria Akter",
      school: "Hoolashubari Government Primary School",
      image: "/images/maria.webp", // Update the path to your actual image
    },
    {
      name: "Rafiq Islam",
      school: "Shimul Toli Government Primary School",
      image: "/images/sharif.webp", // Update the path to your actual image
    },
    // Add more graduates as needed
  ];

  return (
    <div className="relative">
      {/* Background Section with GIF */}
      <div
        className="h-64 bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url("/images/graduates-bg.gif")', // Path to your GIF
        }}
      >
        <h1 className="text-4xl font-bold bg-black bg-opacity-50 p-4 rounded-lg">
          Meet Our Graduates
        </h1>
      </div>

      {/* Graduates Section */}
      <div className="p-8">
        <h2 className="text-2xl font-semibold text-green-600 text-center mb-6">
          Inspiring Stories of Success
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {graduates.map((graduate, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={graduate.image}
                alt={graduate.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-green-600">{graduate.name}</h3>
                <p className="text-sm text-green-600">{graduate.school}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
