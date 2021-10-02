import React from "react";
import { Link} from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_POLL } from "../../utils/queries";

export default function DashboardCards(poll) {
  const { data } = useQuery(QUERY_POLL);
  const pollList = data?.polls || [];
  console.log(pollList)
  // const _id = pollList.map((poll) => poll._id)
  return (
        <div>
          {pollList.map((poll) => {
            return (
              <div className="card card-style">
                <div className="card-content">
                  <p className="title" key={poll._id} value={poll.pollName}>
                    {poll.pollName}
                  </p>
                </div>
                <footer className="card-footer">
                  
                  <p className="card-footer-item">
                  <Link to={{pathname: `/poll/${poll._id}`}}>Vote!</Link>
                  </p>;
                </footer>
              </div>
            );
          })}
        </div>
  );
}
