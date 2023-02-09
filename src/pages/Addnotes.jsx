import React from "react";
import addnote from "../assests/addnote.png";
import { Sideimage, ApploadImage } from "../components";

export default function Addnotes() {
  return (
    <div className="row m-0">
      <div className="d-flex flex-column col-12 col-md-6 m-0 p-3 p-lg-5">
        <ApploadImage />
      </div>
      <Sideimage src={addnote} />
    </div>
  );
}
