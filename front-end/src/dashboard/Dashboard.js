import React, { useEffect, useState } from "react";
import Search from "./Search";

/**
 * Defines the dashboard page.
 * @param date
 *  the date for which the user wants to view reservations.
 * @returns {JSX.Element}
 */
function Dashboard({ date }) {
  return (
    <main>
      <h1>Dashboard</h1>
      <Search />
    </main>
  );
}

export default Dashboard;
