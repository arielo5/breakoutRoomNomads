import React from "react";
import Container from "../container/container";
import { useMutation } from "@apollo/react-hooks";
import { SAVE_POLL } from "../../utils/mutations";
// import query
// useQuery => data, loading

const choices = [
  {
      id: "1",
      name: "Spaghetti and Meatballs"
  },
  {
      id: "2",
      name: "Pizza Pie"
  },{
      id: "3",
      name: "Hot Peanuts and Mustard"
  },{
      id: "4",
      name: "Warm Gin"
  },{
      id: "5",
      name: "Day Old Bread"
  }
];

export default function VotePage() {
  const addOption = () => {
    const userInput = document.getElementById("userinput");
    console.log("Motherfucker", userInput.value);
    choices.push( {id: (choices.length +1).toString(), name: userInput.value});
    console.log("The pushed array", choices);
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
        <button className="button is-large is-fullwidth" type="submit" onClick={() => addOption() }>
          List it!
        </button>
      </div>
      <div className="column is-1"></div>
      <div className="column is-5">
        <Container choices={choices} />
        <button className="button is-large is-fullwidth" type="submit">Vote!</button>
      </div>
      <div className="column is-1"></div>
    </div>
  );
}