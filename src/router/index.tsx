import { createBrowserRouter } from "react-router-dom";
import AdminPanel from "../pages/adminPanel/adminPanel";
import ErrorPage from "../pages/error/error";
import NavBar from "components/navbar/navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    errorElement: <ErrorPage />,
    children: [{
      index: true,
      path: "/admin-panel",
      element: <AdminPanel />,
    }]
  },

]);

export default router