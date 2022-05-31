import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Day(props) {
  // const { days = [], today } = props;
  const { day, today } = props;
  const styleCards = {
    display: "inline-block",
    width: "13.6%",
    textAlign: "center",
    marginBottom: "5px",
    fontSize: "12px",
    color: "#777",
  };
  return (
    <Card style={styleCards}>
      <Card.Body>
        <Link to="days">click to visit all the days</Link>
        <Card.Title>{day}</Card.Title>
        <Card.Text>{today}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Day;
