"use client";
import Topbar from "@/components/Topbar";
import Image from "next/image";
import { PrimaryButton } from "@/components/input-groups/Button";
import Link from "next/link";
import SearchInput from "@/components/input-groups/SearchInput";
import { careersType } from "@/components/types";
import { useEffect, useState } from "react";
import { searchByTerm } from "@/components/functions";

import axios from "axios";
import { getApiPath, useRequestProcessor } from "@/QueryFxns";
import { BarSpinner } from "@/components/Spinners";
import { accordionType } from "@/components/types";
import type { Metadata } from "next";

export default function Careers() {
  const [careersList, setCareersList] = useState<careersType[]>([]);
  const [careersArr, setCareersArr] = useState<careersType[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const { useQueryFxn, useMutationFxn } = useRequestProcessor();
  const fetchCareers = useQueryFxn(
    ["careers"],
    () => {
      return axios
        .get(`${getApiPath()}/user/careers`)
        .then((res) => {
          const result = res.data.data as careersType[];
          setCareersList(result);
          setCareersArr(result);
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
          className="tw-p-[3rem] tw-h-[400px] tw-w-full tw-grid tw-place-items-center tw-bg-p1 tw-bgcover tw-bg-center tw-rounded-[20px] md:tw-rounded-[0] md:tw-p-[1.25rem] md:tw-h-[240px]"
          style={{ backgroundImage: `url('/page-bg.png')` }}
        >
          <div className="tw-text-center">
            <h4 className="tw-text-60 tw-text-white tw-font-bold md:tw-text-40">
              Career
            </h4>
            <p className="tw-mt-[rem] tw-text-white">
              Become a part of our big family to inspire and get inspired by
              professional experts.
            </p>
            {/* search */}
            <div className="tw-w-full tw-max-w-[669px] tw-bg-white tw-px-[.5rem] tw-h-[3.5rem] tw-flex tw-items-center tw-gap-[1rem] tw-rounded-[10px] tw-mt-[1rem]">
              <SearchInput
                placeholder="Search"
                bordered={false}
                onChangeHandler={(value) => {
                  setCareersArr(searchByTerm(careersList, value));
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
        </div>

        {/* main content */}
        <div className="tw-w-full tw-b-white tw-p-[6rem_0] tw-rounded-[10px] md:tw-p-[2rem_1rem]">
          <h4 className="tw-text-24 tw-font-bold">
            {careersList.length === careersArr.length
              ? `All Jobs`
              : searchTerm && `Search results for '${searchTerm}'`}
          </h4>

          {fetchCareers.isLoading ? (
            <BarSpinner className="tw-my-[8rem] tw-h-[2rem]" />
          ) : (
            <div className="tw-grid tw-grid-cols-autoFit_360 md:tw-grid-cols-autoFit_300 tw-gap-[1.5rem] tw-mt-[2rem]">
              {careersArr.length ? (
                careersArr.map((item, index) => (
                  <div
                    className="tw-bg-white tw-flex tw-flex-col tw-p-[1.5rem] tw-border tw-border-[#D6DDEB]"
                    key={index}
                  >
                    <a
                      href={`/careers/${item.slug}`}
                      className="tw-font-bold tw-text-24 tw-border-b tw-border-b-[rgba(0,0,0,0.1)] tw-pb-[1rem] md:tw-text-18"
                    >
                      {item.title}
                    </a>
                    <div className="tw-text-[#272727] tw-mt-[1.5rem] tw-flex tw-flex-col tw-gap-[.75rem]">
                      {/* <p className="tw-flex tw-items-center">
                      {item.location} |
                      <span className="tw-text-p1 tw-pl-[.25rem]">
                        {" "}
                        {item.type}{" "}
                      </span>
                    </p> */}
                      <p
                        className="tw-text-14 tw-mb-[2rem] tw-line-clamp-4"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      ></p>
                    </div>
                    <PrimaryButton
                      label="Apply Now"
                      onClickHandler={() => {
                        // window.open(`/careers/${item.slug}`);
                      }}
                      link={`/careers/${item.slug}`}
                      className="tw-ml-[auto] tw-w-[fit-content] tw-mt-[auto]"
                    />
                  </div>
                ))
              ) : (
                <p className="">Nothing found</p>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="tw"></div>
    </main>
  );
}
