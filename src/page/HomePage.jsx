import React from "react";
import Day from "../components/Day";
import Months from "../components/Months";
import calenderData from "../data/calendarData.json";
function HomePage() {
  return (
    <div>
      {calenderData.map((Month) => (
        <Months {...Month}>
          {Month.days.map((oneDay) => (
            <Day {...oneDay} />
          ))}
        </Months>
      ))}
    </div>
  );
}

export default HomePage;
