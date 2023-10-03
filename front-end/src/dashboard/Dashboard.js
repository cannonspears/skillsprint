import React, { useEffect, useState } from "react";
import ErrorAlert from "../layout/ErrorAlert";

function Dashboard({ date }) {
  return (
    <main>
      <h1>Dashboard</h1>
      <div className="d-md-flex mb-3">
        <h4 className="mb-0">Subtitle</h4>
      </div>
      <ErrorAlert error={null} />
      {JSON.stringify()}
    </main>
  );
}

export default Dashboard;
