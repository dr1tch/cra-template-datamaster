import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useOutsideClick from "../../../hooks/use-outside-click";
import { makeMenuTree } from "../../../lib/sidebar-routes-tree";
import routes from "../../../routes/sidebar";
import SidebarMenuItem from "./sidebar-menu-item";
import isSidebarPopupMenuOpen from "../../../contexts/sidebar-popup-menu";
import SidebarPopupMenu from "./sidebar-popup-menu";
import { Tooltip } from "antd";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRoutes = makeMenuTree(routes, null);
  const popupMenuRef = useRef(null);
  const { pathname } = useLocation();
  useOutsideClick(popupMenuRef, () => {
    setIsOpen && setIsOpen(false);
  });
  return (
    <isSidebarPopupMenuOpen.Provider value={{ isOpen, setIsOpen }}>
      <aside
        data-testid="sidebar-container"
        className="w-16 py-4 text-black-light text-left  border-r flex flex-col  
          -left-0 bottom-0 fixed top-0 z-40 h-screen bg-gray-50 transition-all lg:left-0"
        aria-label="Sidebar"
      >
        <div className=" py-0 px-3  h-full flex flex-col items-center rounded dark:bg-gray-800">
          {/* Logo */}
          <Link to="/login" className="flex mb-12">
            <h1>Logo</h1>
          </Link>
          {/* Sidebar Menu List */}
          <ul className="space-y-4">
            {sidebarRoutes.map((route, idx) => {
              if (route.children.length === 0)
                return <SidebarMenuItem key={idx.toString()} route={route} />;
              else
                return (
                  <div
                    key={idx.toString()}
                    className="px-2 py-2 relative"
                    ref={popupMenuRef}
                  >
                    <Tooltip placement="right" title={route.name}>
                      <button
                        type="button"
                        data-for={route.name}
                        data-tip={route.name}
                        className={`  text-gray-500  hover:bg-blue-700  hover:text-white hover:shadow-inner  w-9 h-9 rounded-md flex justify-center items-center 
                       ${
                         pathname.includes(route.path) &&
                         "bg-blue-700 text-white"
                       } `}
                        onClick={() => {
                          setIsOpen(!isOpen);
                        }}
                      >
                        {<route.icon className="w-5 h-5 " />}
                      </button>
                    </Tooltip>
                    <SidebarPopupMenu routes={route.children} pere={route} />
                  </div>
                );
            })}
          </ul>
        </div>
      </aside>
    </isSidebarPopupMenuOpen.Provider>
  );
};
export default Sidebar;
