import React from 'react';

function Header({ selectedImages, handleDelete }) {
  return (
    <nav className="border-b-2 mb-8">
      <h1 className="my-8 ms-8 font-semibold text-3xl">
        {selectedImages.length > 0
          ? `${selectedImages.length} Files Selected`
          : 'Gallery'}
      </h1>
      {selectedImages.length > 0 && (
        <button
          className="md:absolute top-8 right-8 text-red-500 text-2xl ms-8"
          onClick={handleDelete}
        >
          Delete File
          {selectedImages.length > 1 ? `s` : ''}
        </button>
      )}
    </nav>
  );
}

export default Header;
