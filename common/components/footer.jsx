import React from "react";
import Button from "./button";

const Footer = () => {
  return (
    <footer className="text-sm bg-gray-50 sticky bottom-0 mt-4">
      <div className="lg:max-w-6xl sm:justify-between max-w-[544px] mx-auto py-6 md:py-8 px-8 md:px-2 flex gap-4 items-center justify-end">
        <div className="hidden sm:flex flex-col lg:flex-row gap-4 items-center">
          <div className="flex gap-2 align-top max-w-6xl mx-auto">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM4.33179 8.02741C4.70542 6.95361 5.37558 6.01864 6.24421 5.32056C6.51209 5.72966 6.97449 5.99991 7.50001 5.99991C8.32844 5.99991 9.00001 6.67148 9.00001 7.49991V7.99991C9.00001 9.10448 9.89545 9.99991 11 9.99991C12.1046 9.99991 13 9.10448 13 7.99991C13 7.05979 13.6487 6.27118 14.5228 6.05719C15.4428 7.11161 16 8.49069 16 9.99992C16 10.3407 15.9716 10.6748 15.917 11.0001H15C13.8954 11.0001 13 11.8955 13 13.0001V15.1973C12.1175 15.7078 11.0928 15.9999 9.99992 15.9999V14C9.99992 12.8954 9.10448 12 7.99992 12C6.89535 12 5.99992 11.1046 5.99992 10C5.99992 9.00849 5.27841 8.1855 4.33179 8.02741Z"
                fill="#9FA6B2"
              />
            </svg>

            <div className="flex flex-col">
              <span className="font-medium text-gray-900">Free Shipping</span>
              <span className="hidden lg:block text-gray-500">
                Get 2-day free shipping anywhere in North America.
              </span>
            </div>
          </div>

          <div className="flex gap-2 align-top max-w-6xl mx-auto">
            <svg
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.166107 3.99891C3.17437 3.95809 5.91528 2.81033 8 0.944458C10.0847 2.81033 12.8256 3.95809 15.8339 3.99891C15.9431 4.64968 16 5.31821 16 6.00003C16 11.2249 12.6608 15.6698 8 17.3172C3.33923 15.6698 0 11.2249 0 6.00003C0 5.31821 0.0568637 4.64968 0.166107 3.99891ZM11.7071 7.70711C12.0976 7.31658 12.0976 6.68342 11.7071 6.29289C11.3166 5.90237 10.6834 5.90237 10.2929 6.29289L7 9.58579L5.70711 8.29289C5.31658 7.90237 4.68342 7.90237 4.29289 8.29289C3.90237 8.68342 3.90237 9.31658 4.29289 9.70711L6.29289 11.7071C6.68342 12.0976 7.31658 12.0976 7.70711 11.7071L11.7071 7.70711Z"
                fill="#9FA6B2"
              />
            </svg>

            <div className="flex flex-col">
              <span className="font-medium text-gray-900">Free Shipping</span>
              <span className="hidden lg:block text-gray-500">
                Get 2-day free shipping anywhere in North America.
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 align-top lg:mx-auto">
          <div className="flex flex-col text-end">
            <span className="font-bold text-gray-900 text-3xl">$2,717</span>
            <span className="hidden md:block text-gray-500">
              Need financing?{" "}
              <a href="#" className="underline">
                Learn more
              </a>
            </span>
          </div>

          <Button>Buy now</Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
