import { useContext } from "react";
import isSidebarPopupMenuOpen from "../../../contexts/sidebar-popup-menu";
import SidebarMenuItem from "./sidebar-menu-item";

const SidebarPopupMenu = ({ routes, pere }) => {
  const { isOpen } = useContext(isSidebarPopupMenuOpen);
  return (
    <div
      id="dropdownRight"
      className={`${
        isOpen ? "absolute" : "hidden"
      } top-0 left-20 z-10 min-w-fit text-sm list-none bg-white rounded-md divide-y divide-gray-100 drop-shadow-2xl dark:bg-gray-700`}
    >
      <ul className="py-3 px-0 space-y-1" aria-labelledby="dropdownRightButton">
        {routes.map((route, idx) => (
          <SidebarMenuItem key={idx.toString()} route={route} pere={pere} />
        ))}
      </ul>
    </div>
  );
};
export default SidebarPopupMenu;
