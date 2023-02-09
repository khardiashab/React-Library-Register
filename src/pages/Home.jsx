import React from "react";
import { Link } from "react-router-dom";
import human from "../assests/human.png";
import { Sideimage } from "../components";
import activity from "../assests/activity.png";
import logo from "../assests/addnote.png";

const titles = [
  {
    title: "css flex property",
    image: human
  },
  {
    title: "curd in mongodb",
    image: activity
  },
  {
    title: "nodejs chaning.",
    image: logo
  }
];

export default function Home() {
  return (
    <div class="row mx-auto d-flex mt-5 postion-relative">
      <div class="user  mt-4 col-12  col-md-6">
        <div class="quote px-2 my-5 text-center">
          {""}
          <q class="blockquote d-block p-1">
            {" "}
            Beleive in Yourself You are writing your future.{" "}
          </q>
        </div>
        <h3 className="text-center">Your Notes</h3>

        <div class="d-flex row row-cols-2 gy-2  row-cols-lg-3 border mx-lg-5">
          {titles &&
            titles.map((title, ind) => {
              return (
                <div>
                  <div
                    className="text-center fs-6 p-2 px-lg-4 text-uppercase"
                    style={{ cursor: "pointer" }}
                  >
                    <div
                      className="fw-bold pb-2 notesBtn"
                      type="button"
                      value={ind}
                      onClick={(e) => {
                        document
                          .getElementById(
                            `noteBtn_${e.target?.getAttribute("value")}`
                          )
                          .classList.remove("d-none");
                      }}
                    >
                      {title.title}
                    </div>
                  </div>
                  <ImageContainer src={title.image} ind={ind} key={ind} />
                </div>
              );
            })}
        </div>
      </div>

      {/* side image */}
      <Sideimage src={human} />
    </div>
  );
}

function ImageContainer({ src, ind }) {
  return (
    <div
      className="d-flex flex-column imageContainer d-none vh-100"
      id={"noteBtn_" + ind}
    >
      <button
        className="text-right text-white bg-white btn-close p-3 my-3 mx-3"
        onClick={() => {
          document.getElementById(`noteBtn_${ind}`).classList.add("d-none");
        }}
      ></button>
      <img
        src={src}
        alt=""
        className="w-100 h-100"
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}
