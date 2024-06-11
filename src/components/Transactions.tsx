import { ReactComponent as Spring } from "../icons/spring.svg";
import { ReactComponent as Star } from "../icons/star.svg";
import { ReactComponent as CheckCircle } from "../icons/check-circle.svg";
import { ReactComponent as PlusCircle } from "../icons/plus-circle.svg";
import { ReactComponent as MessageCircle } from "../icons/message-circle.svg";

import Tabs from "./Tabs";

const Transactions = () => {
  return (
    <div className="flex justify-center w-full py-8 my-4">
      <div className="flex w-full max-w-screen-lg space-x-16">
        <div className="w-1/2 flex flex-col">
          <div className="flex w-full items-center">
            <div className="flex space-x-2 items-center">
              <Spring className="h-6 w-6 text-black" />
              <span className="text-black">Recent Transaction</span>
              <span className="text-gray-600 text-xs">Last 5 Activity</span>
            </div>
            <span className="text-purple-600 ml-auto cursor-pointer">
              See all
            </span>
          </div>

          <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />

          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <div className="flex space-x-2 items-center">
                <img
                  className="h-10 w-10"
                  src="https://i.ibb.co/7Kw2RFV/stripe.png"
                  alt="Your Company"
                />

                <div className="flex flex-col">
                  <span className="text-black">Stripe</span>
                  <span className="text-gray-400 text-xs">
                    Wed 16 Feb, 18:11
                  </span>
                </div>
              </div>
              <span className="text-black bg-gray-100 p-1.5 text-sm">
                Business
              </span>
              <span className="text-green-600">+$1,233.00</span>
            </div>
          </div>

          <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />

          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <div className="flex space-x-2 items-center">
                <img
                  className="h-10 w-10"
                  src="https://i.ibb.co/9VQNvDL/dropbox.png"
                  alt="Your Company"
                />

                <div className="flex flex-col">
                  <span className="text-black">Dropbox</span>
                  <span className="text-gray-400 text-xs">
                    Tue 15 Feb, 12:24
                  </span>
                </div>
              </div>
              <span className="text-black bg-gray-100 p-1.5 text-sm">
                Equipment
              </span>
              <span className="text-black">-$200.00</span>
            </div>
          </div>

          <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />

          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <div className="flex space-x-2 items-center">
                <img
                  className="h-10 w-10"
                  src="https://i.ibb.co/253DyMq/zendesk-sell.jpg"
                  alt="Your Company"
                />

                <div className="flex flex-col">
                  <span className="text-black">Zendesk</span>
                  <span className="text-gray-400 text-xs">
                    Wed 16 Feb, 18:11
                  </span>
                </div>
              </div>
              <span className="text-black bg-gray-100 p-1.5 text-sm">
                Marketing
              </span>
              <span className="text-black">-$1,233.88</span>
            </div>
          </div>

          <hr className="h-px my-4 bg-gray-200 border-0" />

          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <div className="flex space-x-2 items-center">
                <img
                  className="h-10 w-10"
                  src="https://i.ibb.co/TPVfNWQ/spotify.png"
                  alt="Your Company"
                />

                <div className="flex flex-col">
                  <span className="text-black">Spotify</span>
                  <span className="text-gray-400 text-xs">
                    Wed 14 Feb, 16:40
                  </span>
                </div>
              </div>
              <span className="text-black bg-gray-100 p-1.5 text-sm">
                Entertainment
              </span>
              <span className="text-black">-$19.00</span>
            </div>
          </div>

          <hr className="h-px my-4 bg-gray-200 border-0" />
        </div>

        <div className="w-1/2 flex flex-col">
          <div className="flex w-full items-center">
            <div className="flex space-x-2 items-center">
              <Star className="h-6 w-6 text-black" />
              <span className="text-black">Cash Flow</span>
              <span className="text-gray-600 text-xs">Last 30 days</span>
            </div>
            <span className="text-purple-600 ml-auto cursor-pointer">
              See all
            </span>
          </div>

          <hr className="h-px my-4 bg-gray-200 border-0" />

          <Tabs />

          <div className="flex flex-col justify-evenly h-full">
            <div className="flex flex-col w-full space-y-2">
              <div className="flex w-full items-center">
                <div className="flex space-x-2 items-center">
                  <CheckCircle className="h-6 w-6 text-purple-400" />
                  <span className="text-black">Stripe</span>
                  <span className="text-black bg-gray-100 p-1.5 text-xs">
                    %70
                  </span>
                </div>
                <span className="text-black ml-auto">$3514.20</span>
              </div>

              <div className="w-full rounded-full h-1.5 mb-4">
                <div className="w-full bg-gray-100 rounded-3xl h-1.5 ">
                  <div
                    role="progressbar"
                    className="bg-purple-400 h-1.5 rounded-3xl"
                    style={{ width: "70%" }}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full space-y-2">
              <div className="flex w-full items-center">
                <div className="flex space-x-2 items-center">
                  <PlusCircle className="h-6 w-6 text-blue-400" />
                  <span className="text-black">Crypto Academy</span>
                  <span className="text-black bg-gray-100 p-1.5 text-xs">
                    %20
                  </span>
                </div>
                <span className="text-black ml-auto">$1017.49</span>
              </div>

              <div className="w-full rounded-full h-1.5 mb-4">
                <div className="w-full bg-gray-100 rounded-3xl h-1.5 ">
                  <div
                    role="progressbar"
                    className="bg-blue-400 h-1.5 rounded-3xl"
                    style={{ width: "20%" }}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full space-y-2">
              <div className="flex w-full items-center">
                <div className="flex space-x-2 items-center">
                  <MessageCircle className="h-6 w-6 text-pink-600" />
                  <span className="text-black">Wire Return</span>
                  <span className="text-black bg-gray-100 p-1.5 text-xs">
                    %6
                  </span>
                </div>
                <span className="text-black ml-auto">$318.00</span>
              </div>

              <div className="w-full rounded-full h-1.5 mb-4">
                <div className="w-full bg-gray-100 rounded-3xl h-1.5 ">
                  <div
                    role="progressbar"
                    className="bg-pink-600 h-1.5 rounded-3xl"
                    style={{ width: "6%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
