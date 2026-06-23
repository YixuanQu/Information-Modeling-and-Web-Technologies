import { createBrowserRouter } from "react-router";
import CoverPage from "./pages/CoverPage";
import MainInterface from "./pages/MainInterface";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CoverPage />,
  },
  {
    path: "/tour",
    element: <MainInterface />,
  },
  {
    path: "/tour/:locationId",
    element: <MainInterface />,
  },
]);
