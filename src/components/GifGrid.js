import React from 'react';
import useFetchGifs from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <div>
      <h3 className="animate__animated animate__lightSpeedInLeft">{category}</h3>

      { loading && <p className="animate__animated animate__lightSpeedInLeft">Cargando Resultados</p> }

      <div className="carta-grid">
        { 
          images.map(img => 
            <GifGridItem 
              key={img.id} 
              url={img.url} 
              title={img.title} 
            /> 
          ) 
        }
      </div> 
    </div>
  )
}

export default GifGrid;