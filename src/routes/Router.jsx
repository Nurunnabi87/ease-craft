import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import AllApps from "../pages/AllApps";
import Home from "../pages/Home";

import AppDetails from "../pages/AppDetails";
import ErrorPage from "../pages/ErrorPage";
import MyInstallation from "../pages/MyInstallation";

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
        element: <AllApps />,
      },
      {
        path: "/app/:id",
        element: <AppDetails />,
        loader: async ({ params }) => {
          const res = await fetch("/apps.json");
          const data = await res.json();
          return data.find((app) => app.id === parseInt(params.id));
        },
      },
      {
        path: "installation",
        element: <MyInstallation />,
      },
    ],
  },
]);
