// CarType.js
import React from 'react'

const typeData = [
  { id: 1, alt: "Image 1", url: "image1.png" },
  { id: 2, alt: "Image 2", url: "image2.png" },
  // Add more data as needed
];

export default function CarType() {
  return (
    <div className="image-container">
      {typeData.map((image) => (
        <div key={image.id} className="image-item">
          <img src={image.url} alt={image.alt} />
          <p>{image.alt}</p>
        </div>
      ))}
    </div>
  );
};
