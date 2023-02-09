import React from "react";

export default function Modal({ Modaldata }) {
  return (
    <>
      <div class="modal fade " id="dailyListModal" role="dialog" tabIndex="-1">
        <div class="modal-dialog modal-vertical-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body ms-3">
              {Modaldata ? (
                <p className="lead ">Your are there</p>
              ) : (
                <p className="lead text-warning"> You have not use App.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
