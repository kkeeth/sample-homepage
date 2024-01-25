import { NavLink } from "react-router-dom";
import "./Navigation.css";
import routes from "../routes";

const Navigation = () => {
  return (
    <>
      <nav className="header-nav-items">
        <ul>
          {routes.map((item) => (
            <li key={item.name}>
              <NavLink to={item.path}>{item.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
