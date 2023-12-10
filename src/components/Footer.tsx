import React from "react";
import logo from "../assets/images/logo.svg";
import facebookIcon from "../assets/images/facebook-icon.svg";
import instaIcon from "../assets/images/insta-icon.svg";
import twitterIcon from "../assets/images/twitter-icon.svg";
import youtubeIcon from "../assets/images/youtube-icon.svg";
import Image from "next/image";
import Link from "next/link";

import navSolutions1Img from "@/assets/images/nav-solutions1.png";
import navSolutions2Img from "@/assets/images/nav-solutions2.png";
import navSolutions3Img from "@/assets/images/nav-solutions3.png";
import navSolutions4Img from "@/assets/images/nav-solutions4.png";
import navCompany1Img from "@/assets/images/nav-company1.png";
import navCompany2Img from "@/assets/images/nav-company2.png";
import navSupport1Img from "@/assets/images/nav-support1.png";
import navSupport2Img from "@/assets/images/nav-support2.png";
// import { linkObjs } from "./Topbar";

type Props = {};

function Footer({}: Props) {
  const linkObjs = {
    solutions: [
      {
        image: navSolutions1Img,
        heading: "Event Card Design Software",
        text: "Unleash your creativity and craft event cards that resonate with your unique style and event theme",
        href: "/design-software",
      },
      {
        image: navSolutions2Img,
        heading: "Event Card Delivery",
        text: "Streamline your event card distribution with our Event Card Delivery service",
        href: "/event-card-delivery",
      },
      {
        image: navSolutions3Img,
        heading: "Event Cards Template",
        text: "Discover a world of inspiration with our curated collection of Event Card Templates",
        href: "/event-card-template",
      },
      {
        image: navSolutions4Img,
        heading: "Event Card Printing",
        text: "Bring your event card designs to life with our premium Event Card Printing service",
        href: "/event-card-printing",
      },
    ],
    company: [
      {
        image: navCompany1Img,
        heading: "About Us",
        text: "We're not just a platform; we're a canvas of imagination",
        href: "/about-us",
      },
      {
        image: navCompany2Img,
        heading: "Careers",
        text: "Become a part of our big family to inspire and get inspired by professional experts.",
        href: "/careers",
      },
    ],
    support: [
      {
        image: navSupport1Img,
        heading: "Contact Us",
        text: "We're here to listen, assist, and make your experience with Every Event Delivery",
        href: "/contact-us",
      },
      {
        image: navSupport2Img,
        heading: "Knowledge Base",
        text: "Streamline your event card distribution with our Event Card Delivery service",
        href: "/knowledge-base",
      },
      {
        image: navSupport2Img,
        heading: "FAQs",
        text: "Streamline your event card distribution with our Event Card Delivery service",
        href: "/faqs",
      },
    ],
  };
  return (
    <div className="tw-bg-[#F5F5F5] tw-p-[4rem] md:tw-p-[3.5rem_2rem]">
      <div className="tw-flex tw-flx-wrap tw-itms-center tw-gap-[2rem]  md:tw-flex-col">
        <div className="tw-max-w-[380px]">
          <div className="">
            <a href="/" className="tw-pr-[2rem] ">
              <Image src={logo} alt="" className="tw-h-[2rem] tw-w-[auto]" />
            </a>
            <p className="tw-mt-[1.5rem] tw-text-18">
              Design and Create Stunning Event Cards, Infusing Your Celebrations
              with Uniqueness and Elegance
            </p>
            {/* follow us */}
            <div className="tw-font-medium tw-mt-[2rem]">
              <h6 className="tw-text-20 tw-mb-[1rem]">Follow us on</h6>
              <div className="tw-flex tw-gap-[1rem]">
                <Link href="https://twitter.com/Everyeventhq" target="_blank">
                  <Image
                    src={twitterIcon}
                    alt=""
                    className="tw-h-[2.5rem] tw-w-[2.5rem]"
                  />
                </Link>
                <Link
                  href="https://www.youtube.com/@EveryeventHQ"
                  target="_blank"
                >
                  <Image
                    src={youtubeIcon}
                    alt=""
                    className="tw-h-[2.5rem] tw-w-[2.5rem]"
                  />{" "}
                </Link>
                <Link
                  href="https://web.facebook.com/everyevent.hq"
                  target="_blank"
                >
                  <Image
                    src={facebookIcon}
                    alt=""
                    className="tw-h-[2.5rem] tw-w-[2.5rem]"
                  />{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="tw-flex tw-flex-wrap tw-gap-[1.5rem]">
          {/* 2nd */}
          <div className="tw">
            <h5 className="tw-text-20 tw-font-bold tw-mb-[1rem]">Solutions</h5>
            <div className="tw-flex tw-flex-col tw-gap-[.75rem] tw-text-[#575757]">
              {linkObjs.solutions.map((linkItem, index) => (
                <Link href={linkItem.href} className="" key={index}>
                  {linkItem.heading}
                </Link>
              ))}
            </div>
          </div>
          {/* 3rd */}
          <div className="tw">
            <h5 className="tw-text-20 tw-font-bold tw-mb-[1rem]">Support</h5>
            <div className="tw-flex tw-flex-col tw-gap-[.75rem] tw-text-[#575757]">
              {linkObjs.support.map((linkItem, index) => (
                <Link href={linkItem.href} className="" key={index}>
                  {linkItem.heading}
                </Link>
              ))}
            </div>
          </div>
          {/* 4th */}
          <div className="tw">
            <h5 className="tw-text-20 tw-font-bold tw-mb-[1rem]">Company</h5>
            <div className="tw-flex tw-flex-col tw-gap-[.75rem] tw-text-[#575757]">
              {linkObjs.company.map((linkItem, index) => (
                <Link href={linkItem.href} className="" key={index}>
                  {linkItem.heading}
                </Link>
              ))}
            </div>
          </div>
          {/* 5th */}
          <div className="tw">
            <h5 className="tw-text-20 tw-font-bold tw-mb-[1rem]">
              Join Everyevent
            </h5>
            <div className="tw-flex tw-flex-col tw-gap-[.75rem] tw-text-[#575757]">
              <Link
                href="http://printer.everyeventdelivery.com/"
                target="_blank"
                className=""
              >
                Join as a Printing Partner
              </Link>
              <Link
                href="http://app.everyeventdelivery.com"
                target="_blank"
                className=""
              >
                Join as an Event Planner
              </Link>
              <Link
                href="http://app.everyeventdelivery.com"
                target="_blank"
                className=""
              >
                Join as an Event Owner
              </Link>
              <Link
                href="https://bit.ly/DeliveryAgents"
                target="_blank"
                className=""
              >
                Join as a Delivery Agent
              </Link>
            </div>
          </div>
          {/* 5th */}
          <div className="tw">
            <h5 className="tw-text-20 tw-font-bold tw-mb-[1rem]">Policies</h5>
            <div className="tw-flex tw-flex-col tw-gap-[.75rem] tw-text-[#575757]">
              <Link href="/terms-of-use" className="">
                Terms of use
              </Link>
              <Link href="/privacy-policy" className="">
                Privacy policy
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="tw-mt-[4rem] tw-w-full tw-flex tw-justify-between tw-items-center tw-gap-[2rem] tw-text-14">
        <div className="">
          Copyright © 2023 Next Tier Operations LTD - All Rights Reserved.{" "}
        </div>
        <a
          href="https://mobirevo.com/"
          target="_blank"
          className="tw-text-[#9D9D9D] tw-flex tw-justify-center tw-items-center tw-gap-[.25rem]"
        >
          <span>Powered by:</span> <MobirevoIcon /> <span>Mobirevo</span>
        </a>
      </div>
    </div>
  );
}

export default Footer;

const MobirevoIcon = () => {
  return (
    <svg
      width="11"
      height="10"
      viewBox="0 0 11 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.15684 6.21821C7.41168 5.2059 7.51748 4.35342 7.30512 4.45998L6.10445 5.50156C6.08436 5.51876 6.06186 5.53292 6.03766 5.54358C5.87932 5.61412 5.27374 5.81674 5.22421 4.93875C5.17093 3.92719 5.22421 2.80831 5.11765 2.48863C5.06437 2.32879 4.97132 2.28902 4.89252 2.28902C4.85458 2.28776 4.81693 2.2961 4.78308 2.31329C4.74923 2.33048 4.72028 2.35595 4.69892 2.38733L3.52301 4.99278C3.52301 4.99278 3.34816 5.3935 3.1478 5.52557C2.99021 5.63213 1.92237 5.84525 2.5107 4.56354C2.96193 3.60706 3.47818 2.68264 4.05581 1.79675C4.16237 1.63691 4.43102 1.42154 4.90753 1.37051C5.38405 1.31948 5.70673 1.69019 5.81328 1.90331C5.91984 2.11643 5.97463 4.1403 6.13296 4.24686C6.2913 4.35342 7.16329 3.49269 7.46495 3.34186C7.67732 3.2353 7.86343 3.20228 8.05028 3.28858C8.10966 3.31397 8.16384 3.3501 8.21012 3.39514C8.28811 3.50405 8.32579 3.6367 8.31668 3.77035C8.31668 4.03675 8.36996 6.1139 9.38227 5.90078C9.76529 5.81888 10.1428 5.71286 10.5124 5.58336C10.5398 5.3696 10.5531 5.15426 10.5522 4.93875C10.5504 3.69719 10.0817 2.50173 9.23916 1.58977C8.39667 0.67781 7.24201 0.116058 6.00449 0.0160737C4.76696 -0.083911 3.53709 0.285185 2.55912 1.05006C1.58115 1.81494 0.926616 2.91965 0.725496 4.14481C0.524376 5.36997 0.791386 6.62596 1.4735 7.66335C2.15561 8.70075 3.20293 9.44366 4.40748 9.74456C5.61202 10.0455 6.88567 9.88234 7.9755 9.28758C9.06534 8.69283 9.89162 7.70995 10.2903 6.53414C9.65167 6.72249 8.64311 6.87783 8.15684 6.21821ZM7.7306 7.54945C7.46495 7.86913 6.71904 8.29537 5.70447 8.29537C5.02016 8.30286 4.35033 8.09811 3.78716 7.70929C3.78716 7.70929 2.45742 6.9101 2.88365 6.48461C2.88365 6.48461 3.04349 6.32477 3.41645 6.59117C3.78941 6.85757 4.58785 7.60573 5.49361 7.65601C6.45264 7.70929 6.70853 7.44589 7.46495 7.22977C7.83716 7.12321 7.79739 7.46991 7.7306 7.54945Z"
        fill="url(#paint0_linear_4384_10106)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4384_10106"
          x1="0.660156"
          y1="4.94603"
          x2="10.5522"
          y2="4.94603"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#7816EA" />
          <stop offset="1" stop-color="#FA4B05" />
        </linearGradient>
      </defs>
    </svg>
  );
};
