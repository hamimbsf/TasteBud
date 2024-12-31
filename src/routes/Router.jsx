import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import Menu from "../page/Menu";
import OurShop from "../page/OurShop";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Page not exist</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/our-shop/:category",
        element: <OurShop />,
      },
    ],
  },
]);
export default router;
