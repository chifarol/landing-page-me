"use client";
import { PrimaryButton } from "@/components/input-groups/Button";
import Link from "next/link";

import axios from "axios";
import { getApiPath, useRequestProcessor } from "@/QueryFxns";
import { useState } from "react";
import { BarSpinner } from "@/components/Spinners";
import { RichTextDisplay } from "@/components/input-groups/RichText1";
import { accordionType } from "@/components/types";
import Accordion from "@/components/dropdowns/Accordion";
import SearchInput from "@/components/input-groups/SearchInput";
import { searchByTerm } from "@/components/functions";

export default function FAQs() {
  type fetchedData = {
    title: string;
    body: string;
  };
  const [fetchedData, setFetchedData] = useState<fetchedData>({
    title: "",
    body: "",
  });
  const [careersList, setCareersList] = useState<accordionType[]>([]);
  // const [careersArr, setCareersArr] = useState<accordionType[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const { useQueryFxn, useMutationFxn } = useRequestProcessor();
  const [accList, setAccList] = useState<accordionType[]>([]);
  const fetchFAQs = useQueryFxn(
    ["privacy"],
    () => {
      return axios
        .get(`${getApiPath()}/user/knowledge-base`)
        .then((res) => {
          const result = res.data.data as accordionType[];
          setCareersList(result);
          // setCareersArr(result);
          setAccList(result);
          console.log("result", result);
          return res.data;
        })
        .catch((e) => {
          console.log("fetchFAQs error", e);
          return e;
        });
    },
    { enabled: true }
  );
  return (
    <main
      className="tw-p-[4rem] md:tw-px-[0] tw-bg-cover tw-bg-no-repeat"
      style={{ backgroundImage: `url('/hero-image-bg.svg')` }}
    >
      {/* hero section */}
      <div className="tw-w-full tw-pt-[6rem] tw-pb-[4rem] tw-bg-cover  md:tw-pb-[2rem] md:tw-pt-[4rem]">
        {/* header */}
        <div
          className="tw-p-[3rem] tw-h-[400px] tw-w-full tw-flex tw-flex-col tw-items-center tw-justify-center tw-bg-p1 tw-mb-[1.5rem] tw-bgcover tw-bg-center tw-rounded-[20px] md:tw-rounded-[0] md:tw-p-[1.25rem] md:tw-h-[240px]"
          style={{ backgroundImage: `url('/page-bg.png')` }}
        >
          <h4 className="tw-text-48 tw-text-white tw-font-bold md:tw-text-32 md:tw-text-center">
            Frequently Asked Questions
          </h4>
          {/* search */}
          <div className="tw-w-full tw-max-w-[600px] tw-bg-white tw-px-[.5rem] tw-h-[3.5rem] tw-flex tw-items-center tw-gap-[1rem] tw-rounded-[10px] tw-mt-[3rem]">
            <SearchInput
              placeholder="Search"
              bordered={false}
              onChangeHandler={(value) => {
                setAccList(searchByTerm(careersList, value));
                setSearchTerm(value);
              }}
            />
            <button
              className={`tw-ml-[auto] tw-text-center tw-bg-p1 tw-text-white tw-px-[2rem] tw-h-[40px] tw-rounded-[6px]`}
              onClick={() => {}}
            >
              Search
            </button>
          </div>
        </div>

        {/* main content */}
        <div className="tw-flex tw-flex-col tw-items-center tw-mt-[8rem] md:tw-mt-[5rem]">
          {fetchFAQs.isLoading ? (
            <BarSpinner className="tw-my-[8rem] tw-h-[2rem]" />
          ) : (
            <Accordion data={accList} />
          )}
        </div>
      </div>
      <div className="tw"></div>
    </main>
  );
}
