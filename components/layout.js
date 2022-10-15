import Nav from "./nav";
import styles from "../styles/Home.module.css";
const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="container">{children}</div>
    </>
  );
};

export default Layout;
