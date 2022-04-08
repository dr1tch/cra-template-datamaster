import { Home as HomeIcon, Globe, Activity } from "lucide-react";
import { lazy } from "react";
const Home = lazy(() => import("../pages/Dashboard/Home"));
const Others = lazy(() => import("../pages/Dashboard/Others"));
const Login = lazy(() => import("../pages/Login"));

const routes = [
  {
    id: 1,
    path: "/",
    component: Home,
    name: "Home",
    icon: HomeIcon,
  },

  {
    id: 2,
    path: "/others",
    component: Others,
    name: "Others",
    icon: Globe,
  },
  {
    id: 3,
    path: "/login",
    name: "Authentification",
    component: Login,
    icon: Activity,
  },
];

export default routes;
