"use client";
import { PrimaryButton } from "@/components/input-groups/Button";
import Link from "next/link";

import axios from "axios";
import { getApiPath, useRequestProcessor } from "@/QueryFxns";
import { BarSpinner } from "@/components/Spinners";
import { useState } from "react";
import { careersType } from "@/components/types";
import { useRouter, usePathname } from "next/navigation";
import NotFound from "@/components/NotFound";
import type { Metadata } from "next";
import { RichTextDisplay } from "@/components/input-groups/RichText1";

export default function CareerDetails() {
  // const targetSlug = new URLSearchParams(window.location.search).get("slug");
  const router = usePathname();
  // const slug = router.replace("/careers/", "");
  const [careerObj, setCareersObj] = useState<careersType>();
  const { useQueryFxn, useMutationFxn } = useRequestProcessor();
  const fetchCareer = useQueryFxn(
    ["career"],
    () => {
      return axios
        .get(`${getApiPath()}/user/careers`)
        .then((res) => {
          const result = res.data.data as careersType[];
          setCareersObj(
            result.filter(
              (items) => items.slug == router?.replace("/careers/", "")
            )[0]
          );
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
      {fetchCareer.isLoading ? (
        <BarSpinner className="tw-my-[8rem] tw-h-[2rem]" />
      ) : careerObj ? (
        <div className="tw-w-full tw-pt-[6rem] tw-pb-[4rem] tw-bg-cover  md:tw-pb-[2rem] md:tw-pt-[4rem]">
          {/* header */}
          <div
            className="tw-p-[3rem] tw-h-[400px] tw-w-full tw-grid tw-place-items-center tw-bg-p1 tw-bgcover tw-bg-center tw-rounded-[20px] md:tw-rounded-[0] md:tw-p-[1.25rem] md:tw-h-[240px]"
            style={{ backgroundImage: `url('/page-bg.png')` }}
          >
            <div className="tw-text-center">
              <h4 className="tw-text-60 tw-text-white tw-font-bold md:tw-text-40">
                {careerObj?.title}
              </h4>
              <p className="tw-mt-[rem] tw-text-white">
                Job opening
                {/* San Francisco, CA | Part Time */}
              </p>
            </div>
          </div>

          {/* main content */}
          <div className="tw-w-full tw-b-white tw-py-[6rem] tw-rounded-[10px] tw-grid tw-grid tw-grid-cols-[2fr_1fr] tw-gap-[3rem]  md:tw-p-[2rem_1.25rem] md:tw-grid-cols-1">
            {careerObj && (
              <RichTextDisplay defaultValue={careerObj.description} />
            )}
            <div className="tw-bg-[#F6F6F6] tw-p-[2rem] tw-h-[fit-content] tw-max-w-[500px] tw-w-full tw-border tw-border-[rgba(0,0,0,0.1)] tw-rounded-[6px] md:tw-max-w-[unset]">
              <h6 className="tw-font-bold tw-text-30">Apply today</h6>
              <div className="tw-text-[#272727] tw-mt-[1rem] tw-flex tw-flex-col tw-gap-[.75rem]">
                Click on the button below to apply
              </div>

              <PrimaryButton
                label="Apply Now"
                onClickHandler={() => {
                  window.open(`${careerObj.applicationLink}`, "_blank");
                }}
                className="tw-ml-[auto] tw-w-[fit-content] tw-mt-[2rem]"
              />
            </div>
          </div>
        </div>
      ) : (
        <NotFound />
      )}

      <div className="tw"></div>
    </main>
  );
}
