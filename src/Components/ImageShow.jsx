import React from 'react'

function ImageShow({image}) {
  return (
<div className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition">
  <img
    src={image.urls.small}
    alt={image.alt_description}
    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
  />

  {/* Overlay with caption */}
  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 group-hover:opacity-100 transition">
    <p className="text-white text-sm font-medium truncate">
      {image.alt_description || "Untitled"}
    </p>
  </div>
</div>

  )
}

export default ImageShow