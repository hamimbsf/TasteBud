import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import Menu from "../page/Menu";
import OurShop from "../page/OurShop";
import { Login } from "../page/authentication/Login";
import Register from "../page/authentication/Register";
import PrivateRoute from "../private/PrivateRoute";
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
        element: (
          <PrivateRoute>
            <Menu />
          </PrivateRoute>
        ),
      },
      {
        path: "/our-shop/:category",
        element: <OurShop />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
export default router;
