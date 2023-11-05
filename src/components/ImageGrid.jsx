import React from 'react';
import AddImage from './AddImage';
import ImageCard from './ImageCard';

function ImageGrid({
  images,
  selectedImages,
  handleImageSelect,
  handleReorder,
  setIsDeleteButtonVisible,
  setImages,
}) {
  const handleUploadImage = event => {
    const file = event.target.files[0];
    if (file) {
      const newImage = {
        id: images.length + 1,
        url: URL.createObjectURL(file),
        isFeatured: true,
      };
      setImages([...images, newImage]);
    }
  };

  return (
    <div className="md:grid grid-cols-5 gap-4 md:mx-8">
      {images.map((image, index) => (
        <div
          key={image.id}
          className={`${
            index === 0 ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1'
          }`}
        >
          <ImageCard
            image={image}
            isSelected={selectedImages.includes(image.id)}
            onImageSelect={handleImageSelect}
            onReorder={handleReorder}
            setIsDeleteButtonVisible={setIsDeleteButtonVisible}
          />
        </div>
      ))}

      <AddImage handleUploadImage={handleUploadImage} />
    </div>
  );
}

export default ImageGrid;
