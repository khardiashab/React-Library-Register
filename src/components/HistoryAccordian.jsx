import React from "react";
import AccordianItem from "./Accordian";
import Modal from "./Modal";

export default function HistoryAccordian({ accordions }) {
  return (
    <>
      <div
        className="bg-secondar p-3"
        style={{ backgroundColor: "whitesmoke" }}
      >
        <div class="accordion accordion-flush" id="historyAccordion">
          {accordions?.map((accordion, ind) => {
            return <AccordianItem accordion={accordion} key={ind} id={ind} />;
          })}
        </div>
      </div>
      <Modal />
    </>
  );
}
