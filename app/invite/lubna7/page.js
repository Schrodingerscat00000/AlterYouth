'use client';

import { usePathname } from 'next/navigation';

export default function InvitePage() {
  const pathname = usePathname(); // Retrieve the current path
  const giver = pathname.split('/').pop(); // Extract the dynamic "giver" part

  if (!giver) {
    return <div>Loading...</div>;
  }

  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-6">Here's how your scholarship works</h2>

      {/* Video Section */}
      <div className="flex justify-center mb-6">
        <iframe
          width="560"
          height="315"
          src="/videos/ay_explainer.mp4" // Replace with your actual video link
          title="Scholarship Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Scholarship Recipients Info */}
      <div className="text-center mb-8">
        <p className="text-xl">The {giver}'s Scholarship Community</p>
        <p className="text-2xl font-bold">🤝 2 friends are sending 👧🏻 9 children to school every day</p>
      </div>

      {/* Recipient Info */}
      <div className="flex justify-center space-x-6">
        <div className="bg-white text-black p-6 rounded-lg shadow-md w-1/3">
          <img src="/path/to/recipient1.jpg" alt="Recipient 1" className="rounded-full w-32 h-32 mx-auto mb-4" />
          <p className="font-bold">Shamim Mahmud, Class 3</p>
          <p>Kalilkapur Government Primary School</p>
          <p className="text-sm text-gray-500 mt-4">
            Shamim and his older brother live in a small village...
          </p>
        </div>

        <div className="bg-white text-black p-6 rounded-lg shadow-md w-1/3">
          <img src="/path/to/recipient2.jpg" alt="Recipient 2" className="rounded-full w-32 h-32 mx-auto mb-4" />
          <p className="font-bold">Mahim Islam, Class 2</p>
          <p>Dakkhin Bhatiapara Government Primary School</p>
          <p className="text-sm text-gray-500 mt-4">Mahim lives with his family...</p>
        </div>
      </div>
    </section>
  );
}
