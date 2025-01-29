import React from 'react';

export default function DownloadSection() {
  return (
    <section>
      {/* <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-50"></div> */}
      <div className='py-12 bg-gray-100'>
      <div className="relative max-w-6xl mx-auto text-white">
        <h2 className="text-3xl text-gray-700 font-serif font-bold mb-4">Download Now and<br />get your first test free</h2>
        <div className="flex space-x-4 mt-8">
          <button className="bg-emerald-700 px-6 py-2 rounded hover:bg-emerald-800">
            App Store
          </button>
          <button className="bg-emerald-700 px-6 py-2 rounded hover:bg-emerald-800">
            Google Play
          </button>
        </div>
      </div>
      </div>
    </section>
  );
}
