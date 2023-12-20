import { useState } from "react";
import SubHeading from "./sub-heading";

const formFactorOptions = [
  {
    title: "Profile Head",
    description:
      "Compact amplifier head, perfect for a speaker cabinet or desk.",
  },
  {
    title: "Profiler Rack",
    description: "3U rackmount version of the classic profiling amplifier.",
  },
];

const FormFactor = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-2">
      <SubHeading>Form Factor</SubHeading>

      <div className="text-sm grid grid-cols-2 gap-2">
        {formFactorOptions.map((factor, index) => (
          <button
            key={factor.title}
            className={`p-4 shadow-sm outline-[3px] hover:shadow-none space-y-2 focus-visible:outline-gray-300 outline-offset-2 border rounded-md block text-start ${
              index === activeIndex
                ? "border-gray-700 border-2"
                : "border-gray-300 hover:border-gray-400"
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <span className="font-medium">{factor.title}</span>
            <p>{factor.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FormFactor;

// eleanor@airflip.com , nisha@airflip.com - 12 30 ESt
