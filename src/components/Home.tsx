import { ReactComponent as Plus } from "../icons/plus.svg";
import { ReactComponent as UpArrow } from "../icons/up_arrow.svg";
import { ReactComponent as ArrowUpRight } from "../icons/arrow-up-right.svg";

import { ReactComponent as Eye } from "../icons/eye.svg";

const Home = () => {
  return (
    <div className="bg-gray-800 py-8 px-32 pt-12" style={{ height: "250px" }}>
      <div className="flex w-full justify-around items-end">
        <div className="flex space-x-4">
          <div className="flex flex-col">
            <span className="text-gray-200">Total Balance</span>
            <span className="text-4xl text-gray-200">$36,427</span>
          </div>

          <div className="flex items-end space-x-1">
            <div className="p-px rounded-xl bg-green-400">
              <ArrowUpRight className="h-6 w-6 text-black" />
            </div>
            <span className="text-gray-200 px-2">$328.32 Today, Jun 9</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="rounded inline-flex items-center">
            <Eye className="w-5 h-5 mr-2 text-gray-400" />
            <span className="text-gray-400">View Analytics</span>
          </button>

          <span className="text-gray-600">|</span>

          <button className="py-2 px-3 inline-flex items-center bg-indigo-600">
            <ArrowUpRight className="w-4 h-4 mr-2 text-white rotate-45" />
            <span className="text-white">Send Money</span>
          </button>

          <button className="py-2 px-3 inline-flex items-center bg-gray-700">
            <Plus className="w-4 h-4 mr-2 text-white" />
            <span className="text-white">Add Money</span>
          </button>

          <span className="h-8 w-8 pb-2 text-white bg-gray-600 text-sm flex justify-center items-center rounded-full cursor-pointer">
            ...
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
