import CustomerHome from "../home/CustomerHome";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Accounts from "../accounts/LeaderManageAccounts";
import CustomerOrder from "../handle_orders/CustomerOrder";
import CustomerNavbar from "../../components/navbar/CustomerNavBar";
import Footer from "../../components/footer/Footer";
import Menu from "../../components/menu/CustomerMenu";
import Login from "../login/Login";
import "../roles/CustomerStyle.scss";
import User from "../user/User";
import CustomerTransportStatus from "../product/CustomerTransportStatus";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";


const queryClient = new QueryClient();

function Leader() {
  const Layout = () => {
    return (
      <div className="main">
        <CustomerNavbar />
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
          element: <CustomerHome />,
        },
        {
          path: "/myOrder",
          element: <CustomerOrder />,
        },
        {
          path: "/myOrder/:id",
          element: <CustomerTransportStatus />,
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
