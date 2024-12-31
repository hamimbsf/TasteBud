import { Outlet } from "react-router-dom";
import Navbar from "./components/static/Navbar";
import Footer from "./components/static/Footer";

const App = () => {
  return (
    <>
      {/* navbar */}
      <Navbar />
      {/* Outlet */}
      <Outlet />
      {/* footer */}
      <Footer />
    </>
  );
};

export default App;
