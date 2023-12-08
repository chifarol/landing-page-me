"use client";
import Topbar from "@/components/Topbar";
import heroImage from "@/assets/images/about/hero-image.png";
import sec1acon from "@/assets/images/about/sec1a.png";
import sec1bcon from "@/assets/images/about/sec1b.png";
import sec1ccon from "@/assets/images/about/sec1c.png";
import Image from "next/image";
import { PrimaryButton } from "@/components/input-groups/Button";
import Link from "next/link";
import Accordion from "@/components/dropdowns/Accordion";

import axios from "axios";
import { getApiPath, useRequestProcessor } from "@/QueryFxns";
import { useState } from "react";
import { BarSpinner } from "@/components/Spinners";
import { accordionType } from "@/components/types";
import type { Metadata } from "next";

export default function AboutUs() {
  const { useQueryFxn, useMutationFxn } = useRequestProcessor();
  type fetchedData = {
    title: string;
    body: string;
  };
  const [accList, setAccList] = useState<accordionType[]>([]);
  const fetchFAQs = useQueryFxn(
    ["privacy"],
    () => {
      return axios
        .get(`${getApiPath()}/user/knowledge-base`)
        .then((res) => {
          const result = res.data.data as accordionType[];
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
    <main className="">
      {/* hero section */}
      <div
        className="tw-w-full tw-pt-[200px] tw-bg-cover tw-px-[4.5rem] md:tw-px-[1.25rem] md:tw-pt-[160px]"
        style={{ backgroundImage: `url('/hero-image-bg.svg')` }}
      >
        <h5 className="tw-font-bold tw-text-60 md:tw-text-48 tw-max-w-[600px] md:tw-text-center">
          Crafting
          <span className="tw-text-60 md:tw-text-48 tw-text-p1">
            {" "}
            Moments:{" "}
          </span>{" "}
          That Resonate{" "}
        </h5>
        <div className="tw-flex tw-gap-[3rem] tw-justify-between tw-mt-[1.5rem] md:tw-flex-col md:tw-gap-[2rem]">
          <div className=" tw-flex tw-flex-col tw-gap-[2.25rem] md:tw-gap-[1.5rem]">
            {/* 1st */}
            <p className="tw-text-16 tw-text-[#596780] tw-max-w-[358px] md:tw-text-14">
              We're not just a platform; we're a canvas of imagination, a hub of
              inspiration, and a conduit for crafting moments that linger in the
              heart forever.
            </p>
            {/* 2nd */}
            <PrimaryButton
              label="Contact Us"
              link="contact-us"
              classNames="tw-w-[fit-content] tw-text-18 md:tw-w-full"
              className="md:tw-w-full"
            />
          </div>
          <div className="tw-w-full tw-max-w-[600px]">
            <Image src={heroImage} alt="" className="tw-w-full" />
          </div>
        </div>
      </div>
      {/* main content */}
      <div className="tw-flex tw-flex-col tw-gp-[160px] md:text-center">
        {/* section 2 */}
        <div className="tw-w-full tw-p-[8.3vw_7.5rem] md:tw-p-[3.5rem_1.25rem]">
          <div className=" tw-flex tw-flex-col tw-items-center tw-gap-[9.5rem] md:tw-gap-[3.5rem]">
            {/* 1st */}
            <h4 className="tw-font-bold tw-text-40 md:tw-text-32 tw-mt-[.75rem]">
              Create and Make your dream.
            </h4>
            <div className="tw-w-full tw-flex w-grid w-grid-cols-2 tw-items-center tw-gap-[4rem] tw-justify-between md:tw-flex-col">
              <div className="tw-flex tw-flex-col tw-gap-[1.5rem]">
                {/* 1st */}
                <div className="">
                  <Image src={sec1acon} alt="" className="tw-w-full" />
                  <div className="tw">
                    <h4 className="tw-font-semiBold tw-text-24 tw-mt-[1rem] md:tw-text-18">
                      Our Mission
                    </h4>
                    <p className="tw-text-16 tw-text-[#596780] tw-mt-[.5rem] md:tw-text-16">
                      Our mission is to make creativity accessible. We're
                      dedicated to providing tools that blend innovation with
                      simplicity, allowing you to design event cards that mirror
                      your vision. We strive to be more than a platform; we want
                      to be your partner in creating cherished memories.
                    </p>
                  </div>
                </div>
                {/* 2nd */}
                <div className="tw-hidden md:tw-block">
                  <Image src={sec1bcon} alt="" className="tw-w-full" />
                  <div className="">
                    <h4 className="tw-font-semiBold tw-text-24 tw-mt-[1rem] md:tw-text-18">
                      Our Vision
                    </h4>
                    <p className="tw-text-16 tw-text-[#596780] tw-mt-[.5rem] md:tw-text-16">
                      We envision a world where event cards transcend their
                      physical form and become vessels of emotions, stories, and
                      connections. Our vision is to empower individuals and
                      businesses to create event cards that are more than ink on
                      paper – they're tokens of love, gratitude, and
                      celebration.
                    </p>
                  </div>
                </div>
                {/* 3rd */}
                <div className="">
                  <Image src={sec1ccon} alt="" className="tw-w-full" />
                  <div className="tw">
                    <h4 className="tw-font-semiBold tw-text-24 tw-mt-[1rem] md:tw-text-18">
                      Elevate Life's Celebrations:
                    </h4>
                    <p className="tw-text-16 tw-text-[#596780] tw-mt-[.5rem] md:tw-text-16">
                      Whether it's the elegance of a wedding invitation, the joy
                      of a birthday announcement, or the professionalism of a
                      corporate event, we're honored to be part of your
                      celebrations. From the design studio to the printing
                      press, we're dedicated to turning moments into cherished
                      memories
                    </p>
                  </div>
                </div>
              </div>
              <div className="tw">
                <div className="md:tw-hidden">
                  <Image src={sec1bcon} alt="" className="tw-w-full" />
                  <div className="tw">
                    <h4 className="tw-font-semiBold tw-text-24 tw-mt-[1rem] md:tw-text-18">
                      Our Vision
                    </h4>
                    <p className="tw-text-16 tw-text-[#596780] tw-mt-[.5rem] md:tw-text-16">
                      We envision a world where event cards transcend their
                      physical form and become vessels of emotions, stories, and
                      connections. Our vision is to empower individuals and
                      businesses to create event cards that are more than ink on
                      paper – they're tokens of love, gratitude, and
                      celebration.
                    </p>
                  </div>
                </div>
                <PrimaryButton
                  label="Become a print partner"
                  link="http://printer.everyeventdelivery.com/"
                  classNames="tw-w-[fit-content] tw-text-18 tw-mt-[3rem] md:tw-w-full"
                  className="md:tw-w-full"
                />
              </div>
              {/* <Image src={sec2Img} alt="" className="tw-w-full" /> */}
            </div>
          </div>
        </div>

        {/* section 3 */}
        <div className="tw-w-full tw-p-[8.3vw_7.5rem] md:tw-p-[3.5rem_1.25rem]">
          <div className=" tw-flex tw-flex-col tw-items-center tw-gap-[4.5rem] md:tw-gap-[1.5rem]">
            {/* 1st */}
            <div className="tw-flex tw-flex-col tw-text-center">
              <h4 className="tw-font-bold tw-text-40 md:tw-text-32">
                Frequently asked questions
              </h4>
              <p className="tw-text-16 tw-text-[#596780] tw-max-w-[712px] tw-text-center tw-mt-[1.5rem] md:tw-text-14">
                Everything you need to know about Every Event Delivery
              </p>
            </div>

            {fetchFAQs.isLoading ? (
              <BarSpinner className="tw-my-[8rem] tw-h-[2rem]" />
            ) : (
              <Accordion data={accList} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
