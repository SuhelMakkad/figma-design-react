import { useState } from "react";
import SubHeading from "./sub-heading";

const footControllerOptions = [
  {
    title: "None",
  },
  {
    title: "Profiler Remote Foot Controller",
    additionalPrice: "449",
  },
];

const FootController = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-2">
      <SubHeading>Power Amp</SubHeading>

      <div className="text-sm flex flex-col gap-2">
        {footControllerOptions.map((factor, index) => (
          <button
            key={factor.title}
            onClick={() => setActiveIndex(index)}
            className={`p-4 shadow-sm outline-[3px] items-center flex justify-between hover:shadow-none space-y-2 focus-visible:outline-gray-300 outline-offset-2 border rounded-md text-start ${
              index === activeIndex
                ? "border-gray-700 border-2"
                : "border-gray-300 hover:border-gray-400"
            }`}
          >
            <span className="font-medium">{factor.title}</span>
            {!!factor.additionalPrice && (
              <span className="text-gray-900">+ ${factor.additionalPrice}</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FootController;
