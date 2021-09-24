import React from "react";

export default function VotePage() {
  return (
<div className="columns">
    <div className="column is-1"></div>
    <div className="column">


    <div className="tile is-ancestor">
  <div className="tile is-vertical is-8">
    <div className="tile">
      <div className="tile is-parent is-vertical">
        <article className="tile is-child notification is-primary">
          <p className="title instructions">How voting works:</p>
          <p className="subtitle instructions">
            Enter your suggested answer below, then add it to the list on the right.
            Once your suggestions are complete, order the list from top to bottom,
            starting with your most wanted answers.</p>
        </article>
        </div>
        </div>
        </div>
        </div>
    </div>
    <div className="column is-1"></div>
    <div className="column">
        Third column
    </div>
    <div className="column is-1"></div>
</div>
  );
}
