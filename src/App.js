import React, { useState, useEffect, useRef, useReducer, useContext } from 'react';
import logo from './logo.svg';
import DataContextProvider from './context/DataContext';
import BasicHooks from './Components/BasicHooks';
import './App.css';

function App() {
  let [numbers, setNumbers] = useState([1,2,3]);
  const ptag = useRef();
  const inputRef = useRef();

  const pushBtn = () => {
    setNumbers(prevNumber => [...prevNumber, ++prevNumber[prevNumber.length-1]]);

    ptag.current.style.background = 'red';
    inputRef.current.focus();
  }

  const reducerFunction = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { count : state.count+1 };
      case 'decrement':
        return { count : state.count-1 };
      default:
        return state;
    }
  }

  const initialState = { count: 0 };
  const [counter, dispatch] = useReducer(reducerFunction, initialState);

  // useEffect(()=> {
  //   console.log('Component Initialized');
  //   setTimeout(()=> {
  //     console.log('Hello World');
  //   }, 5000);
  // },[numbers]);

  return (
    <div className="App">
      <header className="App-header">
        <h4>Hello Narasimha & Suneel</h4>
        <p>{ numbers }</p>
        <button onClick={pushBtn}>Push</button>
        <p ref={ptag}>React Learning</p>
        <input type='text' ref={inputRef} />
        <p>{ counter.count }</p>
        <p>
          <button onClick={ () => dispatch({ type: 'increment' }) }>+</button>
          &nbsp;&nbsp;&nbsp;
          <button onClick={ () => dispatch( { type: 'decrement' } ) }>-</button>
        </p>
        <DataContextProvider>
          <BasicHooks />
        </DataContextProvider>
      </header>
    </div>
  );
}

export default App;