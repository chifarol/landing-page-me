"use client";
import Topbar from "@/components/Topbar";
import Image from "next/image";
import { PrimaryButton } from "@/components/input-groups/Button";
import Link from "next/link";
import axios from "axios";
import { getApiPath, useRequestProcessor } from "@/QueryFxns";
import { useState } from "react";
import { BarSpinner } from "@/components/Spinners";
import { RichTextDisplay } from "@/components/input-groups/RichText1";

export default function PrivacyPolicy() {
  const { useQueryFxn, useMutationFxn } = useRequestProcessor();
  type fetchedData = {
    title: string;
    body: string;
  };
  const [fetchedData, setFetchedData] = useState<fetchedData>({
    title: "",
    body: "",
  });
  const fetchPrivacy = useQueryFxn(
    ["privacy"],
    () => {
      return axios
        .get(`${getApiPath()}/user/privacy-policy`)
        .then((res) => {
          const result = res.data.data as fetchedData;
          console.log("privacy-policy result", res.data);
          if (result) {
            setFetchedData(result);
          }
          return res.data;
        })
        .catch((e) => {
          console.log("fetchPrivacy error", e);
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
      {fetchPrivacy.isLoading ? (
        <BarSpinner className="tw-my-[8rem]" />
      ) : (
        <>
          {/* hero section */}
          <div className="tw-w-full tw-pt-[6rem] tw-pb-[4rem] tw-bg-cover  md:tw-pb-[2rem] md:tw-pt-[4rem]">
            {/* header */}
            <div
              className="tw-p-[3rem] tw-h-[400px] tw-w-full tw-grid tw-place-items-center tw-bg-p1  tw-mb-[1.5rem] tw-bgcover tw-bg-center tw-rounded-[20px] md:tw-rounded-[0] md:tw-p-[1.25rem] md:tw-h-[240px]"
              style={{ backgroundImage: `url('/page-bg.png')` }}
            >
              <h4 className="tw-text-48 tw-text-white tw-font-bold md:tw-text-32 md:tw-text-center">
                {fetchedData.title}
              </h4>
            </div>

            {/* main content */}
            {<RichTextDisplay defaultValue={fetchedData.body} />}
          </div>

          <div className="tw"></div>
        </>
      )}
    </main>
  );
}
