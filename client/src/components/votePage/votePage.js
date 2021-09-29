import React from "react";
import Container from "../container/container";

export default function VotePage() {
  return (
<div className="columns content">
    <div className="column is-1"></div>
    <div className="column is-4">
    <div class="tile is-fullwidth">
      <article class="tile is-child notification instructions">
        <p class="title">How voting works:</p>
        <div class="content">
            Enter your suggested answer below, then add it to the list on the right.
            Once your suggestions are complete, order the list from top to bottom,
            starting with your most wanted answers.
        </div>
      </article>
    </div>
        <div class="field content">
            <div class="control">
                <textarea class="textarea is-large" placeholder="Enter your suggestion."></textarea>
            </div>
        </div>
        <button class="button is-large is-fullwidth">List it!</button>
    </div>
    <div className="column is-1"></div>
    <div className="column is-5">
        <Container />
    </div>
    <div className="column is-1"></div>
</div>
  );
}
