import React from 'react';
import './App.css';

const Gallery = () => {
  const images = Array.from({ length: 24 }, (_, i) => i + 1);
  return (
      <main className="gallery">
        {images.map((num) => (
          <div key={num}>
            <img src={`https://picsum.photos/400?random=${num}`} alt={`Imagem aleatória ${num}`} />
          </div>
        ))}
      </main>
    );
};
export default Gallery;