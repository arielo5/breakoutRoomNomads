import React from "react";

export default function Footer() {
  return (
    
    <footer>
    <br></br>
    <br></br>
    <br></br>
      <div className="section-heading bg-footer">
        <p className="is-size-5 has-text-black has-text-centered">
          <a href="https://bulma.io">
            <img
              src="https://bulma.io/images/made-with-bulma.png"
              alt="Made with Bulma"
              width="128"
              height="24"
            ></img>
          </a>{" "}
          <span className="footlogo">
            <strong>Newdle</strong>
          </span>{" "}
          by Rhyce Erickson, Clay Holland, John Hope, Ariel Martinez, and Elijah
          Miernicki.
        </p>
      </div>
    </footer>
  );
}
