import { createBrowserRouter } from "react-router-dom";
import Layout from "./Pages/Layout";
import LibraryPage from "./Pages/LibraryPage";
import HomePage from "./Pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    //   errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/library",
        element: <LibraryPage />,
      },
    ],
  },
]);

export default router;
