import { createSignal } from "solid-js";

function Calculator() {
  // State for the inputs and result
  const [input1, setInput1] = createSignal("");
  const [input2, setInput2] = createSignal("");
  const [result, setResult] = createSignal("");

  // Operation functions
  const add = () => setResult(parseFloat(input1()) + parseFloat(input2()));
  const subtract = () => setResult(parseFloat(input1()) - parseFloat(input2()));
  const multiply = () => setResult(parseFloat(input1()) * parseFloat(input2()));
  const divide = () => {
    if (parseFloat(input2()) === 0) {
      alert("Cannot divide by zero");
      return;
    }
    setResult(parseFloat(input1()) / parseFloat(input2()));
  };

  // Clear function
  const clear = () => {
    setInput1("");
    setInput2("");
    setResult("");
  };

  return (
    <div>
      <input
        type="number"
        value={input1()}
        onInput={(e) => setInput1(e.target.value)}
        placeholder="Input 1"
      />
      <input
        type="number"
        value={input2()}
        onInput={(e) => setInput2(e.target.value)}
        placeholder="Input 2"
      />
      <div>
        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>
        <button onClick={multiply}>*</button>
        <button onClick={divide}>/</button>
        <button onClick={clear}>Clear</button>
      </div>
      <div>Result: {result()}</div>
    </div>
  );
}

export default Calculator;
