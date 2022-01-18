import React, { useEffect, useState } from "react";
import "./Location.css";

const Location = (props) => {
  const [findMore, setFindMore] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    })
  }, [width]);

  return (
    <div className="results-container">
      <div className="search-results">
        <div className="result">
          <p className="label">IP ADDRESS</p>
          <p className="text-result">{props.location.ip}</p>
        </div>
        {findMore && width <= 768 ? (
          <button
            className="pull-down"
            onClick={() => {setFindMore(false);}}
          >Details</button>) : (<>
            <div className="result">
              <p className="label">LOCATION</p>
              <p className="text-result">{props.location.city}</p>
            </div>
            <div className="result">
              <p className="label">TIMEZONE</p>
              <p className="text-result">UTC{props.location.timezone}</p>
            </div>
            <div className="result">
              <p className="label">ISP</p>
              <p className="text-result">{props.location.isp}</p>
            </div>
            <button
              className="pull-down"
              onClick={() => {setFindMore(true);}}>
              Close
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Location;
