import { type RouteProps } from "react-router-dom";
import { Home } from "./pages/Home";
import { Second } from "./pages/Second";

export const routes: RouteProps[] = [
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/second",
    Component: Second,
  },
];
