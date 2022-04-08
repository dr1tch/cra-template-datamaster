import { Edit, Plus, Trash } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const ImageUpload = ({ onChange, path = "" }) => {
  const [imageURL, setImageURL] = useState(null);
  const hiddenFileInput = useRef(null);
  const handleClick = (event) => {
    if (hiddenFileInput) hiddenFileInput.current.click();
  };
  const setImage = () => {
    if (path.length > 0) setImageURL(path);
  };
  useEffect(() => {
    setImage();
  }, []);
  const handleClickRemove = (event) => {
    onChange(null);
    setImageURL(null);
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    let url = URL.createObjectURL(fileUploaded);
    setImageURL(url);
    onChange(fileUploaded);
  };
  return (
    <div className="flex justify-start items-center gap-2">
      <div className="relative group cursor-pointer border-[1.5px] rounded-full shadow-md mx-20">
        {imageURL ? (
          <img
            src={imageURL}
            alt={"Uploaded File"}
            className="object-cover w-36 h-36 rounded-full "
          />
        ) : (
          <svg
            className="object-cover w-36 h-36  text-gray-300 rounded-full"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        )}
        <div className="absolute bottom-0 left-0 bg-black-light z-10 w-36 h-36 justify-evenly items-center bg-opacity-50 bg-gray-700 group-hover:flex hidden rounded-full">
          <button
            onClick={handleClick}
            type="button"
            className="p-2 border-[1.5px] border-white rounded-full shadow-sm text-sm leading-4 font-medium text-gray-700 focus:outline-none focus:ring-2 "
          >
            {imageURL ? (
              <Edit className="text-white w-5 h-5" strokeWidth={1.5} />
            ) : (
              <Plus className="text-white w-5 h-5" strokeWidth={1.5} />
            )}
          </button>

          <button
            onClick={handleClickRemove}
            type="button"
            className="p-2 border-[1.5px] border-white rounded-full shadow-sm text-sm leading-4 font-medium text-gray-700 focus:outline-none focus:ring-2 "
          >
            <Trash className="text-white w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>
      </div>
      <input
        type="file"
        ref={hiddenFileInput}
        accept="image/*"
        onChange={handleChange}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default ImageUpload;
