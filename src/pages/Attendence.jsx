import React from "react";
import { PresentBtn, HistoryAccordian, Sideimage } from "../components";
import human from "../assests/human.png";
let buttons = [
  {
    date: "15 jan",
    inform: 0,
    _id: "0"
  },
  {
    date: "14 jan",
    inform: 0,
    _id: "1"
  },
  {
    date: "13 jan",
    inform: 1,
    _id: "2"
  },
  {
    date: "12 jan",
    inform: 2,
    _id: "3"
  },
  {
    date: "11 jan",
    inform: 1,
    _id: "4"
  },
  {
    date: "10 jan",
    inform: 2,
    _id: "5"
  },
  {
    date: "9 jan",
    inform: 0,
    _id: "6"
  },
  {
    date: "8 jan",
    inform: 0,
    _id: "7"
  },
  {
    date: "7 jan",
    inform: 0,
    _id: "8"
  }
];

let accordionHeading = "Last 15 days history.";
let accordions = [
  { accordionHeading: accordionHeading, accordionBody: buttons },
  { accordionHeading: accordionHeading, accordionBody: buttons },
  { accordionHeading: accordionHeading, accordionBody: buttons },
  { accordionHeading: accordionHeading, accordionBody: buttons }
];

export default function Attendence() {
  return (
    <div className="row containe mx-aut d-flex jutify-content-center">
      <div className="col-12 col-md-6 d-flex flex-column justify-content-center p-3 p-lg-5 mt-5">
        <div class="tittle-container text-center fs-2 fw-bold">
          Hey <span>😎</span> <br /> <em>Awesome One </em>
        </div>

        <PresentBtn isPresent={1} locationTaker={undefined} />
        <HistoryAccordian accordions={accordions} />
      </div>
      <Sideimage src={human} />
    </div>
  );
}
