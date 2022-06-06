import logo from './logo.svg';
import './App.css';
import Timer from './timer';
import Todolist from './todolist';
import { Counter } from './counter';
import Fetch from './fect_with_axious';
import React from 'react';
import Testreducer from './reducer';
import Todo from './assignment02/todobody';
export const Usecontex = React.createContext()
function App() {

  return (
    <>
    {/* <h1 style={{textAlign:"center"}}>Counter</h1> */}
      {/* <Counter /> */}
      {/* <Timer/> */}
      {/* <Todolist /> */}
      {/* <Usecontex.Provider value={'Fatch'}>
        <Fetch/>
      </Usecontex.Provider> */}
      {/* <Testreducer></Testreducer> */}
      <Todo></Todo>
      
    </>
  );
}

export default App;
