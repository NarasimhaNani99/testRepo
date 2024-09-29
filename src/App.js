import logo from './logo.svg';
import './App.css';

function App() {
  let opArray = [345, 34, 546, 456, 98, 23, 1, 43];
  let output;
  // Level - 1
  // output = opArray.indexOf(546); // => 2
  // output = opArray.lastIndexOf(1); // => 6
  // output = opArray.find(item => item > 1); // => 345
  // output = opArray.findIndex(item => item > 1); // => 0
  // output = opArray.findLastIndex(item => item > 100); // => 3
  // output = opArray.includes(457); // => false
  // console.log(output);

  // Level - 2
  // **Map**
  // opArray.map(item => console.log(item));
  // const numbers = [1, 2, 3];
  // const doubled = numbers.map(num => num * 2); // [2, 4, 6]
  // console.log(numbers);
  // console.log(doubled);
  // **Filter**
  // const newopArray = opArray.filter(item => item > 1);
  // console.log(newopArray);
  // **Reduce**
  // const newopArray = opArray.reduce((nextItem, item) => nextItem + item, 10);
  // console.log(newopArray);

  // pass by value
  // let a = 10;
  // console.log(a);
  // let b = a;
  // console.log(b);
  // b = 20;
  // console.log("b = " + b);
  // console.log("a = " + a);

  // pass by reference
  // let a_arr = [1,2,3,4,5];
  // console.log(a_arr);
  // let b_arr = a_arr.slice();
  // console.log(b_arr);
  // b_arr.push(6);
  // console.log("b_arr = " + b_arr);
  // console.log("a_arr = " + a_arr);

  // let a_arr = [1,2,3,4,5,6,7,8,9];
  // console.log(a_arr.splice(3,1, 4,5));
  // console.log(a_arr);

  // let a_arr = [1,2,3,4,-5,6,7,8,9];
  // console.log(a_arr.some(item => item > 0))

  const a_arr = ['asfd', 'asfd', 'asdf', 'test', 'a'];
  // const a_arr = [32, 23, 1, 35, 235, 21, 64, 235];
  // console.log(a_arr.sort());
  console.log(a_arr.sort((a,b) => b-a));

  return (
    <div className="App">
      <header className="App-header">
        <h4>Hello Narasimha & Suneel</h4>
        <p>Array = ['{ opArray.join("', '") }']</p>
        <p>Output = { output }</p>
        
      </header>
    </div>
  );
}

export default App;
