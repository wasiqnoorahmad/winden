import { ReactComponent as ArrowUpRight } from "../icons/arrow-up-right.svg";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: false,
      text: "Chart.js Line Chart - Multi Axis",
    },
  },
  scales: {
    y: {
      type: "linear" as const,
      display: true,
      position: "left" as const,
    },
    y1: {
      type: "linear" as const,
      display: true,
      position: "right" as const,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      yAxisID: "y",
    },
    {
      label: "",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      yAxisID: "y1",
    },
  ],
};

const Card = ({
  title,
  percent,
  isExpanded,
  toggleCardExpansion,
}: {
  title: string;
  percent: string;
  index: number;
  isExpanded: boolean;
  toggleCardExpansion: () => void;
}) => {
  return (
    <div
      className={`flex basis-1/2 justify-between items-center transition-all duration-200 ${
        isExpanded ? "w-112" : "w-82"
      } p-4 bg-white border border-gray-200 shadow group`}
      onClick={toggleCardExpansion}
      style={{ height: "10rem", minWidth: "20.5rem" }}
    >
      <div className="flex flex-col flex-grow overflow-hidden relative">
        <svg
          className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
        </svg>

        <div className="flex flex-col">
          <div className="flex space-x-2 items-center text-sm">
            <span>{title}</span>

            <div className="p-px rounded-xl bg-green-400">
              <ArrowUpRight className="h-3 w-3 text-black" />
            </div>

            <span className="text-sm">{percent || `72%`}</span>
          </div>

          <h1 className="m-0 mt-5 group-hover:hidden text-3xl">$200.99</h1>

          <div className="hidden group-hover:block h-14"></div>

          <button
            className={`absolute top-16 border p-1 mt-4 transform duration-200 translate-y-16 group-hover:translate-y-0 transition-all`}
          >
            View Account Details
          </button>
        </div>
      </div>

      <div>{isExpanded && <Line options={options} data={data} />}</div>
    </div>
  );
};
export default Card;
