import { useState } from "react";
import Card from "./Card";
import { ReactComponent as Star } from "../icons/star.svg";

const Cards = () => {
  const titles = ["Business Account", "Tax Reserve", "Business Savings"];
  const [indexOfExpandedCard, setIndexOfExpandedCard] = useState(-1);

  return (
    <div className="relative flex justify-center space-x-6">
      <div className="absolute left-60 -top-16 flex gap-8 items-center">
        <div
          className="flex absolute space-x-2 items-center -my-1.5"
          style={{ top: "-40px" }}
        >
          <Star className="h-6 w-6 text-white bg-gray-600 rounded-full p-1" />
          <div className="flex items-baseline space-x-2">
            <span className="text-white text-2xl">Overview</span>
            <span className="text-gray-400 text-xs">Last 30 days</span>
          </div>
        </div>
        {titles.map((title, index) => (
          <Card
            key={index}
            index={index}
            isExpanded={index === indexOfExpandedCard}
            toggleCardExpansion={() =>
              setIndexOfExpandedCard((cur) => (cur !== index ? index : -1))
            }
            title={title}
            percent="27%"
          />
        ))}
      </div>
    </div>
  );
};
export default Cards;
