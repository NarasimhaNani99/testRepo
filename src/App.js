import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [name, setName] = useState('Iron Man');

  const changeNameBtn = () => {
    // console.log("func called");
    // name = 'THOR';
    setName('THOR');
    // console.log(name);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h4>Hello Narasimha & Suneel</h4>
        <p>Hello { name }</p>

        <button onClick={changeNameBtn}>Change Name</button>
      </header>
    </div>
  );
}

export default App;
