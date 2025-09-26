import React from 'react'

function Footer() {
  return (
    <div>
<footer className="bg-white border-t mt-10">
  <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">

    <h2 className="text-lg font-bold text-indigo-600">Unsplash Clone</h2>


    <div className="flex gap-6 text-sm text-gray-600">
      <a
        href="https://github.com/Muhammad-Khan-Khichi/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-indigo-500 transition"
      >
        GitHub
      </a>
      <a
        href="https://unsplash.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-indigo-500 transition"
      >
        Unsplash
      </a>
    </div>


    <p className="text-xs text-gray-500">
      Built with ❤️ using React, Vite & Unsplash API
    </p>
  </div>
</footer>

     </div>
  )
}

export default Footer


