import exercise from "../images/icon-exercise.svg";
import play from "../images/icon-play.svg";
import selfcare from "../images/icon-self-care.svg";
import social from "../images/icon-social.svg";
import study from "../images/icon-study.svg";
import work from "../images/icon-work.svg";
import { useState } from "react"
import Rectangle from "./Rectangle";
import Square from "./Square";
function Grid() {

  const [timeframe, setTimeframe] = useState("daily");

  return (
    <div className="mainGrid">
      <Rectangle setTimeframe={setTimeframe} />
      <Square activity={work} className={"square1"} number={0} timeframe={timeframe} />
      <Square activity={play} className={"square2"} number={1} timeframe={timeframe} />
      <Square activity={study} className={"square3"} number={2} timeframe={timeframe} />
      <Square activity={exercise} className={"square4"} number={3} timeframe={timeframe} />
      <Square activity={social} className={"square5"} number={4} timeframe={timeframe} />
      <Square activity={selfcare} className={"square6"} number={5} timeframe={timeframe} />
    </div>
  );
}

export default Grid;
