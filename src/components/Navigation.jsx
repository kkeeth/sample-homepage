import { NavLink } from "react-router-dom";
import "./Navigation.css";
import routes from "../routes";

const Navigation = () => {
  return (
    <>
      <div className="mt-6 flow-root">
        <div className="-my-6 divide-y divide-gray-500/10">
          <div className="space-y-2 py-6">
            {routes.map((item) => (
              <>
                <NavLink
                  to={item.path}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </NavLink>
              </>
            ))}
          </div>
        </div>
      </div>

      {/* <nav className="header-nav-items">
        <ul>
          {routes.map((item) => (
            <li key={item.name}>
              <NavLink to={item.path}>{item.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav> */}
    </>
  );
};

export default Navigation;
