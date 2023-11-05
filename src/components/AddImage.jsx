import React from 'react';
import { ImImage } from 'react-icons/im';

function AddImage({ handleUploadImage }) {
  return (
    <label className="md:flex flex-col flex items-center justify-center h-48 cursor-pointer border-dashed border-2 rounded-xl border-gray-300">
      <input
        type="file"
        accept="image/*"
        onChange={handleUploadImage}
        className="hidden"
      />
      <div className="md:flex flex flex-col items-center">
        <ImImage className="text-4xl" />
        <span className="text-xl mt-2">Add Images</span>
      </div>
    </label>
  );
}

export default AddImage;
