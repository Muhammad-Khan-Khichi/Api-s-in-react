import React from 'react'
import ImageShow from './ImageShow'
import { IoSparklesSharp } from "react-icons/io5";

function ImageList({images}) {
    const renderImages = images.map((image) => {
        return <ImageShow key={image.id} image={image} />
    })
  return (
 <div className="px-6 py-10">
  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-2"><IoSparklesSharp /> Image Results</h2>

  {/* Responsive Masonry-like Grid */}
  <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {renderImages}
  </div>
</div>

  )
}

export default ImageList