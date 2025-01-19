"use client";

import { useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling the menu

  const topNavigationLinks = [
    { label: "About", href: "/about" },
    { label: "How it works", href: "/how-it-works" },
    { label: "Scholarships", href: "/scholarships" },
    { label: "Collaborate", href: "/collaborate" },
    { label: "Log in", href: "/login" },
  ];

  const sidebarLinks = [
    { label: "Home", href: "/" },
    { label: "How it works", href: "/how-it-works" },
    { label: "About", href: "/about" },
    { label: "Collaborate", href: "/collaborate" },
    { label: "Scholarship Policy", href: "/scholarship-policy" },
    { label: "Get in touch", href: "/contact" },
    { label: "Get the app", href: "/get-the-app" },
    { label: "Log in", href: "/login" },
  ];

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body
        className="bg-blue-100 relative"
        onClick={() => isMenuOpen && setIsMenuOpen(false)} // Close sidebar on page click
      >
        {/* Top Navigation Bar */}
        <header className="bg-black text-white fixed w-full z-50 p-4 flex justify-between items-center">
          {/* Hamburger Menu */}
          <button
            className="text-2xl font-bold hover:opacity-80"
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering page click
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            ☰
          </button>

          {/* Site Logo and Name */}
          <div className="flex items-center ml-4">
            <img
              //src="/logo.png" // Replace with your logo path
              //alt="AlterYouth Logo"
              //className="h-8 w-8 mr-2"
            />
            <a href="/" className="text-xl font-bold hover:underline">
              AlterYouth
            </a>
          </div>

          {/* Top Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            {topNavigationLinks.map(({ label, href }, index) => (
              <a key={index} href={href} className="hover:underline">
                {label}
              </a>
            ))}
          </nav>
        </header>

        {/* Sidebar Menu */}
        {isMenuOpen && (
          <aside
            className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white p-6 shadow-lg z-50"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside sidebar
          >
            <button
              className="text-2xl font-bold hover:opacity-80 mb-4"
              onClick={() => setIsMenuOpen(false)}
            >
              ×
            </button>
            <nav className="flex flex-col space-y-4">
              {sidebarLinks.map(({ label, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="hover:underline"
                  onClick={() => setIsMenuOpen(false)} // Close menu on link click
                >
                  {label}
                </a>
              ))}
            </nav>
          </aside>
        )}

        {/* Main Content */}
        <main className="pt-16 md:pt-20 p-8">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 p-4 text-white text-center">
          © 2025 AlterYouth. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
