import React from "react";

interface NumberButtonProps {
  buttonName: string;
  numberButtonHandler: (num: string) => void;
}

const NumberButton = ({
  buttonName,
  numberButtonHandler,
}: NumberButtonProps) => {
  return (
    <button
      onClick={() => {
        numberButtonHandler(buttonName);
      }}
    >
      {buttonName}
    </button>
  );
};

export default NumberButton;
