import React, { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const App = () => {
  const images = ["./1.jpg", "./2.jpg", "./3.jpg", "./4.jpg", "./5.jpg"];
  const [dataimage, setdataImage] = useState(images);
  const [currentSlide, setCurrentSlide] = useState(0);
  const handlePrev = () => {
    setCurrentSlide(
      currentSlide === 0 ? dataimage.length - 1 : currentSlide - 1
    );
  };
  const handleNext = () => {
    setCurrentSlide(
      currentSlide === dataimage.length - 1 ? 0 : currentSlide + 1
    );
  };
  return (
    <div>
      <div className="flex items-center gap-2 justify-center h-[80vh] select-none">
        <GrFormPrevious
          className="bg-black text-white h-10 w-10 rounded-xl cursor-pointer"
          onClick={handlePrev}
        />
        {dataimage.map((item, index) => (
          <img
            src={item}
            className={
              currentSlide === index
                ? "h-[500px] w-[700px]"
                : "hidden h-20 w-20"
            }
          />
        ))}
        <MdNavigateNext
          className="bg-black text-white h-10 w-10 rounded-xl cursor-pointer"
          onClick={handleNext}
        />
      </div>
      <div className="flex gap-2 items-center justify-center ">
        {dataimage.map((item, index) => (
          <p
            className={`${
              currentSlide === index ? "bg-gray-500" : ""
            } bg-black h-7 mt-2  w-7 rounded-xl`}
            onClick={() => {
              setCurrentSlide(index);
            }}
          ></p>
        ))}
      </div>
    </div>
  );
};

export default App;
