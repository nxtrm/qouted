import { createBrowserRouter } from "react-router-dom";
import Layout from "./Pages/Layout";
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/Errors/ErrorPage";
import PageNotFound from "./Pages/Errors/PageNotFound";
import LibraryPage from "./Pages/LibraryPage";

const router = createBrowserRouter([
  {
    path: "/",
    //   errorElement: <ErrorPage />,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "*", element: <PageNotFound /> },
      {
        path: "/library",
        element: <></>,
      },
    ],
  },
]);

export default router;
