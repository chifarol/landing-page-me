import React, { useState } from "react";

interface TextInputProps extends React.HTMLAttributes<HTMLDivElement> {
  isSmall?: boolean;
  readonly?: boolean;
  label: string;
  onChangeHandler: (e: string) => void;
  placeholder: string;
  infoText?: string;
  greenText?: string;
  id?: string;
  length?: number;
  defaultValue?: string;
  minLength?: number;
}

export const TextInput = ({
  isSmall = false,
  readonly = false,
  label,
  placeholder,
  greenText,
  onChangeHandler,
  infoText = "",
  id,
  length = 0,
  minLength = 1,
  defaultValue = "",
  ...rest
}: TextInputProps): JSX.Element => {
  const [error, setError] = useState("");
  return (
    <div {...rest}>
      <label
        className={`tw-block tw-text-n1 ${
          isSmall ? "tw-font-medium" : "tw-font-bold"
        }`}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        type="text"
        name={id}
        id={id}
        readOnly={readonly}
        defaultValue={defaultValue}
        placeholder={placeholder}
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
        className={`tw-border tw-border-g300 tw-h-[3.5rem] tw-rounded-[8px] tw-w-[100%] tw-px-[.5rem] ${
          isSmall
            ? "tw-h-[46px] tw-mt-[0.25rem]"
            : "tw-h-[3.5rem] tw-mt-[0.625rem]"
        }`}
        style={{ borderColor: `${error}?"#FF3333":"` }}
      />
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

interface TextInputWIconProps extends TextInputProps {
  icon: JSX.Element;
}

export const TextInputWIcon = ({
  icon,
  isSmall = false,
  readonly = false,
  label,
  placeholder,
  greenText,
  onChangeHandler,
  infoText = "",
  id,
  length = 0,
  minLength = 1,
  defaultValue = "",
  ...rest
}: TextInputWIconProps): JSX.Element => {
  const [error, setError] = useState("");
  return (
    <div {...rest}>
      <label
        className={`tw-block tw-text-n1 ${
          isSmall ? "tw-font-medium" : "tw-font-bold"
        }`}
        htmlFor={id}
      >
        {label}
      </label>
      <div
        className={`tw-flex tw-items-center tw-gap-[.5rem] tw-border tw-border-g300 tw-rounded-[8px] tw-w-[100%] tw-px-[.5rem] ${
          isSmall
            ? "tw-h-[46px] tw-mt-[0.25rem]"
            : "tw-h-[3.5rem] tw-mt-[0.625rem]"
        }`}
      >
        {icon}
        <input
          type="text"
          name={id}
          id={id}
          readOnly={readonly}
          defaultValue={defaultValue}
          placeholder={placeholder}
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
          className={` tw-h-full tw-w-[100%] tw-px-[.5rem]`}
          style={{ borderColor: `${error}?"#FF3333":"` }}
        />
      </div>
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
