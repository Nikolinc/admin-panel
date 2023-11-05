import { createBrowserRouter } from "react-router-dom";
import AdminPanel from "../pages/adminPanel/adminPanel";
import ErrorPage from "../pages/error/error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminPanel />,
    errorElement: <ErrorPage />,
  },

]);

export default router