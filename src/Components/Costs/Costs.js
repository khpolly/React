import CostItem from "./CostItem";
import "./Costs.css";
import Card from "../UI/Card";

const Costs = (props) => {
  return (
    <Card className="costs">
      <CostItem
        date={props.costs[0].date}
        discription={props.costs[0].discription}
        amount={props.costs[0].amount}
      />
      <CostItem
        date={props.costs[1].date}
        discription={props.costs[1].discription}
        amount={props.costs[1].amount}
      />
      <CostItem
        date={props.costs[2].date}
        discription={props.costs[2].discription}
        amount={props.costs[2].amount}
      />
    </Card>
  );
}

export default Costs;
