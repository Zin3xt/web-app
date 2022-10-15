import Link from "next/link";
import navStyles from "../styles/nav.module.css";

const nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li id="about">
          <Link href="/about">About us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default nav;
