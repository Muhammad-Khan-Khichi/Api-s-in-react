import './App.css'
import SearchBar from './Components/SearchBar'
import SearchImages from './api';
import ImageList from './Components/ImageList';
import { useState } from 'react';

function App() {
  const [images, setImages] = useState([])

  const handleSubmit = async (term) => {
    const result = await SearchImages(term)
    setImages(result)
    
  }
  return (
    <>
    <SearchBar onSubmit={handleSubmit}/>
    <ImageList images={images}/>
    </>
  )
}

export default App
