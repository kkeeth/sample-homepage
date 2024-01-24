import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav>
        <NavLink to={"/"}>HOME</NavLink> | <NavLink to={"/blogs"}>BLOG</NavLink>{" "}
        | <NavLink to={"/contact"}>CONTACT</NavLink>
      </nav>
    </>
  );
};

export default Navigation;
