import React from "react";

export default function Dashboard() {
  return (
    <div>
      <div className="dashboardcontainer">
        <button id="createNewPoll" onClick="">
          Create a poll!
        </button>
      </div>
      <div className="dashboardcontainer">
        <h1 id="activePolls">Active Polls</h1>
      </div>
    </div>
  );
}
