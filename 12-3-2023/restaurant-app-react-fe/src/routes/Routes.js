import { Outlet, useRoutes } from "react-router-dom";
import Layout from "../components/common/layout/Layout";
import Account from "../components/pages/account/Account";
import NonRequireAuth from "../components/pages/auth/NonRequireAuth";
import RequireAuth from "../components/pages/auth/RequireAuth";
import SignIn from "../components/pages/auth/signin/SignIn";
import SignUp from "../components/pages/auth/signup/SignUp";
import Cart from "../components/pages/cart/Cart";
import Checkout from "../components/pages/checkout/Checkout";
import Home from "../components/pages/home/Home";

const Routes = () => {
  const routes = [
    {
      path: "/",
      element: <Layout children={<Outlet />} />,
      children: [{ index: true, element: <Home /> }],
    },
    {
      path: "/signin",
      element: <Layout children={<Outlet />} />,
      children: [
        {
          index: true,
          element: (
            <NonRequireAuth>
              <SignIn />
            </NonRequireAuth>
          ),
        },
      ],
    },
    {
      path: "/signup",
      element: <Layout children={<Outlet />} />,
      children: [
        {
          index: true,
          element: (
            <NonRequireAuth>
              <SignUp />
            </NonRequireAuth>
          ),
        },
      ],
    },
    {
      path: "/cart",
      element: <Layout children={<Outlet />} />,
      children: [{ index: true, element: <Cart /> }],
    },
    {
      path: "/checkout",
      element: <Layout children={<Outlet />} />,
      children: [
        {
          index: true,
          element: (
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          ),
        },
      ],
    },
    {
      path: "/account",
      element: <Layout children={<Outlet />} />,
      children: [
        {
          index: true,
          element: (
            <RequireAuth>
              <Account />
            </RequireAuth>
          ),
        },
      ],
    },
  ];
  return useRoutes(routes);
};

export default Routes;
