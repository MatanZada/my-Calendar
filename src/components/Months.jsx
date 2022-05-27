function Months(props) {
  // const { month } = props;
  const { month } = props;

  return (
    <div>
      {props.children}
      {
        <div class="month">
          <ul>
            <li class="prev">&#10094;</li>
            <li class="next">&#10095;</li>
            <li>
              {month}
              <br />
              <span>2021</span>
            </li>
          </ul>
        </div>
      }
    </div>
  );
}

export default Months;
