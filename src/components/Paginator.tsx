import React from "react";
import { FowardArrowIcon } from "../assets/icon-components/dashboard-icons";
import { TextNumberInput } from "./input-groups/TextNumberInput";

type Props = {
  currentIndex: number;
  chunkify: () => any[];
  goToPage: (pageNum: number) => void;
};

export function chunkify(arr: any[]) {
  const arrayClone = arr.map((item) => item);
  const chunkArray = [];
  const chunkSize = 8;
  for (let i = 0; i < arrayClone.length; i += chunkSize) {
    const chunk = arrayClone.slice(i, i + chunkSize);
    chunkArray.push(chunk);
    // do whatever
  }
  return chunkArray;
}

function Paginator({ currentIndex, chunkify, goToPage }: Props) {
  return (
    <div className="tw-w-full tw-mx-[auto] tw-flex tw-items-center tw-gap-[.5rem] tw-justify-between tw-my-[1.25rem] tw-text-14">
      <button
        className={`tw-w-[fit-content] tw-border tw-border-[#D0D5DD] tw-p-[0.75rem] tw-rounded-[6px] tw-flex tw-items-center tw-gap-[.5rem] ${
          currentIndex > 0 ? "tw-text-n1" : "tw-text-[#9E9E9E]"
        } tw-h-[2.25rem]  pointer`}
        onClick={() => {
          if (currentIndex > 0) {
            goToPage(currentIndex - 1);
          }
        }}
        disabled={!(currentIndex > 0)}
      >
        <div className="tw-rotate-180">
          <FowardArrowIcon
            isActive={currentIndex > 0}
            className="tw-rotate-[180] tw-h-[1.25rem]"
          />
        </div>

        <p>Previous</p>
      </button>
      <div className=" tw-flex tw-items-center tw-gap-[.5rem]">
        <input
          type="number"
          className="!tw-max-w-[3rem] tw-h-[36px] tw-border tw-border-g300 tw-rounded-[8px] tw-px-[.5rem]"
          min={1}
          max={chunkify().length}
          placeholder=""
          defaultValue={`${currentIndex + 1}`}
          onChange={(e) => {
            const value = parseInt(e.target.value);
            if (value > 0) {
              if (value <= chunkify().length) {
                goToPage(value - 1);
              } else {
                e.target.value = "25";
                goToPage(24);
              }
            }
          }}
        />
        of {chunkify().length}
      </div>
      <button
        className={`tw-w-[fit-content] tw-border tw-p-[0.75rem] tw-rounded-[6px] tw-flex tw-items-center tw-gap-[.5rem] ${
          currentIndex < chunkify().length - 1
            ? "tw-text-n1 tw-border-n1"
            : "tw-text-[#9E9E9E] tw-border-[#D0D5DD]"
        } tw-h-[2.25rem] pointer`}
        onClick={() => {
          if (currentIndex < chunkify().length - 1) {
            goToPage(currentIndex + 1);
          }
        }}
        disabled={!(currentIndex < chunkify().length - 1)}
      >
        <p>Next</p>

        <FowardArrowIcon
          className="tw-h-[1.25rem]"
          isActive={currentIndex < chunkify().length - 1}
        />
      </button>
    </div>
  );
}

export default Paginator;
