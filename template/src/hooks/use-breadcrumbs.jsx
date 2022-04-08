import { useEffect, useState } from "react";
import mainRoutes from "../routes";
import { useLocation } from "react-router-dom";

/**
 * * useBreadcrumb hook which builds a list of routes that represents the history of the navigation for the current user.
 * @param builder: callback function that fetch the main list of routes searching for the route by it's path
 * @returns IRoutes[]: List of routes that makes the history of the navigation of the user
 */

const useBreadcrumb = () => {
  const { pathname } = useLocation();
  const [elements, setElements] = useState([]);
  const [routeStack, setRouteStack] = useState([]);
  const handleRoutes = (builder) => {
    if (routeStack.length > 4) setRouteStack([...routeStack.splice(0, 1)]);
    if (routeStack.includes(pathname)) {
      const idx = routeStack.indexOf(pathname);
      // console.log("idx :>> ", idx);
      const route = routeStack.splice(idx, 1);
      // console.log("route :>> ", route);
      setRouteStack([...route]);
    }
    setRouteStack([...routeStack, pathname]);
    return builder();
  };
  const buildBreadcrumb = () => {
    return routeStack.map((r) => {
      const [rr] = mainRoutes.filter((route) => route.path === r);
      return rr;
    });
  };
  useEffect(() => {
    setElements(handleRoutes(buildBreadcrumb));
  }, [pathname]);
  return elements;
};

export default useBreadcrumb;
