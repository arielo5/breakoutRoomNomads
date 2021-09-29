import React, { useState } from "react";
import ActivePolls from '../activePollDisplays/ActivePolls'
export default function PollDisplay() {

  const [currentPolls, setCurrentPolls] = useState([]);

  const addPoll = (item) => {
      const newPolls = [item, ...currentPolls];
      setCurrentPolls(newPolls);
  }

  return (
    <div>
      <ActivePolls
      activePolls={currentPolls}
      >
      </ActivePolls>
    </div>
  );
}
