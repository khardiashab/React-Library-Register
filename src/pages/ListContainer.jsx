import React, { useState } from "react";
import { Sideimage, InputTask, Tasklist } from "../components";

import activity from "../assests/activity.png";

const tasks = [
  {
    _id: "0",
    name: "welcome to your todo list.",
    done: false
  },
  {
    _id: "1",
    name: "<-- click here after completing it.",
    done: false
  },
  {
    _id: "2",
    name: "to delete the task click here -->",
    done: false
  }
];

export default function ListContainer(props) {
  const [text, setText] = useState("");
  let [items, setItems] = useState([...tasks]);
  function btnClick() {
    setItems((arr) => {
      // console.log("previousState", arr);
      let newTask = {
        _id: String(arr.length),
        name: text,
        done: false
      };
      items = [newTask, ...arr];
      // console.log("items", items);
      return items;
    });
    setText("");
  }

  function DoneClick(e) {
    setItems((items) => {
      let newItems = items.map((item) => {
        if (item._id === e.target.value) {
          // console.log(item.name)
          item.done = true;
        }
        return item;
      });
      // console.log(newItems);
      return newItems;
    });
  }

  function DelClick(e) {
    setItems((items) => {
      items = items.filter((item) => {
        if (item.done === true) {
          return item;
        } else if (item._id !== e.target.value) {
          return item;
        }
      });
      // console.log("after deleting items", items);
      return items;
    });
  }

  return (
    <div className="row m-0">
      <div className="col-12 col-md-6 col-lg-6  px- px-md-5 mt-5">
        <h1
          className="fs-2  text-center shadow-lg py-2 mb-5 text-capitalize"
          style={{ backgroundColor: "#EAC7C7", color: "#A0C3D2" }}
        >
          todays Plan
        </h1>
        <InputTask text={text} setText={setText} btnClick={btnClick} />
        <Tasklist taskList={items} DelClick={DelClick} DoneClick={DoneClick} />
      </div>

      <Sideimage src={activity} />
    </div>
  );
}
