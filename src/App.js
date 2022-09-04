import React, {useState}  from "react";
import Costs from "./Components/Costs/Costs";
import NewCost from "./Components/NewCost/NewCost";

const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2022, 2, 12),
    description: 'Холодильник',
    amount: 999.99,
  },
  {
    id:'c2',
    date: new Date(2020, 4, 25),
    description: 'Macbook',
    amount: 1590.99,
  },
  {
    id:'c3',
    date: new Date(2021, 5, 29),
    description: 'Джинсы',
    amount: 49.99,
  },
];

const App = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS);

const addCostHandler = (cost) => {
  setCosts(prevCosts => {
    return [cost, ...prevCosts]
  });
}


 
  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div> 
  );
}

export default App;
