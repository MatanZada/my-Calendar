import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Day from "./components/Day";
import Months from "./components/Months";
import calenderData from "./data/calendarData.json";
import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {calenderData.map((Month) => (
          <Months {...Month}>
            {Month.days.map((oneDay) => (
              <Day {...oneDay} />
            ))}
          </Months>
        ))}
      </div>
      <Route path="/day" components={Day} />
      <Route path="/months" components={Months} />
    </Router>
  );
}

export default App;
