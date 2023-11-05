import React from 'react';
import { ImImage } from 'react-icons/im';

function AddImage({ handleUploadImage }) {
  return (
    <label className="md:flex flex-col items-center justify-center border-4 h-48 cursor-pointer">
      <input
        type="file"
        accept="image/*"
        onChange={handleUploadImage}
        className="hidden"
      />
      <div className="md:flex flex-col items-center">
        <ImImage className="text-4xl" />
        <span className="text-xl mt-2">Add Images</span>
      </div>
    </label>
  );
}

export default AddImage;
