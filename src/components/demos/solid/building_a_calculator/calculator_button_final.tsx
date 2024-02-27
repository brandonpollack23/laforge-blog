import { CalculatorButtonType } from "./calculator_button_type";

interface CalculatorButtonProps {
  label: string;
  value: CalculatorButtonType;
  class?: string;
  onClick: (value: CalculatorButtonType) => void;
}

const CalculatorButton = (props: CalculatorButtonProps) => {
  // Button click handler
  const handleClick = () => {
    if (props.onClick) {
      props.onClick(props.value);
    }
  };

  return (
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleClick}
    >
      {props.label}
    </button>
  );
};

export default CalculatorButton;

export const WowButton = () => {
  function alertValue(value: string) {
    console.log("Alerting", value);
    window.alert(value);
  }

  return (
    <CalculatorButton
      label="Say WOW (click me)"
      onClick={alertValue}
      value={CalculatorButtonType.Wow}
    />
  );
};
