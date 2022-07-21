
import Costs from "./Components/Costs";

function App() {

  const costs = [
    {
      date: new Date(2022, 2, 12),
      discription: 'Холодильник',
      amount: 999.99,
    },
    {
      date: new Date(2022, 4, 25),
      discription: 'Macbook',
      amount: 1590.99,
    },
    {
      date: new Date(2022, 5, 29),
      discription: 'Джинсы',
      amount: 49.99,
    },
  ];


  return (
    <div>
      <h1>Начнем изучение React!</h1>
      <Costs costs={costs} />
    </div> 
  );
}

export default App;
