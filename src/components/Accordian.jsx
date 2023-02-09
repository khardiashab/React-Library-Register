import React from "react";
import DailyBtn from "./DailyBtn";

export default function AccordianItem({ accordion, id }) {
  return (
    <>
      <div class="accordion-item i">
        <h2 class="accordion-header" id="flush-headingOne">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={"#accordion" + id}
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            {accordion.accordionHeading}
          </button>
        </h2>
        <div
          id={"accordion" + id}
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#historyAccordion"
        >
          <div class="accordion-body  row row-cols-6 gx-auto  gy-2">
            {accordion.accordionBody?.map((daily) => {
              return <DailyBtn dailyData={daily} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
