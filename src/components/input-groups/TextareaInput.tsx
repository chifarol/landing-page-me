import React, { useState } from "react";

interface TextareaInputProps extends React.HTMLAttributes<HTMLDivElement> {
  isSmall?: boolean;
  label: string;
  onChangeHandler: (e: string) => void;
  placeholder: string;
  infoText?: string;
  greenText?: string;
  length?: number;
  minLength?: number;
}

export const TextareaInput = ({
  isSmall = false,
  label,
  placeholder,
  greenText,
  onChangeHandler,
  infoText = "",
  length = 0,
  minLength = 1,
  ...rest
}: TextareaInputProps): JSX.Element => {
  const [error, setError] = useState("");
  return (
    <div {...rest}>
      <label
        className={`tw-block  tw-text-n1 ${
          isSmall ? "tw-font-medium" : "tw-mb-[0.25rem] tw-font-bold"
        }`}
        htmlFor={label}
      >
        {label}
      </label>
      <textarea
        defaultValue={placeholder}
        name={label}
        id={label}
        onChange={(event) => {
          if (length !== 0) {
            if (event.target.value.length === length) {
              onChangeHandler(event.target.value);
              setError("");
            } else {
              onChangeHandler("");
              setError(`${length} characters required`);
            }
          } else {
            if (event.target.value.length >= minLength) {
              onChangeHandler(event.target.value);
              setError("");
            } else {
              onChangeHandler("");
              setError(`Minimum of ${minLength} characters required`);
            }
          }
        }}
        className={`tw-border tw-border-g300 tw-h-[3.5rem] tw-rounded-[8px] tw-w-[100%] tw-p-[.5rem] ${
          isSmall ? "tw-h-[6.5rem]" : "tw-h-[8.5rem] tw-mt-[0.625rem]"
        }`}
        style={{ borderColor: `${error}?"#FF3333":"` }}
      ></textarea>
      <div className="tw-mt-[0.375rem] tw-flex tw-justify-between tw-items-center">
        {error ? (
          <p className="tw-text-1216 tw-font-medium tw-text-error">{error}</p>
        ) : (
          <p className="tw-text-1216 tw-font-medium tw-text-purple2">
            {infoText}
          </p>
        )}
        {greenText && (
          <p className="tw-text-1216 tw-font-medium tw-text-p4">{greenText}</p>
        )}
      </div>
    </div>
  );
};
