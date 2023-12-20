import React from "react";
import SubHeading from "./sub-heading";
import Separator from "./separator";

const specList = [
  {
    name: "Amp Models",
    value: "200",
  },
  {
    name: "Effects Loop",
    value: "Yes",
  },
  {
    name: "Inputs",
    value: "2 x 1/4”",
  },
  {
    name: "Outputs",
    value: "1 x 1/4”, 2 x XLR, 2 x 1/4”",
  },
  {
    name: "MIDI I/O",
    value: "In/Out/Thru",
  },
  {
    name: "Height",
    value: "8.54”",
  },
  {
    name: "Width",
    value: "14.88”",
  },
  {
    name: "Depth",
    value: "6.81”",
  },
  {
    name: "Width",
    value: "11.73 lbs",
  },
];

const Specs = () => {
  return (
    <div>
      <SubHeading>Specification</SubHeading>
      <Separator className={"my-2"} />

      <ul className="text-sm">
        {specList.map((spec) => (
          <li
            key={spec.name}
            className="py-4 border-gray-200 border-b flex justify-between"
          >
            <span className="font-medium">{spec.name}</span>
            <span>{spec.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Specs;
