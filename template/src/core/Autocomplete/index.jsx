import React from "react";

const Autocomplete = ({ visible, children }) => {
  return (
    <div
      className={`origin-top-right z-[999] absolute p-2 right-0 mt-10 w-96 h-auto overflow-y-auto flex-col rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${
        visible ? "flex" : "hidden"
      }`}
    >
      {children}
    </div>
  );
};
export default Autocomplete;
