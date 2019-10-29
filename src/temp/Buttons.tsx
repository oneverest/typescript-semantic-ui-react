import React from "react";
import { Button, ButtonGroup } from "semantic-ui-react";

interface IButtonsProps {
  onIncrement: () => void;
  onDecrement: () => void;
}

function Buttons({ onIncrement, onDecrement }: IButtonsProps) {
  return (
    <ButtonGroup>
      <Button onClick={onIncrement}>+</Button>,
      <Button onClick={onDecrement}>-</Button>
    </ButtonGroup>
  );
}

export default Buttons;
