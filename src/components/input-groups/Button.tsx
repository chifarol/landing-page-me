"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { SpinnerIcon } from "../Spinners";
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  classNames?: string;
  label: string;
  icon?: string;
  link?: string;
  footnote?: string;
  footnoteCTA?: string;
  isLoading?: boolean;
  footnoteCTALink?: string;
  onClickHandler?: (event?: React.SyntheticEvent) => void;
  isDisabled?: boolean;
}

export const SubmitButton = ({
  label,
  link = "",
  footnote = "",
  footnoteCTA = "",
  footnoteCTALink = "#",
  onClickHandler = () => {},
  isDisabled = false,
  isLoading = false,
  ...rest
}: Props): JSX.Element => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (buttonRef.current !== null) {
      buttonRef.current.disabled = isDisabled;
    }
  }, [isDisabled]);

  return (
    <div {...rest}>
      <button
        className={`tw-text-center ${
          !isDisabled ? "tw-bg-p1" : "tw-bg-pdisabled"
        } tw-font-medium tw-text-16 tw-text-white tw-px-[1rem] tw-h-[44px] tw-grid tw-place-items-center tw-rounded-[8px] tw-w-[100%]`}
        onClick={onClickHandler}
        ref={buttonRef}
      >
        {isLoading ? (
          <SpinnerIcon />
        ) : link ? (
          <a href={link} className="tw">
            {label}
          </a>
        ) : (
          label
        )}
      </button>
      {footnote && (
        <div className="tw-mt-[1.25rem] tw-text-neutral-5 tw-text-1416">
          {footnote}{" "}
          <a className="tw-text-purple2 tw-font-medium" href={footnoteCTALink}>
            {footnoteCTA}
          </a>
        </div>
      )}
    </div>
  );
};
export const PrimaryButton = ({
  classNames = "",
  label,
  link = "",
  onClickHandler = () => {},
  isDisabled = false,
  isLoading = false,
  ...rest
}: Props): JSX.Element => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (buttonRef.current !== null) {
      buttonRef.current.disabled = isDisabled;
    }
  }, [isDisabled]);

  return (
    <div {...rest}>
      <button
        className={`tw-text-center ${
          !isDisabled ? "tw-bg-p1" : "tw-bg-pdisabled"
        } tw-font-medium tw-text-16 tw-text-white tw-px-[1rem] tw-h-[44px] tw-grid tw-place-items-center tw-rounded-[8px] tw-w-[100%] ${classNames}`}
        onClick={onClickHandler}
        ref={buttonRef}
      >
        {isLoading ? (
          <SpinnerIcon />
        ) : link ? (
          <a href={link} className="tw">
            {label}
          </a>
        ) : (
          label
        )}
      </button>
    </div>
  );
};
export const PrimaryErrorButton = ({
  link = "",
  label,
  onClickHandler = () => {},
  isDisabled = false,
  ...rest
}: Props): JSX.Element => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (buttonRef.current !== null) {
      buttonRef.current.disabled = isDisabled;
    }
  }, [isDisabled]);

  return (
    <div {...rest}>
      <button
        className={`tw-text-center tw-text-white ${
          !isDisabled ? "tw-bg-error" : "tw-bg-pdisabled"
        } tw-font-medium tw-text-16 tw-text-white tw-px-[1rem] tw-h-[44px] tw-grid tw-place-items-center tw-rounded-[8px] tw-w-[100%]`}
        onClick={onClickHandler}
        ref={buttonRef}
      >
        {link ? (
          <a href={link} className="tw">
            {label}
          </a>
        ) : (
          label
        )}
      </button>
    </div>
  );
};

export const SecondaryDangerButton = ({
  link = "",
  label,
  onClickHandler = () => {},
  isDisabled = false,
  ...rest
}: Props): JSX.Element => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (buttonRef.current !== null) {
      buttonRef.current.disabled = isDisabled;
    }
  }, [isDisabled]);

  return (
    <div {...rest}>
      <button
        className={`tw-text-center tw-border pointer ${
          !isDisabled ? "tw-border-error" : "tw-border-pdisabled tw-text-p1/50"
        } tw-font-medium tw-text-16 tw-text-error tw-px-[1rem] tw-h-[44px] tw-grid tw-place-items-center tw-rounded-[8px] tw-w-[100%]`}
        onClick={onClickHandler}
        ref={buttonRef}
      >
        {link ? (
          <a href={link} className="tw">
            {label}
          </a>
        ) : (
          label
        )}
      </button>
    </div>
  );
};
export const SecondaryButton = ({
  link = "",
  label,
  onClickHandler = () => {},
  isDisabled = false,
  ...rest
}: Props): JSX.Element => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (buttonRef.current !== null) {
      buttonRef.current.disabled = isDisabled;
    }
  }, [isDisabled]);

  return (
    <div {...rest}>
      <button
        className={`tw-text-center tw-border ${
          !isDisabled
            ? "tw-border-p1 tw-text-p1"
            : "tw-border-pdisabled tw-text-p1/50"
        } tw-font-medium tw-text-16 tw-text-white tw-px-[1rem] tw-h-[44px] tw-grid tw-place-items-center tw-rounded-[8px] tw-w-[100%]`}
        onClick={onClickHandler}
        ref={buttonRef}
      >
        {link ? (
          <a href={link} className="tw">
            {label}
          </a>
        ) : (
          label
        )}
      </button>
    </div>
  );
};
export const TransparentButton = ({
  link = "",
  label,
  icon,
  onClickHandler = () => {},
  isDisabled = false,
  ...rest
}: Props): JSX.Element => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (buttonRef.current !== null) {
      buttonRef.current.disabled = isDisabled;
    }
  }, [isDisabled]);

  return (
    <div {...rest}>
      <button
        className={`tw-text-center tw-text-white tw-border tw-border-white tw-bg-white/50 tw-h-[40px] tw-px-[1rem] tw-flex tw-justify-center tw-items-center tw-gap-[.5rem] tw-rounded-[8px] tw-w-[100%] tw-whitespace-nowrap`}
        onClick={onClickHandler}
        ref={buttonRef}
      >
        {icon && <Image src={icon} alt="" className="tw" />}
        <span className="tw">
          {link ? (
            <a href={link} className="tw">
              {label}
            </a>
          ) : (
            label
          )}
        </span>
      </button>
    </div>
  );
};
export const OutlineButton = ({
  link = "",
  label,
  icon,
  onClickHandler = () => {},
  isDisabled = false,
  color = "#D0D5DD",
  ...rest
}: Props): JSX.Element => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (buttonRef.current !== null) {
      buttonRef.current.disabled = isDisabled;
    }
  }, [isDisabled]);

  return (
    <div {...rest}>
      <button
        className={`tw-border tw-font-medium tw-text-16 tw-text-white tw-px-[1rem] tw-h-[44px] tw-flex tw-justify-center tw-items-center tw-rounded-[8px] tw-w-[100%]`}
        style={{
          color: "#344054",
          borderColor: "#D0D5DD",
        }}
        onClick={onClickHandler}
        ref={buttonRef}
      >
        {icon && <Image src={icon} alt="" className="tw" />}
        <span className="tw">
          {link ? (
            <a href={link} className="tw">
              {label}
            </a>
          ) : (
            label
          )}
        </span>
      </button>
    </div>
  );
};
