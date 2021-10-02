import React from "react";
import { NavLink} from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_POLL } from "../../utils/queries";

export default function DashboardCards() {
  const { data } = useQuery(QUERY_POLL);
  const pollList = data?.polls || [];
  console.log(pollList)

  return (
        <div>
          {pollList.map((poll) => {
            return (
              <div className="card card-style">
                <div className="card-content">
                  <p className="title" key={poll._id} value={poll.pollName}>
                    {poll.pollName}
                  </p>
                  <p className="subtitle">Jeff Atwood</p>
                </div>
                <footer className="card-footer">
                  <p className="card-footer-item">
                    <NavLink to="/poll">Vote!</NavLink>
                  </p>
                </footer>
              </div>
            );
          })}
        </div>
  );
}
