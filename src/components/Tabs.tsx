import { useState } from "react";
import { ReactComponent as FillDown } from "../icons/fill_arrow_down.svg";
import { ReactComponent as FillUp } from "../icons/fill_arrow_up.svg";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex w-full">
      <div className="flex w-full space-x-4">
        <button
          className={`px-4 py-2 w-1/2 text-lg text-left ${
            activeTab === 0 ? "text-black" : "text-gray-500"
          }`}
          onClick={() => setActiveTab(0)}
        >
          <div className="rounded inline-flex items-center px-4 space-x-2">
            <FillDown className="w-4 h-4 mr-2 text-black transform hover:rotate-45 transition-all" />

            <div className="flex flex-col">
              <span
                className={`text-xs ${
                  activeTab === 0 ? "text-black" : "text-gray-500"
                }`}
              >
                Money In
              </span>

              <span className="text-2xl">$5,083</span>
            </div>
          </div>
          <hr
            className={`${
              activeTab === 1 ? "bg-gray-200" : "bg-black"
            } h-px my-2 w-full border-0`}
          />
        </button>

        <button
          className={`px-4 py-2 w-1/2 text-lg text-left ${
            activeTab === 1 ? "text-black" : "text-gray-500"
          }`}
          onClick={() => setActiveTab(1)}
        >
          <div className="rounded inline-flex items-center px-4 space-x-2">
            <FillUp className="w-4 h-4 mr-2 text-black transform hover:rotate-45 transition-all" />
            <div className="flex flex-col">
              <span
                className={`text-xs ${
                  activeTab === 1 ? "text-black" : "text-gray-500"
                }`}
              >
                Money Out
              </span>

              <span className="text-2xl">$483.40</span>
            </div>
          </div>
          <hr
            className={`${
              activeTab === 0 ? "bg-gray-200" : "bg-black"
            } h-px my-2 w-full border-0`}
          />
        </button>
      </div>
    </div>
  );
};

export default Tabs;
