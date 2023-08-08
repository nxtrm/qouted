import HomePage from "./Pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LibraryPage from "./Pages/LibraryPage";

const router = createBrowserRouter([
  {
    path: "/",
    //   errorElement: <ErrorPage />,
    element: <HomePage />,
  },
  {
    path: "/library",
    element: <LibraryPage />,
  },
]);

export default router;
