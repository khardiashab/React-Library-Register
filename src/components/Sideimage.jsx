import React from "react";

export default function Sideimage({ src }) {
  return (
    <div className="d-none d-md-flex col-6 w-50">
      <img
        src={src}
        alt="activity"
        className="h-100 w-100 ms-auto"
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}
