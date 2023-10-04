import React, { useEffect, useState } from "react";
import Search from "./Search";
import SuggestedButtons from "./SuggestedButtons";

function Dashboard({ date }) {
  return (
    <main>
      <Search />
      <SuggestedButtons />
    </main>
  );
}

export default Dashboard;
