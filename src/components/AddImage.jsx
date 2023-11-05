import React from 'react';
// import { ImImage } from 'react-icons/im';

function AddImage({ handleUploadImage }) {
  return (
    <label className="md:flex flex-col items-center justify-center border-4 h-48 w-48">
      <input
        type="file"
        accept="image/*"
        onChange={handleUploadImage}
        className="hidden"
      />
      <span className="text-2xl">Add Images</span>
    </label>
  );
}

export default AddImage;
