import React from 'react'

// Assume sunData is imported or defined somewhere
const yearData = [
  { id: 1, alt: "Image 10", url: "image1.png" },
  { id: 2, alt: "Image 20", url: "image2.png" },
 
];

export default function CarYear() {
  return (
    <div className="image-container">
      {yearData.map((image) => (
        <div key={image.id} className="image-item">
          <img src={image.url} alt={image.alt} /> {/* Fix src attribute */}
          <p>{image.alt}</p>
        </div>
      ))}
    </div>
  );
};
