import StaffHome from "../home/StaffHome";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Accounts from "../accounts/LeaderManageAccounts";
import StaffApproveProducts from "../handle_orders/StaffApproveProducts";
import StaffCreateOrder from "../handle_orders/StaffCreateOrder";
import StaffNavbar from "../../components/navbar/StaffNavBar";
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
          element: <StaffHome />,
        },
        {
          path: "/users",
          element: <Accounts />,
        },
        {
          path: "/order/approve",
          element: <StaffApproveProducts />,
        },
        {
          path: "/order/create",
          element: <StaffCreateOrder />,
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
