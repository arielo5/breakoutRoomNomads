import React, { useState } from "react";
import Container from "../container/container";

// import { useMutation } from "@apollo/react-hooks";
// import { SAVE_POLL } from "../../utils/mutations";
// import query
// useQuery => data, loading


let choices = [
    {
        name: "choice"
    }
];


export default function VotePage() {
  const [choicearray, updateChoicearray] = useState(choices);

  const addOption = () => {
    const userInput = document.getElementById("userinput");
    choices.push({ name: userInput.value});
    updateChoicearray(choices => [...choices, {name: userInput.value}]);
    console.log(choices);
    userInput.value = "";
  };
  
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
        <button className="button is-large is-fullwidth" type="submit" style={{margin: "0"}} onClick={() => addOption()}>
          List it!
        </button>
      </div>
      <div className="column is-1"></div>
      <div className="column is-5">
        <Container choices={choicearray}/>
        <button className="button is-large is-fullwidth" style={{margin: "0"}} type="submit">Vote!</button>
      </div>
      <div className="column is-1"></div>
    </div>
  );
}