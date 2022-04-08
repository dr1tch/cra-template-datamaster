import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import isSidebarPopupMenuOpen from "../../../contexts/sidebar-popup-menu";
import HomePathContext from "../../../contexts/home-path";
import { Tooltip } from "antd";

const SidebarMenuItem = ({
  // children,
  route,
  pere,
}) => {
  const { setHomePathname } = useContext(HomePathContext);
  const { setIsOpen } = useContext(isSidebarPopupMenuOpen);
  return (
    <>
      {!pere ? (
        <Tooltip title={route.name} placement="right">
          <li className="px-2 py-2">
            <NavLink
              to={route.path}
              className={({ isActive }) =>
                `  text-gray-500  hover:bg-blue-700  hover:text-white hover:shadow-inner rounded-md flex items-center ${
                  isActive && "bg-blue-700 text-white"
                }
           w-9 h-9 justify-center
          `
              }
              onClick={() => {
                setIsOpen && setIsOpen(false);
                setHomePathname && setHomePathname(route.path);
              }}
            >
              <div className="flex justify-center items-start gap-2">
                {<route.icon className={`w-5 h-5`} />}
              </div>
            </NavLink>
          </li>
        </Tooltip>
      ) : (
        <li className="px-2 py-2">
          <NavLink
            to={pere.path + route.path}
            className={({ isActive }) =>
              `  text-gray-500  hover:bg-blue-700  hover:text-white hover:shadow-inner rounded-md flex items-center ${
                isActive && "bg-blue-700 text-white"
              }
          w-full h-9 justify-start px-3
          `
            }
            onClick={() => {
              setIsOpen && setIsOpen(false);
              setHomePathname && setHomePathname(pere.path + route.path);
            }}
          >
            <div className="flex justify-center items-start gap-2">
              {<route.icon className={`w-5 h-5`} />}
              <span className="font-semibold">{route.name}</span>
            </div>
          </NavLink>
        </li>
      )}
    </>
  );
};
export default SidebarMenuItem;
