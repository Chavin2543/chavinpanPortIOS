import React from "react";
import cv from "../assets/cv.png";

const Page = ({ handlePageButton, isPageOn }) => {
  return (
    <div className="flex flex-col h-550 w-350 object-contain tablet:w-521 laptop:w-655 laptop:h-691 bg-terminal-body rounded-xl">
      <div>
        <div className="w-full h-8 bg-terminal-header rounded-t-xl">
          <button
            className="w-3 h-3 rounded-full tablet:bg-terminal-button mobile:bg-gray-200  active:opacity-50 transition ease-in-out mx-2 mt-2"
            onClick={handlePageButton}
          ></button>
        </div>
        <img className="h-510 w-full rounded-b-xl" src={cv} />
      </div>
    </div>
  );
};

export default Page;
