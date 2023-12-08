import React, { useRef, useState } from "react";
import { PasswordIcon } from "../../assets/icon-components/input-icons";

interface PasswordProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  onChangeHandler: (e: string) => void;
  placeholder: string;
  infoText?: string;
  errorText?: string;
  forgetPassword?: boolean;
  minLength?: number;
  length?: number;
  isSmall?: boolean;
  showIcon?: boolean;
}

export const PasswordInput = ({
  label,
  placeholder,
  onChangeHandler,
  infoText = "",
  errorText = "",
  forgetPassword = false,
  length = 0,
  minLength = 8,
  isSmall = false,
  showIcon = true,
  ...rest
}: PasswordProps): JSX.Element => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const hideShowHandler = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div {...rest}>
      <label
        className={`tw-block tw-text-n1 ${
          isSmall ? "tw-font-medium" : "tw-font-bold"
        }`}
        htmlFor={label}
      >
        {label}
      </label>
      <div className="tw-relative">
        <input
          type={showPassword ? "text" : "password"}
          name={label}
          id={label}
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
          className={`tw-border tw-h-[3.5rem] tw-rounded-[8px] tw-w-[100%] tw-flex tw-items-center tw-gap-[.5rem] tw-border tw-rounded-[8px] tw-w-[100%] ${
            isSmall
              ? "tw-h-[46px] tw-mt-[0.25rem] tw-p-[.5rem]"
              : "tw-h-[3.5rem] tw-mt-[0.625rem] tw-p-[.5rem_2.5rem]"
          } ${
            errorText || error
              ? "tw-border-error focus:tw-border-error focus:tw-outline-error"
              : " tw-border-g300"
          }`}
        />
        {showIcon && (
          <PasswordIcon className="tw-absolute tw-left-[.85rem] tw-top-[32%]" />
        )}
      </div>
      <div className="tw-flex tw-items-center tw-justify-bewteen">
        {errorText || error ? (
          <p className="tw-text-1216 tw-font-medium tw-text-error">
            {error}
            {errorText}
          </p>
        ) : (
          <p className="tw-text-1216 tw-font-medium tw-text-purple2">
            {infoText}
          </p>
        )}
        {forgetPassword && (
          <a
            href="/auth/forgot-password"
            className="tw-text-12 tw-text-p1 tw-font-semiBold tw-ml-[auto] tw-mt-[.5rem]"
          >
            Forgot Password
          </a>
        )}
      </div>
    </div>
  );
};
