import ProtectedRoutes from "./lib/protected-routes";
import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Login = lazy(() => import("./pages/Login"));
const Dashboard = lazy(() => import("./pages/"));
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
