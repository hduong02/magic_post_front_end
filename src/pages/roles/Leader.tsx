import Home from "../home/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Accounts from "../accounts/Accounts";
import Products from "../received_package/Products";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Menu from "../../components/menu/Menu";
import Login from "../login/Login";
import "../../styles//global.scss";
import User from "../user/User";
import Product from "../product/Product";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";


const queryClient = new QueryClient();

function Leader() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Accounts />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Leader;
