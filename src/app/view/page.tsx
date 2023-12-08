"use client";
import Image from "next/image";
import { getApiPath, useRequestProcessor } from "@/QueryFxns";
import type { Metadata } from "next";
import { useSearchParams } from "next/navigation";
import ReactSVG from "react-inlinesvg";
import "../globals.scss";

export default function ViewMedia() {
  const { useQueryFxn, useMutationFxn } = useRequestProcessor();
  const searchParams = useSearchParams();
  const svgUrl = searchParams?.get("url");
  const imageUrl = searchParams?.get("image");
  return (
    <main className="tw-w-full tw-min-h-[100vh] tw-bg-black tw-grid tw-place-items-center tw-p-[4rem] md:tw-p-[2rem]">
      {imageUrl || svgUrl ? (
        <div className="tw-w-full">
          <a
            href={svgUrl ? svgUrl : imageUrl ? imageUrl : ""}
            download=""
            className="tw-font-inter tw-font-medium tw-text-14 tw-bg-white tw-text-n1 tw-p-[.5rem] tw-rounded-[6px] tw-mx-auto  tw-mb-[1.5rem] tw-w-[fit-content] pointer"
          >
            Download Image
          </a>
          {svgUrl ? (
            <ReactSVG
              src={svgUrl ?? ""}
              className="tw-w-full tw-h-full tw-mx-auto thumbnail"
            />
          ) : imageUrl ? (
            <img
              src={imageUrl ?? ""}
              alt="image"
              className="tw-w-full tw-mx-auto thumbnail"
            />
          ) : (
            <p className="tw-w-[50%] tw-h-[50%] tw-bg-white/40 tw-text-white tw-grid tw-place-items-center">
              Image Not Found
            </p>
          )}
        </div>
      ) : (
        <p className="tw-w-[50%] tw-h-[50%] tw-bg-white/40 tw-text-white tw-grid tw-place-items-center">
          Not Found
        </p>
      )}
    </main>
  );
}
