import React, { useRef } from "react";
import { EmailAddressIcon } from "../../assets/icon-components/input-icons";

interface EmailProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  onChangeHandler: (e: string) => void;
  placeholder: string;
  infoText?: string;
  errorText?: string;
  isSmall?: boolean;
  defaultValue?: string;
  readonly?: boolean;
}

export const EmailInput = ({
  label,
  placeholder,
  onChangeHandler,
  infoText = "",
  errorText = "",
  isSmall = false,
  readonly = false,
  defaultValue = "",
  ...rest
}: EmailProps): JSX.Element => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  function showPickerS() {
    emailRef.current?.showPicker();
  }
  return (
    <div {...rest}>
      <label
        className={`tw-block tw-text-n1 ${
          isSmall
            ? "tw-font-medium tw-mb-[0.25rem]"
            : "tw-font-bold tw-mb-[0.625rem]"
        }`}
        htmlFor={label}
      >
        {label}
      </label>
      <div className="tw-relative">
        <input
          type="email"
          name={label}
          readOnly={readonly}
          defaultValue={defaultValue}
          id={label}
          placeholder={placeholder}
          onClick={showPickerS}
          onChange={(event) => {
            if (emailRef?.current?.reportValidity()) {
              onChangeHandler(event.target.value);
            } else {
              onChangeHandler("");
            }
          }}
          className={`tw-border tw-border-g300 tw-h-[3.5rem] tw-rounded-[8px] tw-w-[100%] tw-p-[0.625rem_2.5rem] ${
            isSmall ? "tw-h-[46px]" : "tw-h-[3.5rem]"
          } `}
          style={{ borderColor: `${errorText}?"#FF3333":"` }}
          ref={emailRef}
        />
        <EmailAddressIcon className="tw-absolute tw-left-[.75rem] tw-top-[50%] tw-translate-y-[-50%]" />
      </div>
      {errorText && (
        <span className="tw-text-1216 tw-font-medium tw-mt-0.375rem tw-text-purple2">
          {errorText}
        </span>
      )}
      {infoText && (
        <span className="tw-text-1216 tw-font-medium tw-mt-0.375rem tw-text-purple2">
          {infoText}
        </span>
      )}
    </div>
  );
};
