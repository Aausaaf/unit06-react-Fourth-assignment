import logo from './logo.svg';
import './App.css';
import Timer from './timer';
import Todolist from './todolist';
import { Counter } from './counter';
import Fetch from './fect_with_axious';
import React from 'react';
import Testreducer from './reducer';
import Todo from './assignment02/todobody';
import Parenttochild from './week2day1/parenttochile';
import Childtoparent from './week2day1/parenttochile';
import Slibling from './week2day1/sibling';
import AuthLogin from './authentic_Login/AuthLogin';
import Grocery from './assignment03/grocery';
import Form from './assignment04/form';
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
      </Usecontex.Provider>  */}
      {/* <Testreducer></Testreducer>
     <Todo></Todo> 
      {/* <Parenttochild></Parenttochild> */}
      {/* <Childtoparent></Childtoparent> */}
      {/* <Slibling></Slibling> */}
      {/* <AuthLogin></AuthLogin> */}
      {/* <Grocery></Grocery> */}
     
    </>
  );
}

export default App;
