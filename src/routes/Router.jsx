import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import AllApps from "../pages/AllApps";

import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch("/apps.json"),
        element: <Home />,
      },
      {
        path: "/apps",
        // loader: () => fetch("/apps.json"),
        element: <AllApps />,
      },
    ],
  },
]);
