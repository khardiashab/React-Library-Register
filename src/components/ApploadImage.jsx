import { useEffect, useState } from "react";
import React from "react";

function callInput() {
  let imageInput = document.getElementById("imageInput");
  console.log(imageInput);
  imageInput.click();
}

export default function ApploadImage() {
  let [image, setImage] = useState(null);
  let [title, setTitle] = useState("");
  let [error, setError] = useState("");
  useEffect(() => {
    setError("");
  }, [image, title]);

  function imageInputOnChange(e) {
    let { type } = e.target.files[0];
    if (
      type === "image/jpeg" ||
      type === "image/gif" ||
      type === "image/jpg" ||
      type === "image/png" ||
      image.size < 500000
    ) {
      setImage(e.target.files[0]);
      document.getElementById("inputTitle").focus();
    } else {
      setError("Upload image in .jpg, .jpeg .png and <5mb");
      setImage(null);
    }
  }
  function uploadNote(e) {
    if (image === null || title === "") {
      setError("Fill all field.");
    } else {
      setImage(null);
      setTitle("");
    }
  }

  return (
    <>
      {error !== "" ? <Warning msg={error} /> : null}
      <div className="d-flex flex-column justify-content-center align-items-center p-2 p-lg-5 w-100">
        <div
          className="border p-3 bg-secondary  w-100"
          style={{
            maxWidth: "400px",
            height: "300px",
            backgroundColor: "grey"
          }}
        >
          {!!!image ? (
            <div
              className="d-flex flex-column justify-content-around align-items-center w-100 h-100"
              style={{ border: "2px dotted black" }}
            >
              <div
                className="d-flex flex-column align-items-center cursor-pointer"
                style={{ cursor: "pointer" }}
                onClick={callInput}
              >
                <span className="text-primary text-decoration-underline">
                  {" "}
                  <i class="fa-duotone fa-cloud-arrow-up"></i>
                </span>
                <span className="text-primary text-decoration-underline fs-6">
                  Click here to upload image
                </span>
                <input
                  type="file"
                  id="imageInput"
                  className="d-none"
                  value={image}
                  onChange={imageInputOnChange}
                />
              </div>
              <p className="px-3 text-center">
                Upload image in .jpg, .jpeg .png and {"<"}5mb
              </p>
            </div>
          ) : (
            <div className="w-100 h-100">
              <img
                src={window.URL.createObjectURL(image)}
                alt=""
                className="w-100 h-100"
                style={{ objectFit: "fill" }}
              />
            </div>
          )}
        </div>
        <div className="d-flex flex-column align-items-center p-2 p-lg-5 m-0">
          <input
            type="text"
            className="inputTitle px-3 mt-5"
            id="inputTitle"
            placeholder="Add title here..."
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            focused
          />
          <div
            className="btn btn-primary text-white btn-sm mt-3 p-1"
            onClick={uploadNote}
          >
            Add Notes
          </div>
        </div>
      </div>
    </>
  );
}

function Warning({ msg }) {
  return <div className="alert alert-warning p-2 w-80 mb-2 text-l">{msg}</div>;
}
