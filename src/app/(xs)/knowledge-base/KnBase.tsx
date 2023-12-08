"use client";
import Topbar from "@/components/Topbar";
import SearchHelp from "@/components/help/SearchHelp";
import HelpText from "@/components/help/HelpText";
import { useState } from "react";
import helpBg from "@/assets/images/help-bg.png";
import arrowIcon from "@/assets/images/Icons/double-right-arrow.svg";
import cancelIcon from "@/assets/images/Icons/cancel.svg";
import Image from "next/image";

import axios from "axios";
import { getApiPath, useRequestProcessor } from "@/QueryFxns";
import { BarSpinner } from "@/components/Spinners";
import { helpType } from "@/components/types";
import type { Metadata } from "next";

export default function KnowledgeBase() {
  const [currentItem, setCurrentItem] = useState<helpType>();
  const [open, setOpen] = useState(true);
  type fetchedData = {
    title: string;
    body: string;
  };
  const [helpList, setHelpList] = useState<helpType[]>([]);
  const { useQueryFxn, useMutationFxn } = useRequestProcessor();
  const fetchKbase = useQueryFxn(
    ["help"],
    () => {
      return axios
        .get(`${getApiPath()}/user/help`)
        .then((res) => {
          const result = res.data.data as helpType[];
          setHelpList(result);
          // setCurrentItem(result[0]);
          console.log("result", result);
          return res.data;
        })
        .catch((e) => {
          console.log("fetchTerms error", e);
          return e;
        });
    },
    { enabled: true }
  );
  return (
    <div>
      {fetchKbase.isLoading ? (
        <BarSpinner className="tw-my-[8rem] tw-h-[3rem]" />
      ) : (
        <div className="tw-flex tw-ap-[1.5rem] tw-py-[8rem] tw-px-[4rem] md:tw-px-[1.25rem]">
          <div className="tw tw-relative">
            <div
              className={`tw-w-full tw-transition-all tw-duration-[600ms] tw-p-[3rem_1.25rem] md:tw-p-[1.5rem_.75rem] tw-whitespace-nowrap tw-border tw-border-[#E6E8F0] tw-overflow-x-hidden ${
                open
                  ? "tw-w-full tw-max-w-[360px] tw-h-[fit-content] md:tw-bg-none sm:tw-max-w-[80%]"
                  : "tw-px-[0] tw-max-w-[0] tw-invisible"
              }`}
              style={{ background: "url('/help-bg.png') no-repeat" }}
            >
              <SearchHelp
                onSelect={(helpItem) => {
                  setCurrentItem(helpItem);
                  // setOpen(false);
                }}
                helpList={helpList}
              />
            </div>

            <div
              className="tw-absolute tw-right-[-40px] tw-top-[0] pointer sm:tw-right-[-20px]"
              onClick={() => {
                setOpen(!open);
              }}
            >
              {!open && (
                <Image src={arrowIcon} alt="" className="tw-h-[1.5rem]" />
              )}
              {open && (
                <Image src={cancelIcon} alt="" className="tw-h-[1.5rem] " />
              )}
            </div>
          </div>
          <div
            className={`tw-w-full tw-mx-[3.75rem] tw-bg-cover ${
              open ? "sm:tw-hidden " : "md:tw-mx-[3rem]"
            }`}
            style={{ background: "url('/help-bg.png') no-repeat" }}
          >
            {currentItem && <HelpText helpObj={currentItem} />}
          </div>
        </div>
      )}
    </div>
  );
}
