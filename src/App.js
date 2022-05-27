import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Day from "./components/Day";
import Months from "./components/Months";
import calenderData from "./data/calendarData.json";

function App() {
  return (
    <div className="App">
      {calenderData.map((Month) => (
        <Months {...Month}>
          {Month.days.map((oneDay) => (
            <Day {...oneDay} />
          ))}
        </Months>
      ))}
    </div>
  );

  //   {calenderData.map((months) => (
  //     <Months {...months} />
  //   ))}
  //   {calenderData.map((oneDay) => (
  //     <Day {...oneDay} />
  //   ))}
  // </div>
}

export default App;
