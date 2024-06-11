import React from "react";
import { ReactComponent as Up } from "../icons/chevron-up.svg";
import { ReactComponent as Down } from "../icons/chevron-down.svg";

const AccountChanger = () => {
  return (
    <div className="flex items-center gap-x-4 text-gray-200">
      <img
        className="h-8 w-auto"
        src="https://i.ibb.co/FDrPbS4/buff.png"
        alt="Your Company"
      />

      <span>Framer</span>

      <div className="flex flex-col">
        <button className="text-sm text-gray-300 hover:text-white">
          <Up className="h-2 w-2 text-gray-400" />
        </button>
        <button className="text-sm text-gray-300 hover:text-white">
          <Down className="h-2 w-2 text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default AccountChanger;
