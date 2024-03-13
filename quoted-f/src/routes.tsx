import { createBrowserRouter } from "react-router-dom";
import Account from "./Pages/Account";
import ErrorPage from "./Pages/Errors/ErrorPage";
import PageNotFound from "./Pages/Errors/PageNotFound";
import HomePage from "./Pages/HomePage";
import Layout from "./Pages/Layout";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import QuotePage from "./Pages/QuotePage";
import LibraryPage from "./Pages/LibraryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "*", element: <PageNotFound /> },
      {
        path: "/library",
        element: <LibraryPage/>,
      },
      {
        path: "/account",
        element: <Account/>,
      },
      {
        path:"/login",
        element: <Login/>,
      },
      {
        path:"/register",
        element: <Register/>,
      },
      // {
      //   path:"/quote/:slug",
      //   element: <QuotePage/>,
      // }
    ],
  },
]);

export default router;
