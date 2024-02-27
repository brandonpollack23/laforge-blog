import CalculatorButton from "./calculator_button_final";
import { CalculatorButtonType } from "./calculator_button_type";

export const CalculatorGrid = () => {
  const onButtonClick = (value: string) => {
    console.log(value); // Here you'll handle the logic based on the button clicked
  };

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
      </div>
    </div>
  );
};

export default CalculatorGrid;
