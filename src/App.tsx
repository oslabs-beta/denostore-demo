import * as React from 'react';
import { Chart } from '../components/bar-chart';
import { addTimeType } from '../types';
//this file will contain react-router

//do we need to type what it returns?
const App: React.FunctionComponent = () => {
  const [data, setData] = React.useState([1.5, 0.02, 0.03, 0.02]);

  const addTime: addTimeType = (time: number) => {
    setData([...data, time]);
    console.log(data);
  };

  return (
    <div>
      <h1>React render here</h1>
      <Chart data={data} addTime={addTime}></Chart>
    </div>
  );
};

export default App;
