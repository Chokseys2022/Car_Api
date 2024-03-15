import React from 'react'

const makeData = [
  { id: 1, alt: "Image 5", url: "image1.png" },
  { id: 2, alt: "Image 7", url: "image2.png" },
  // Add more data as needed
];

export default function CarMake() {
  return (
    <div className="image-container">
      {makeData.map((image) => (
        <div key={image.id} className="image-item">
          <img src={image.url} alt={image.alt} />
          <p>{image.alt}</p>
        </div>
      ))}
    </div>
  );
};
