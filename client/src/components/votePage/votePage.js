import React from "react";
import Container from "../container/container";
import { choices } from "../container/container";
import { useMutation } from "@apollo/react-hooks";
import { SAVE_POLL } from "../../utils/mutations";

export default function VotePage() {
  return (
    <div className="columns content">
      <div className="column is-1"></div>
      <div className="column is-4">
        <div className="tile is-fullwidth">
          <article className="tile is-child notification instructions">
            <p className="title">How voting works:</p>
            <div className="content">
              Enter your suggested choices in the text box, then add them to the list.
              Once your suggestions are complete, order the list from top to bottom,
              starting with your most wanted answers.
            </div>
          </article>
        </div>
        <div className="field content">
          <div className="control">
            <textarea className="textarea is-large" placeholder="Enter your suggestion." id="userinput"></textarea>
          </div>
        </div>
        <button className="button is-large is-fullwidth" style={{margin: "0"}}type="submit">List it!</button>
      </div>
      <div className="column is-1"></div>
      <div className="column is-5">
        <Container />
      </div>
      <div className="column is-1"></div>
    </div>
  );
}