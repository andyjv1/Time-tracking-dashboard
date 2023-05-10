import React from 'react'
import ellipsis from "../images/icon-ellipsis.svg";
import Data from "../data.json"

const Square = ({ activity, className, timeframe, number }) => {
  return (
      <div className={`square ${className}`}>
          <div className="colorimage orangesquare">
              <img src={activity} alt="" />
          </div>
          <div className="squaredark">
              <div className="ellipsis">
                  <h3>Work</h3>
                  <img src={ellipsis} alt="" />
              </div>
              <div className="hours">
                  <h1>{Data[number].timeframes[timeframe].current} hrs</h1>
                  <p>Last Week - {Data[number].timeframes[timeframe].previous} hrs</p>
              </div>
          </div>
      </div>  )
}

export default Square