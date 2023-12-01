import Home from "../home/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Accounts from "../accounts/Accounts";
import ApproveProducts from "../handle_orders/ApproveProducts";
import CreateOrder from "../handle_orders/CreateOrder";
import StaffNavbar from "../../components/navbar/StaffNavbar";
import Footer from "../../components/footer/Footer";
import StaffMenu from "../../components/menu/StaffMenu";
import Login from "../login/Login";
import "../../styles/global.scss";
import User from "../user/User";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";


const queryClient = new QueryClient();

function Staff() {
  const Layout = () => {
    return (
      <div className="main">
        <StaffNavbar />
        <div className="container">
          <div className="menuContainer">
            <StaffMenu />
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
          path: "/order/approve",
          element: <ApproveProducts />,
        },
        {
          path: "/order/create",
          element: <CreateOrder />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
        // {
        //   path: "/products/:id",
        //   element: <Product />,
        // },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Staff;
