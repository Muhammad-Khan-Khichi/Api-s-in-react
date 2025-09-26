import './App.css'
import SearchBar from './Components/SearchBar'
import SearchImages from './api';
import ImageList from './Components/ImageList';
import { useState } from 'react';
import Footer from './Components/Footer';

function App() {
  const [images, setImages] = useState([])

  const handleSubmit = async (term) => {
    const result = await SearchImages(term)
    setImages(result)
    
  }
  return (
<div className="min-h-screen flex flex-col bg-gray-50">


  <header className="bg-white shadow-md sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
      <h1 className="text-xl sm:text-2xl font-bold text-indigo-600 tracking-tight text-center sm:text-left">
        Unsplash Clone
      </h1>
      <span className="text-gray-500 text-xs sm:text-sm italic text-center sm:text-right">
        Developed by <a     href="https://www.linkedin.com/in/muhammad-khan-53a192357/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-indigo-500 transition"
      >Muhammad Khan</a>
      </span>
    </div>
  </header>


  <section className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
    <SearchBar onSubmit={handleSubmit} />
  </section>

  <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-16">
    <ImageList images={images} />
  </main>

  
  <Footer />
</div>



  )
}

export default App