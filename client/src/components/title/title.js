import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_POLL } from "../../utils/queries";
import { useHistory } from "react-router-dom";

export default function Title(poll) {
  const { data } = useQuery(QUERY_POLL);
  const pollList = data?.polls || [];
  console.log(pollList);
  const idArray = window.location.pathname.split('/');
  const id = idArray[2];

  return (
    <div>
      <section className="hero titlebg">
        <div className="columns">
          <div className="column is-3"></div>
          <div className="hero-body column">
            {pollList.map((poll) => {
              if (poll._id === id) {
                return (
                  <p
                    className="title titlebg titletext"
                    id="pollTitle"
                    key={poll._id}
                    value={poll.pollName}
                  >
                    {poll.pollName}
                  </p>)
              }
            })}
          </div>
          <div className="column is-3"></div>
        </div>
      </section>
    </div>
  );
}
