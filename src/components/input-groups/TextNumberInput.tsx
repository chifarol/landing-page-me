import React, { useState, useRef } from "react";

interface NumProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  min?: number;
  max?: number;
  onChangeHandler: (e: number) => void;
  placeholder: string;
  infoText?: string;
  greenText?: string;
  errorText?: string;
  id?: string;
}

export const TextNumberInput = ({
  label,
  min = 0,
  max = 10e9,
  placeholder,
  greenText,
  onChangeHandler,
  infoText = "",
  id,
  ...rest
}: NumProps): JSX.Element => {
  const [errorText, setErrorText] = useState("");
  let lastValidNum: number;
  const inputRef = useRef<HTMLInputElement | null>(null);
  return (
    <div {...rest}>
      <label
        className="tw-block tw-mb-[0.25rem] tw-text-n1 tw-font-bold"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        type="text"
        name={id}
        id={id}
        ref={inputRef}
        placeholder={placeholder}
        onChange={(event) => {
          if (inputRef.current !== null) {
            console.dir(event.target);
            const numberInput = parseInt(event.target.value);
            if (numberInput) {
              lastValidNum = numberInput;
              inputRef.current.value = numberInput.toString();
              if (numberInput >= min && numberInput <= max) {
                onChangeHandler(numberInput);
                setErrorText(``);
              } else {
                onChangeHandler(-1);
                setErrorText(`Number between ${min} and ${max}`);
              }
            } else {
              inputRef.current.value =
                numberInput && lastValidNum ? lastValidNum.toString() : "";
              onChangeHandler(-1);
              setErrorText(`Number between ${min} and ${max}`);
            }
          }
        }}
        className="tw-border tw-h-[3.5rem] tw-mt-[0.625rem] tw-rounded-[8px] tw-w-[100%] tw-p-[1rem_0.625rem]"
        style={{ borderColor: `${errorText}?"#FF3333":"` }}
      />
      <div className="tw-mt-[0.375rem] tw-flex tw-justify-between tw-items-center">
        {errorText && (
          <p className="tw-text-10 tw-font-medium tw-text-error">{errorText}</p>
        )}
        {greenText && (
          <p className="tw-text-10  tw-font-medium tw-text-green-04">
            {greenText}
          </p>
        )}
      </div>
    </div>
  );
};
