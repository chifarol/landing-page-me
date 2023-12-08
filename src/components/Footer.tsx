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
    <div className="tw-bg-[#F5F5F5] tw-p-[8.5rem_4rem] tw-flex tw-flx-wrap tw-itms-center tw-gap-[2rem] md:tw-p-[4.5rem_2rem] md:tw-flex-col">
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

            <div className="tw-mt-auto tw-py-[2rem]">
              <div className="tw-mb-[1rem]">
                Copyright © 2023 Next Tier Operations LTD - All Rights Reserved.{" "}
              </div>
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
  );
}

export default Footer;
