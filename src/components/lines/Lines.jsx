import React from "react";
import "./line.css";

const Lines = () => {

  return (
    <div data-aos="fade-right ">
      <span className="space-y-48">
        <hr id="line" />
        <hr id="line" />
        <hr id="line" />
        <span id="line" className="relative"><hr className="bg-white rounded-full h-2 w-2 absolute -top-1"/> </span>
      </span>

      <span className="space-x-64 ">
        <hr id="lines" />
        <hr id="lines" />
        <hr id="lines" />
        <hr id="lines" />
        
      </span> 
    </div>
  );
};

export default Lines;
