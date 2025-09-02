import logo from './logo.svg';
import './App.css';
import Counter from './first';
import Calculator from './calculator';
import Products from './products';
import Form from './form';

// function sum(num1. num2) {
//   const ans =  num1 + num2;
//   return ans;
// }

// sum(10, 20);
// sum(200, 300);
// sum();

function App() {
  // returns jsx => javascript xml
  console.log("---App---");

  return (
    <div className="App">
      {/* <Calculator /> */}
      {/* <Products /> */}
      <Form />
    </div>
  );
}

export default App;
