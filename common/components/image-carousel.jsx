import Image from "next/image";
import { useState } from "react";

const images = [
  "/img/kemper-angle.jpg",
  "/img/kemper-front.jpg",
  "/img/kemper-rear.jpg",
];

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-2">
      <Image
        alt="radio"
        src={images[activeIndex]}
        height={340}
        width={510}
        className="border rounded-md w-full"
      />

      <div className="flex gap-1 justify-between">
        {images.map((image, index) => (
          <button
            key={image}
            onClick={() => setActiveIndex(index)}
            className={`border rounded-md shadow-sm focus-visible:outline-gray-300 outline-[3px] outline-offset-2 overflow-hidden ${
              index === activeIndex
                ? "border-2 border-gray-700"
                : "hover:border-gray-400"
            }`}
          >
            <Image alt="radio" src={image} height={96} width={144} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
