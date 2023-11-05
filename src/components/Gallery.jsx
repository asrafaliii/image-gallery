import React, { useState } from 'react';
import { imageList } from '../constants';
import Header from './Header';
import ImageGrid from './ImageGrid';

function Gallery() {
  const [images, setImages] = useState(imageList());

  const [selectedImages, setSelectedImages] = useState([]);
  const [isDeleteButtonVisible, setIsDeleteButtonVisible] = useState(false);

  // Function to handle image selection
  const handleImageSelect = image => {
    if (selectedImages.includes(image.id)) {
      setSelectedImages(selectedImages.filter(id => id !== image.id));
    } else {
      setSelectedImages([...selectedImages, image.id]);
    }
  };

  // Function to handle image reordering (you can implement this logic)
  const handleReorder = (dragIndex, hoverIndex) => {
    // Implement logic for reordering images
  };

  // Function to handle image deletion
  const handleDelete = () => {
    const updatedImages = images.filter(
      image => !selectedImages.includes(image.id)
    );
    setImages(updatedImages);
    setSelectedImages([]);
    setIsDeleteButtonVisible(false);
  };

  return (
    <div>
      <Header selectedImages={selectedImages} handleDelete={handleDelete} />
      <ImageGrid
        images={images}
        selectedImages={selectedImages}
        handleImageSelect={handleImageSelect}
        handleReorder={handleReorder}
        setIsDeleteButtonVisible={setIsDeleteButtonVisible}
        setImages={setImages}
      />
    </div>
  );
}

export default Gallery;
