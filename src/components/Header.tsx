import { ReactComponent as Bell } from "../icons/bell.svg";
import { ReactComponent as Circle } from "../icons/circle.svg";
import { ReactComponent as Search } from "../icons/search.svg";
import { ReactComponent as Settings } from "../icons/settings.svg";

import AccountChanger from "./AccountChanger";

const Header = () => {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-x-4">
            <span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </span>

            <Circle className="h-2 w-2 text-gray-400" />

            <div>
              <AccountChanger />
            </div>
          </div>

          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-indigo-600 px-3 py-2 text-base font-medium text-white"
              aria-current="page"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-400"
            >
              Payments
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-400"
            >
              Transactions
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-400"
            >
              Cards
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-400"
            >
              Invoice
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-400"
            >
              Insights
            </a>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-3">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 mx-0"
            >
              <Search />
            </button>

            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 mx-0"
            >
              <Bell />
            </button>

            <span>|</span>

            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 mx-0"
            >
              <Settings />
            </button>

            <div className="">
              <div>
                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://gravatar.com/avatar/7a4e27dc684de0755048540a90ed5bda?s=400&d=robohash&r=x"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
