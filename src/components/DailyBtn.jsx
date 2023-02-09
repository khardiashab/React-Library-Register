import React from "react";
import Modal from "./Modal";

export default function DailyBtn({ dailyData }) {
  let clsNm =
    dailyData?.inform === 0
      ? "small-text btn btn-outline-secondary btn-sm mx-1"
      : dailyData?.inform === 1
      ? "small-text btn btn-outline-warning btn-sm mx-1"
      : "small-text btn btn-sm mx-1  btn-outline-primary";

  return (
    <button className={clsNm} onClick={dailyHistory} value={dailyData._id}>
      {dailyData?.date}
    </button>
  );
}

function dailyHistory(e) {
  // console.log(e.target.value)
  // alert(e.target.value)
  document.getElementById("dailyListModal").classList.add("show");

  let modal = new bootstrap.Modal(document.getElementById("dailyListModal"));
  modal.show();
}
