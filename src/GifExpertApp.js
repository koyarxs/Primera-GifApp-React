
import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Piece']);

  return (
    <div>
      <h2 className="animate__animated animate__bounceIn">Buscador de Gif - 2021</h2>

      <AddCategory setCategories={setCategories} />
      <hr/>

      <ol>
        { 
          categories.map((category, index) => 
            <GifGrid 
              key={`category-${index}`} 
              category={category} 
            />
          ) 
        }
      </ol>
    </div>
  )
}

export default GifExpertApp;