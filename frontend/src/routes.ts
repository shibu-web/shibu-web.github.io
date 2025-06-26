import { type RouteProps } from "react-router-dom";
import { Home } from "./pages/Home";
import Profile from "./pages/Profile";

export const routes: RouteProps[] = [
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/profile",
    Component: Profile,
  },
];
