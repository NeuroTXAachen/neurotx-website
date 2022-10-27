import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div  className="dark">
      {children}
    </div>
  );
};

export default Layout;
