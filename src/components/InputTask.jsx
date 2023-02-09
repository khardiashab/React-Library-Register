import React from "react";

export default function InputTask(props) {
  return (
    <div className="row col-12 mx-auto my-3">
      <div className="col-9">
        <input
          type="text"
          className="form-control col-10"
          placeholder="Add Task"
          value={props.text}
          onChange={(e) => props.setText(e.target.value)}
        />
      </div>
      <button className="btn btn-info col-3" onClick={props.btnClick}>
        Add
      </button>
    </div>
  );
}
