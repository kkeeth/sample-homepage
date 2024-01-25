import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <>
      <nav className="header-nav-items">
        <ul>
          <li>
            <NavLink to={"/"}>HOME</NavLink>
          </li>
          <li>
            <NavLink to={"/blogs"}>BLOG</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>CONTACT</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
