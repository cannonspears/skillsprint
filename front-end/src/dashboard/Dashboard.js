import React, { useEffect, useState } from "react";
import Search from "./Search";

function Dashboard({ date }) {
  return (
    <main>
      <h1>Dashboard</h1>
      <Search />
    </main>
  );
}

export default Dashboard;
