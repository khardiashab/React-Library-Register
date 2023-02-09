import React from "react";

export default function PresentBtn({ isPresent, locationTaker }) {
  isPresent = undefined;
  let addClass =
    typeof isPresent === "undefined"
      ? {
          text: "add your location",
          className: "btn btn-warning text-uppercase"
        }
      : isPresent === false
      ? { text: "reach at workpalce", className: "btn btn-dark text-uppercase" }
      : { text: "at workplace", className: "btn btn-info text-uppercase" };

  return (
    <div className="text-center my-3">
      <button
        className={addClass.className}
        onClick={locationTaker}
        disabled={isPresent ? true : false}
      >
        {addClass.text}{" "}
      </button>
    </div>
  );
}
