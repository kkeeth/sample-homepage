import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import routes from "../routes";
import Navigation from "./Navigation";
import xSVG from "../assets/twitter-brands.svg";
import githubSVG from "../assets/mark-github.svg";
import instagramSVG from "../assets/instagram-brands.svg";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow sticky top-0 z-10">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5 flex items-center">
              <img
                className="h-12 w-auto"
                src="https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/production/podcast_uploaded400/1763370/1763370-1611655391437-470d23c0b23e5.jpg"
                alt="ロゴ画像"
              />
              <span className="ml-2 text-4xl text-slate-700 font-light h-10 pt-1">
                Keeth
              </span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-8 w-8" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            {routes.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </NavLink>
            ))}
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-xs sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <NavLink to={"/"} className="-m-1.5 p-1.5 flex">
                <img
                  className="h-8 w-auto"
                  src="https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/production/podcast_uploaded400/1763370/1763370-1611655391437-470d23c0b23e5.jpg"
                  alt=""
                />
                <span className="ml-2 text-4xl text-slate-700 font-light h-6 pt-1">
                  Keeth
                </span>
              </NavLink>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <Navigation mobileMenuOpen setMobileMenuOpen />
            <hr />
            <div className="flex justify-center mt-8 gap-4">
              <a
                href="https://x.com/kuwahara_jsri"
                target="_blank"
                rel="noreferrer"
              >
                <img src={xSVG} alt="𝕏のロゴ" className="w-8 h-8" />
              </a>
              <a
                href="https://github.com/kkeeth"
                target="_blank"
                rel="noreferrer"
              >
                <img src={githubSVG} alt="GitHubのロゴ" className="w-8 h-8" />
              </a>
              <a
                href="https://instagram.com/kuwahara_jsri"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={instagramSVG}
                  alt="Instagramのロゴ"
                  className="w-8 h-8"
                />
              </a>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
};

export default Header;
