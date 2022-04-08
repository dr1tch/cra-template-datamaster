import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import RouteContext from "../../../contexts/route";
import mainRoutes from "../../../routes/index";
import Wrapper from "../Wrapper";
import usePageName from "../../../hooks/use-page-name";

const Main = () => {
  const { pathname } = useLocation();
  const renderIfAuthorized = (route) => {
    if (route.path.includes(pathname))
      return (
        <RouteContext.Provider value={route}>
          <Wrapper>
            <route.component />
          </Wrapper>
        </RouteContext.Provider>
      );
  };
  return (
    <>
      <main className=" ">
        <div className=" rounded-md grid px-6 mr-10 ">
          <Routes>
            {mainRoutes.map((route, i) => {
              return route.component !== null ? (
                <Route
                  key={i.toString()}
                  path={`${route.path}`}
                  element={renderIfAuthorized(route)}
                />
              ) : null;
            })}
            <Route
              path="*"
              element={
                // If you want to style it you can style.
                // But finnish the important tasks first !
                <h1>404 NOT FOUND !!!!</h1>
              }
            />
          </Routes>
        </div>
      </main>
    </>
  );
};
export default Main;
