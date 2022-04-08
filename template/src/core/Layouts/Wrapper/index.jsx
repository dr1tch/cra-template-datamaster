import React, { useContext } from "react";
import Header from "../Header";
import usePageName from "../../../hooks/use-page-name";
import RouteContext from "../../../contexts/route";

const Wrapper = ({ children }) => {
  const route = useContext(RouteContext);
  usePageName(route);
  return (
    <div className="">
      <Header />
      <div className="relative pt-16 pl-16">{children}</div>
    </div>
  );
};
export default Wrapper;
