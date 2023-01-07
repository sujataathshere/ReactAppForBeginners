import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import FC from "./Components/FunctionalComp";
import {ClassComp, ClassComp1} from "./Components/ClassComp";
import Click from './Components/Click';
import Counter from './Components/Counter';
import ParentComp from './Components/ParentComp';
import ClassProps from './Components/ClassProps';
import FunctionProps from './Components/FunctionProps';
function App() {
  return (
    <div>
      <h1>Hello World...!!!</h1>
      <FC/>
      <ClassComp/>
      <ClassComp1/>
      <Click/>
      <Counter/>
      <ParentComp/>
      <ClassProps name="Sujata1" place="Pune">
        <p>Child Component</p>
      </ClassProps>
      <ClassProps name="Sujata2" place="Mumbai">
        <button>Click</button>
      </ClassProps>
      <FunctionProps name="Sujata3" place="Nashik"></FunctionProps>
    </div>
  );
}

export default App;
