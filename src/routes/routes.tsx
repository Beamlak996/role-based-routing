import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { LoginPage } from "../features/auth/pages/login-page";
import { PrivateRoute } from "./private-route";
import PageNotFound from "./page-not-found";
import { HomePage } from "../features/home/pages/home-page";
import DefaultPanelLayout from "../components/layout/default-panel-layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <DefaultPanelLayout  />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      // {
      //   path: "profile",
      //   element: <Profile />,
      // },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
