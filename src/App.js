
import Costs from "./Components/Costs/Costs";
import NewCost from "./Components/NewCost/NewCost";

const App = () => {
  const costs = [
    {
      id: 'c1',
      date: new Date(2022, 2, 12),
      description: 'Холодильник',
      amount: 999.99,
    },
    {
      id:'c2',
      date: new Date(2022, 4, 25),
      description: 'Macbook',
      amount: 1590.99,
    },
    {
      id:'c3',
      date: new Date(2022, 5, 29),
      description: 'Джинсы',
      amount: 49.99,
    },
  ];

const addCostHandler = (cost) => {
  console.log(cost);
  console.log('App Component');
}


 
  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div> 
  );
}

export default App;
