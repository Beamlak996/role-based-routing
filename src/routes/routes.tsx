import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { LoginPage } from "../features/auth/pages/login-page";
import { PrivateRoute } from "./private-route";
import PageNotFound from "./page-not-found";

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
    path: "/app",
    element: <PrivateRoute element={<Outlet />} />,
    children: [
      // {
      //   path: "dashboard",
      //   element: <Dashboard />,
      // },
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
