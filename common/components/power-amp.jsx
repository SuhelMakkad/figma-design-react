import { useState } from "react";
import SubHeading from "./sub-heading";

const powerApmOptions = [
  {
    title: "None",
    description: "Use in the studio or with your own power amp.",
  },
  {
    title: "Powered",
    description: "Built-in 600W solid state power amp.",
    additionalPrice: "449",
  },
];

const PowerApm = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-2">
      <SubHeading>Power Amp</SubHeading>

      <div className="text-sm flex flex-col gap-2">
        {powerApmOptions.map((factor, index) => (
          <button
            key={factor.title}
            onClick={() => setActiveIndex(index)}
            className={`p-4 shadow-sm outline-[3px] flex justify-between hover:shadow-none space-y-2 focus-visible:outline-gray-300 outline-offset-2 border rounded-md text-start ${
              index === activeIndex
                ? "border-gray-700 border-2"
                : "border-gray-300 hover:border-gray-400"
            }`}
          >
            <div>
              <span className="font-medium">{factor.title}</span>
              <p>{factor.description}</p>
            </div>
            {!!factor.additionalPrice && (
              <span className="text-gray-900">+ ${factor.additionalPrice}</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PowerApm;
