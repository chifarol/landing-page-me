import React, { useEffect, useState } from "react";
import searchNormalIcon from "@/assets/images/search-icon-2.svg";
import helpbg from "@/assets/images/help-bg.svg";
import arrowIcon from "@/assets/images/Icons/double-right-arrow.svg";
// import { helpList } from "@/assets/data/help-list";
import Image from "next/image";
import { helpType } from "../types";

type Props = {
  onSelect: (choice: helpType) => void;
  helpList: helpType[];
};
const SearchHelp = ({ helpList, onSelect }: Props) => {
  const [list, setList] = useState(helpList);
  const [currentItem, setCurrentItem] = useState(helpList[0]);
  useEffect(() => {
    onSelect(helpList[0]);
  }, []);

  return (
    <div className="tw-w-full tw-pr-[1rem] tw-max-h-[90vh] tw-overflow-y-auto scroll">
      <div className="tw-mb-[2rem]">
        <p className="tw-text-18 tw-font-semiBold tw-text-[#101828]">
          Search for a question
        </p>
        <p className="tw-text-[#667085] tw-text-14">
          Type your question or search keyword
        </p>
      </div>
      <div className="tw-relative">
        <Image
          src={searchNormalIcon}
          alt=""
          className="tw-h-[1rem] tw-absolute tw-top-[.75rem] tw-left-[0.75rem]"
        />
        <input
          type="text"
          placeholder="Start typing..."
          onChange={(event) => {
            console.log(event.target.value);
            if (!event.target.value) {
              setList(helpList);
            } else {
              const newList = helpList.filter(
                (text) =>
                  text.title.toLowerCase().includes(event.target.value) ||
                  text.description.toLowerCase().includes(event.target.value)
              );
              setList(newList);
            }
          }}
          className="tw-bg-white tw-rounded-[4px] tw-w-[100%] tw-p-[.5rem_2.5rem] tw-text-[1rem] tw-border tw-border-p1"
          style={{
            boxShadow:
              "0px 0px 0px 4px #F4EBFF, 0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
          }}
        />
        <div className="tw-mt-[2rem]">
          {list.map((listItem, index) => (
            <div
              className={`tw-p-[0_.75rem] tw-h-[44px] tw-rounded-[5px] tw-flex tw-items-center tw-gap-[1rem] tw-justify-between tw-text-neutral-5 pointer  help-arrow-parent ${
                currentItem.id === listItem.id ? "active" : ""
              }`}
              key={index}
              onClick={() => {
                setCurrentItem(listItem);
                onSelect(listItem);
              }}
            >
              <p className="tw-text-14">{listItem.title}</p>
              <Image src={arrowIcon} alt="" className="tw-h-[1.5rem]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchHelp;
