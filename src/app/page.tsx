"use client";

import Image from "next/image";
import styles from "./page.module.css";
import React, { useState } from "react";
import NumberButton from "./components/NumberButton";

const operators = ["+", "-", "/", "*"];

const Page = () => {
  const [result, setResult] = useState("");

  const operatorButtonHandler = (symbolString: string) => {
    const lastIndexNumber = result.length - 1;
    const lastCharacter = result.charAt(lastIndexNumber);

    if (operators.includes(lastCharacter)) {
      setResult(result.slice(0, -1) + symbolString);
      return;
    }

    setResult(result.concat(symbolString));
  };

  const numberButtonHandler = (numString: string) => {
    setResult(result.concat(numString));
  };

  const clearButtonHandler = () => {
    setResult("");
  };

  const cButtonHandler = () => {
    setResult(result.substring(0, result.length - 1));
  };

  const decimalButtonHandler = () => {
    if (result.indexOf(".") < 0) {
      setResult(result.concat("."));
    }
  };

  const equalButtonHandler = () => {
    setResult(eval(result).toString());
  };

  return (
    <div className="container">
      <div className="result">{result}</div>
      <div className="keypad">
        <button
          id="clear"
          onClick={() => {
            clearButtonHandler();
          }}
        >
          Clear
        </button>
        <button
          onClick={() => {
            cButtonHandler();
          }}
        >
          C
        </button>
        <button
          onClick={() => {
            operatorButtonHandler("/");
          }}
        >
          &divide;
        </button>
        <NumberButton
          buttonName="7"
          numberButtonHandler={numberButtonHandler}
        />
        <NumberButton
          buttonName="8"
          numberButtonHandler={numberButtonHandler}
        />
        <NumberButton
          buttonName="9"
          numberButtonHandler={numberButtonHandler}
        />
        <button
          onClick={() => {
            operatorButtonHandler("*");
          }}
        >
          &times;
        </button>
        <NumberButton
          buttonName="4"
          numberButtonHandler={numberButtonHandler}
        />
        <NumberButton
          buttonName="5"
          numberButtonHandler={numberButtonHandler}
        />
        <NumberButton
          buttonName="6"
          numberButtonHandler={numberButtonHandler}
        />
        <button
          onClick={() => {
            operatorButtonHandler("-");
          }}
        >
          &ndash;
        </button>
        <NumberButton
          buttonName="1"
          numberButtonHandler={numberButtonHandler}
        />
        <NumberButton
          buttonName="2"
          numberButtonHandler={numberButtonHandler}
        />
        <NumberButton
          buttonName="3"
          numberButtonHandler={numberButtonHandler}
        />
        <button
          onClick={() => {
            operatorButtonHandler("+");
          }}
        >
          +
        </button>
        <NumberButton
          buttonName="0"
          numberButtonHandler={numberButtonHandler}
        />
        <button
          onClick={() => {
            decimalButtonHandler();
          }}
        >
          .
        </button>
        <button
          id="equals"
          onClick={() => {
            equalButtonHandler();
          }}
        >
          =
        </button>
      </div>
    </div>
  );
};
export default Page;
