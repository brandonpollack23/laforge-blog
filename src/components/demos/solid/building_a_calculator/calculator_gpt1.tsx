import { createSignal } from "solid-js";

function Calculator() {
  // State for the inputs and result
  const [input1, setInput1] = createSignal("");
  const [input2, setInput2] = createSignal("");
  const [result, setResult] = createSignal("");

  // Operation functions
  const add = () => setResult((parseFloat(input1()) + parseFloat(input2())).toString());
  const subtract = () => setResult((parseFloat(input1()) - parseFloat(input2())).toString());
  const multiply = () => setResult((parseFloat(input1()) * parseFloat(input2())).toString());
  const divide = () => {
    if (parseFloat(input2()) === 0) {
      alert("Cannot divide by zero");
      return;
    }
    setResult((parseFloat(input1()) / parseFloat(input2())).toString());
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
        class="border-2 border-slate-300"
        type="number"
        value={input1()}
        onInput={(e) => setInput1(e.target.value)}
        placeholder="Input 1"
      />
      <input
        class="border-2 border-slate-300"
        type="number"
        value={input2()}
        onInput={(e) => setInput2(e.target.value)}
        placeholder="Input 2"
      />
      <div>
        <button class="p-2 m-1 bg-slate-200 rounded-md" onClick={add}>
          +
        </button>
        <button class="p-2 m-1 bg-slate-200 rounded-md" onClick={subtract}>
          -
        </button>
        <button class="p-2 m-1 bg-slate-200 rounded-md" onClick={multiply}>
          *
        </button>
        <button class="p-2 m-1 bg-slate-200 rounded-md" onClick={divide}>
          /
        </button>
        <button class="p-2 m-1 bg-slate-200 rounded-md" onClick={clear}>
          Clear
        </button>
      </div>
      <div>Result: {result()}</div>
    </div>
  );
}

export default Calculator;
