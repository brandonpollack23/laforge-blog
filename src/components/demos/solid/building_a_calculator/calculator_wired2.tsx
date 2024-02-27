import { createSignal } from "solid-js";
import { CalculatorButtonType } from "./calculator_button_type";
import CalculatorButton from "./calculator_button_final";

const Calculator = () => {
  const [currentInput, setCurrentInput] = createSignal("");
  const [previousInput, setPreviousInput] = createSignal("");
  const [operation, setOperation] = createSignal<CalculatorButtonType | null>(null);
  const [resultDisplayed, setResultDisplayed] = createSignal(false);

  const calculatorReset = () => {
    setCurrentInput("");
    setPreviousInput("");
    setOperation(null);
    setResultDisplayed(false);
  };

  const handleNumber = (value: string) => {
    if (resultDisplayed() === true) {
      setResultDisplayed(false);
      setCurrentInput("");
    }

    setCurrentInput((prev) => prev + value);
  };

  const handleOperation = (op: CalculatorButtonType) => {
    if (currentInput() !== "") {
      if (op === CalculatorButtonType.ToggleSign) {
        setCurrentInput((prev) => String(-parseFloat(prev)));
        return;
      }

      setPreviousInput(currentInput());
      setCurrentInput("");
      setOperation(op);
    }
  };

  const calculateResult = () => {
    const num1 = parseFloat(previousInput());
    const num2 = parseFloat(currentInput());
    let result = 0;

    switch (operation()) {
      case CalculatorButtonType.Add:
        result = num1 + num2;
        break;
      case CalculatorButtonType.Subtract:
        result = num1 - num2;
        break;
      case CalculatorButtonType.Multiply:
        result = num1 * num2;
        break;
      case CalculatorButtonType.Divide:
        result = num1 / num2;
        break;
      default:
        return;
    }

    setCurrentInput(String(result));
    setPreviousInput("");
    setResultDisplayed(true);
    setOperation(null);
  };

  const onButtonClick = (value: CalculatorButtonType) => {
    switch (value) {
      case CalculatorButtonType.Zero:
      case CalculatorButtonType.One:
      case CalculatorButtonType.Two:
      case CalculatorButtonType.Three:
      case CalculatorButtonType.Four:
      case CalculatorButtonType.Five:
      case CalculatorButtonType.Six:
      case CalculatorButtonType.Seven:
      case CalculatorButtonType.Eight:
      case CalculatorButtonType.Nine:
      case CalculatorButtonType.Decimal:
        handleNumber(value);
        break;
      case CalculatorButtonType.Add:
      case CalculatorButtonType.Subtract:
      case CalculatorButtonType.Multiply:
      case CalculatorButtonType.Divide:
      case CalculatorButtonType.Sqrt:
        setCurrentInput(sqrtNewtonMethod(parseFloat(currentInput()))?.toFixed(5).toString()!);
        break;
      case CalculatorButtonType.Equals:
        calculateResult();
        break;
      case CalculatorButtonType.Clear:
        calculatorReset();
        break;
      // Add cases for other buttons like ToggleSign if needed
      default:
        console.warn("Unhandled button type", value);
    }
  };

  return (
    <div>
      <div class="text-lg min-h-12">{currentInput()}</div>
      <CalculatorGrid onButtonClick={onButtonClick} />
    </div>
  );
};

interface CalculatorGridProps {
  onButtonClick: (value: CalculatorButtonType) => void;
}

const CalculatorGrid = (props: CalculatorGridProps) => {
  const onButtonClick = props.onButtonClick;

  return (
    <div class="max-w-xs mx-auto">
      <div class="grid grid-cols-4 gap-2">
        <CalculatorButton label="7" value={CalculatorButtonType.Seven} onClick={onButtonClick} />
        <CalculatorButton label="8" value={CalculatorButtonType.Eight} onClick={onButtonClick} />
        <CalculatorButton label="9" value={CalculatorButtonType.Nine} onClick={onButtonClick} />
        <CalculatorButton label="+" value={CalculatorButtonType.Add} onClick={onButtonClick} />
        <CalculatorButton label="4" value={CalculatorButtonType.Four} onClick={onButtonClick} />
        <CalculatorButton label="5" value={CalculatorButtonType.Five} onClick={onButtonClick} />
        <CalculatorButton label="6" value={CalculatorButtonType.Six} onClick={onButtonClick} />
        <CalculatorButton label="-" value={CalculatorButtonType.Subtract} onClick={onButtonClick} />
        <CalculatorButton label="1" value={CalculatorButtonType.One} onClick={onButtonClick} />
        <CalculatorButton label="2" value={CalculatorButtonType.Two} onClick={onButtonClick} />
        <CalculatorButton label="3" value={CalculatorButtonType.Three} onClick={onButtonClick} />
        <CalculatorButton label="*" value={CalculatorButtonType.Multiply} onClick={onButtonClick} />
        <CalculatorButton
          label="0"
          value={CalculatorButtonType.Zero}
          onClick={onButtonClick}
          class="col-span-2"
        />
        <CalculatorButton label="." value={CalculatorButtonType.Decimal} onClick={onButtonClick} />
        <CalculatorButton label="/" value={CalculatorButtonType.Divide} onClick={onButtonClick} />
        <CalculatorButton
          label="±"
          value={CalculatorButtonType.ToggleSign}
          onClick={onButtonClick}
        />
        <CalculatorButton
          label="="
          value={CalculatorButtonType.Equals}
          onClick={onButtonClick}
          class="col-span-2"
        />
        <CalculatorButton
          label="Clear"
          value={CalculatorButtonType.Clear}
          onClick={onButtonClick}
          class="col-span-2"
        />
        <CalculatorButton label="√" value={CalculatorButtonType.Sqrt} onClick={onButtonClick} />
      </div>
    </div>
  );
};

export default Calculator;

function sqrtNewtonMethod(
  x: number,
  tolerance: number = 1e-7,
  maxIterations: number = 1000
): number | undefined {
  if (x < 0) {
    console.error("Input must be non-negative.");
    return undefined;
  }
  if (x === 0 || x === 1) {
    return x;
  }

  let s = x; // Initial guess for the square root
  for (let i = 0; i < maxIterations; i++) {
    let nextS = 0.5 * (s + x / s); // Update s using Newton's method formula
    if (Math.abs(nextS - s) < tolerance) {
      // Check if the change is within the tolerance
      return nextS; // Found a sufficiently accurate approximation
    }
    s = nextS; // Prepare for the next iteration
  }

  console.warn("Max iterations reached without converging to the specified tolerance.");
  return s; // Return the last approximation
}
