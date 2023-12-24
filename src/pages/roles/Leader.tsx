import Home from "../home/LeaderHome";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Accounts from "../accounts/LeaderManageAccounts";
import LeaderRecievedProducts from "../handle_orders/LeaderRecievedProducts";
import LeaderSentProducts from "../handle_orders/LeaderSentProducts";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Menu from "../../components/menu/LeaderMenu";
import Login from "../login/Login"; 
import "../../styles//global.scss";
import User from "../user/User";
import Product from "../product/CustomerTransportStatus";
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
          path: "/products/received",
          element: <LeaderRecievedProducts />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
        {
          path: "/products/sent",
          element: <LeaderSentProducts />,
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
