import React from "react";
import "./Splash.css";

function Splash() {
  return (
    <div className="row splash">
      <div className="col-md-6">
        <div className="message">
          <h1>Let's learn</h1>
          <p className="text-secondary">
            You've got things you want to learn. We've got things you can learn.
            Let's find the right match.
          </p>
          <button
            type="button"
            class="btn btn-lg btn-secondary mx-auto col-10"
          >
            Launch your learning journey
          </button>
        </div>
      </div>
      <div className="col-md-6">
        <img
          className="img-fluid"
          src="https://placehold.it/600"
        />
      </div>
    </div>
  );
}

export default Splash;
