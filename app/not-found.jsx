import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
<div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404 🫤</h1>
        <p className="text-2xl">Oops! Page not found.</p>
        <p className="text-lg mt-4">The page you are looking for might be under construction or does not exist.</p>
        <Link href="/" className="text-blue-500 hover:underline mt-4 block">Go back to home</Link>
      </div>
    </div>
  );
}
