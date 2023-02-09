import React, { useState } from "react";
const listStyle = {
  color: "rgba(255,255,255,.7)",
  fontSize: "1.1rem"
};

function Task({ task, DelClick, DoneClick }) {
  const [isDone, setDone] = useState(task.done);

  function onChangeHandler(e) {
    setDone((val) => {
      if (val) {
        return val;
      } else {
        DoneClick(e);
        return true;
      }
    });
  }

  return (
    <div className="row col-10 mx-auto text-capitalize my-2" style={listStyle}>
      <div className="col-9 shadow-lg pt-1">
        <input
          type="checkbox"
          className="form-check-input"
          onChange={onChangeHandler}
          checked={isDone}
          value={task._id}
        />
        <span
          className="ms-2 ms-md-4"
          style={
            isDone
              ? {
                  textDecoration: "line-through",
                  color: "#A0C3D2"
                }
              : {
                  color: "gray"
                }
          }
        >
          {task.name}
        </span>
      </div>
      <DelButton DelClick={DelClick} _id={task._id} />
    </div>
  );
}
function DelButton({ _id, DelClick }) {
  return (
    <button
      className="btn btn-warning btn-sm col-2 ms-auto"
      value={_id}
      onClick={DelClick}
    >
      Del
    </button>
  );
}

export default function TaskList({ taskList, DelClick, DoneClick }) {
  return (
    <>
      <div className="row my-4 ">
        {taskList?.map((val) => {
          return (
            <Task
              task={val}
              key={val._id}
              DelClick={DelClick}
              DoneClick={DoneClick}
            />
          );
        })}
      </div>
    </>
  );
}
