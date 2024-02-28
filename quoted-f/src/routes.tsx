import { createBrowserRouter } from "react-router-dom";
import Account from "./Pages/Account";
import ErrorPage from "./Pages/Errors/ErrorPage";
import PageNotFound from "./Pages/Errors/PageNotFound";
import HomePage from "./Pages/HomePage";
import Layout from "./Pages/Layout";

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
      {
        path: "/account",
        element: <Account/>,
      },
    ],
  },
]);

export default router;
