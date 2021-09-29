import React, { useState, useEffect } from "react";

export default function PollDisplay() {

  const [currentPolls, setCurrentPolls] = useState([]);

  const addPoll = (item) => {
      const newPolls = [item, ...currentPolls];
      setCurrentPolls(newPolls);
  }

  return (
    <div>
      <div className="card custom-card">
        <div className="card-content">
          <p className="title">
            “There are two hard things in computer science: cache invalidation,
            naming things, and off-by-one errors.”
          </p>
          <p className="subtitle">Jeff Atwood</p>
        </div>
        <footer className="card-footer">
          <p className="card-footer-item">
            <span>Vote!</span>
          </p>
        </footer>
      </div>
    </div>
  );
}
