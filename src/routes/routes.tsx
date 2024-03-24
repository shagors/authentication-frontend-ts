import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  { path: "/register", element: <Register /> },
  // {
  //   path: "/dashboard",
  //   element: <DashboardLayout />,
  //   children: [
  //     { path: "/dashboard", element: <Dashboard /> },
  //     { path: "supplies", element: <DashboardSupplies /> },
  //     { path: "create-supply", element: <CreateSupply /> },
  //   ],
  // },
]);
