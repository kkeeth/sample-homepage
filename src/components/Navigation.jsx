import { NavLink } from "react-router-dom";
import routes from "../routes";

const Navigation = ({ setMobileMenuOpen }) => {
  return (
    <>
      <div className="mt-6 flow-root">
        <div className="-my-6 divide-y divide-gray-500/10">
          <div className="space-y-2 py-6">
            {routes.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
