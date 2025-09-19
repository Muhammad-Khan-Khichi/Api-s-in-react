import React from 'react'
import ImageShow from './ImageShow'

function ImageList({images}) {
    const renderImages = images.map((image) => {
        return <ImageShow key={image.id} image={image} />
    })
  return (
    <div>
      ImageList: {renderImages}
    </div>
  )
}

export default ImageList
