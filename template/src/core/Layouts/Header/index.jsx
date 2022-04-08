import React from "react";
import Breadcrumb from "../../Breadcrumbs";

const Header = () => {
  return (
    <div
      className="top-0 left-0 right-0 fixed flex bg-gray-50 h-14 border-b border-gray-200 z-30 transition-all
    pl-20 w-full  px-4 py-4 justify-between"
    >
      <Breadcrumb />
    </div>
  );
};
export default Header;
