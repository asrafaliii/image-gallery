import React, { useState } from 'react';

function Header({ selectedImages, handleDelete }) {
  return (
    <div className="border-b-2 mb-8 flex justify-between items-center">
      <h1 className="my-8 ms-8 font-semibold text-3xl flex justify-center">
        <span className='me-3'>{selectedImages.length > 0
          ? <input
            type="checkbox"
            defaultChecked={true}
            className=" sm:w-5 sm:h-5 "
          // checked={isSelected}
          // onChange={handleCheckboxChange}
          />
          : ''}</span>
        {selectedImages.length > 0
          ? `${selectedImages.length} Files Selected`
          : 'Gallery'}
      </h1>
      {selectedImages.length > 0 && (
        <button
          className=" text-red-500 text-2xl me-8 hover:underline"
          onClick={handleDelete}
        >
          Delete File
          {selectedImages.length > 1 ? `s` : ''}
        </button>
      )}
    </div>
  );
}

export default Header;
