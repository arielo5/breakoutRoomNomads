import React from "react";
import { NavLink } from "react-router-dom";
import { QUERY_POLL } from '../../utils/queries';
import { useQuery } from '@apollo/react-hooks';


export default function DashboardCards () {

  const { loading, error, data } = useQuery(QUERY_POLL);
  console.log("get data 1", data)

  if(loading) {
    return <div>loading</div>
  }
  if(error) {
    return <div>encountered an error: {error}</div>
  }

  const pollData = data?.poll || []; 
  console.log("get data 2", pollData)
  

  return (
    <div className="card card-style">
      <div className="card-content">
        <p className="title">
          “There are two hard things in computer science: cache invalidation,
          naming things, and off-by-one errors.”
        </p>
        <p className="subtitle">Jeff Atwood</p>
      </div>
      <footer className="card-footer">
        <p className="card-footer-item">
          <NavLink to='/poll'>
            Vote!
          </NavLink>
        </p>
      </footer>
    </div>
  );
}
