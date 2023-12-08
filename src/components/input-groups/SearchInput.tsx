"use client";
import React, { useState } from "react";
import { SearchIcon } from "../../assets/icon-components/topbar-icons";
import searchIconImage from "../../assets/images/search-icon-2.svg";
import searchIcon2 from "../../assets/images/search-icon-2.svg";
import Image from "next/image";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  placeholder: string;
  onChangeHandler: (choice: string) => void;
  bordered?: boolean;
}

const SearchInput = ({
  placeholder,
  onChangeHandler,
  bordered = true,
}: Props) => {
  return (
    <div
      className={`tw-relative sha1 ${
        bordered ? "tw-border tw-border-[#C8951A]" : ""
      } tw-rounded-[.5rem] tw-w-full tw-max-w-[467px]`}
    >
      <Image
        src={searchIconImage}
        alt=""
        className="tw-absolute tw-top-[1rem] tw-left-[0.5rem]"
      />
      <input
        type="text"
        placeholder={placeholder}
        onChange={(event) => {
          onChangeHandler(event.target.value);
          console.log(event.target.value);
        }}
        className="tw-bg-white tw-rounded-[6px] tw-w-full tw-p-[1rem_2.5rem] tw-text-[1rem]"
      />
    </div>
  );
};

export const SearchInput2 = ({
  placeholder,
  onChangeHandler,
  bordered = true,
  ...rest
}: Props) => {
  return (
    <div {...rest}>
      <div
        className={`tw-relative sha1 ${
          bordered ? "tw-w-full" : ""
        } tw-rounded-[.5rem]`}
      >
        <Image
          src={searchIcon2}
          alt=""
          className="tw-absolute tw-top-[.7rem] tw-left-[0.5rem] tw-h-[1.25rem]"
        />
        <input
          type="text"
          placeholder={placeholder}
          onChange={(event) => {
            onChangeHandler(event.target.value);
            console.log(event.target.value);
          }}
          className="tw-border tw-border-[#C8951A] tw-bg-white tw-rounded-[6px] tw-w-full tw-max-w-[684px] tw-px-[2.5rem] tw-grid tw-place-items-center tw-h-[2.75rem] tw-text-[1rem]"
        />
      </div>
    </div>
  );
};

type Props_Icon = {
  icon: string;
  placeholder: string;
  onChangeHandler: (choice: string) => void;
  listProp: [string, string][];
};

export const SearchInput_Icon = ({
  icon,
  placeholder,
  onChangeHandler,
  listProp,
}: Props_Icon) => {
  const [list, setList] = useState(listProp);
  return (
    <>
      <div className="tw-relative">
        <Image
          src={icon}
          alt=""
          className="tw-h-[1rem] tw-absolute tw-top-[1.25rem] tw-left-[0.75rem]"
        />
        <input
          type="text"
          placeholder={placeholder}
          onChange={(event) => {
            console.log(event.target.value);
            if (!event.target.value) {
              setList(listProp);
            } else {
              const newList = list.filter((item) =>
                item[1].toLowerCase().includes(event.target.value)
              );
              setList(newList);
            }
          }}
          className="tw-bg-[#F5F5F8] tw-rounded-[4px] tw-w-[100%] tw-p-[1rem_2.5rem] tw-text-[1rem]"
        />
      </div>
      <div className="tw-mt-[2rem]">
        {list.map((listItem, index) => (
          <div
            className="tw-p-[1.25rem_0] twc-border-bottom-1 tw-border-neautral-f0 tw-text-1616 tw-text-neutral-5 tw-flex tw-gap-[0.5rem]"
            key={index}
          >
            <Image src={listItem[0]} alt="" />
            <div className="tw">{listItem[1]}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchInput;
