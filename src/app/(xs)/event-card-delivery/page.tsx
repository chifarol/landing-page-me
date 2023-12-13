import Topbar from "@/components/Topbar";
import sec2Img from "@/assets/images/card-delivery/sec2.png";
import sec3Icon from "@/assets/images/design-software/sec3a.svg";
import Image from "next/image";
import { PrimaryButton } from "@/components/input-groups/Button";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Card Delivery - Everyeventdelivery",
  description:
    "Event Card Delivery: Where Dreams Find Their Way. Beyond crafting exquisite event cards, we ensure that every design you create reaches its intended recipients, no matter where they are. Seamlessly sharing your designs and delivering event materials, we empower you to make your celebrations truly unforgettable.",
};

export default function CardDelivery() {
  return (
    <main className="">
      {/* hero section */}
      <div
        className="tw-w-full tw-pt-[200px]  tw-bg-cover tw-px-[7.5rem] md:tw-px-[1.25rem] md:tw-pt-[160px]"
        style={{ backgroundImage: `url('/hero-image-bg.svg')` }}
      >
        <div className=" tw-flex tw-flex-col tw-items-center tw-gap-[2.25rem] md:tw-gap-[1.5rem]">
          {/* 1st */}
          <div className="tw-font-bold tw-flex tw-flex-col tw-text-center">
            <p className="tw-text-60 md:tw-text-48 tw-max-w-[1033px]">
              Event Card{" "}
              <span className="tw-text-60 md:tw-text-48 tw-text-p1">
                {" "}
                Delivery:{" "}
              </span>{" "}
              Where{" "}
              <span className="tw-text-60 md:tw-text-48 tw-text-p1">
                Dreams
              </span>{" "}
              Find Their Way
            </p>
          </div>
          {/* 2nd */}
          <p className="tw-text-20 tw-text-[#596780] tw-max-w-[830px] tw-text-center md:tw-text-14">
            Beyond crafting exquisite event cards, we ensure that every design
            you create reaches its intended recipients, no matter where they
            are. Seamlessly sharing your designs and delivering event materials,
            we empower you to make your celebrations truly unforgettable.
          </p>
          {/* 3rd */}
          <PrimaryButton
            label="Get started"
            link="http://app.everyeventdelivery.com"
            classNames="tw-w-[fit-content] tw-text-18 md:tw-w-full"
            className="md:tw-w-full"
          />
        </div>
        <div className="tw-py-[4rem] tw-w-full">
          {/* <Image src={heroImage} alt="" className="tw-w-full" /> */}
        </div>
      </div>
      {/* main content */}
      <div className="tw-flex tw-flex-col tw-gp-[160px] md:text-center">
        {/* section 2 */}
        <div className="tw-w-full tw-p-[8.3vw_7.5rem] md:tw-p-[3.5rem_1.25rem]">
          <div className=" tw-flex tw-flex-col tw-items-center tw-gap-[4.5rem] md:tw-gap-[1.5rem]">
            {/* 1st */}
            <div className="tw-flex tw-flex-col tw-text-center">
              <p className="tw-text-20 tw-text-p1">Effortless Sharing</p>
              <h4 className="tw-font-bold tw-text-40 md:tw-text-32 tw-mt-[.75rem]">
                Seamlessly Extend Invitations
              </h4>
              <p className="tw-text-16 tw-text-[#596780] tw-max-w-[712px] tw-text-center tw-mt-[1.5rem] md:tw-text-14">
                With Every Event Delivery's effortless sharing feature, the art
                of inviting takes on a new dimension. In just a few clicks,
                transform your meticulously crafted event card designs into
                invitations that transcend time and space.
              </p>
            </div>
            <div className="tw-w-full tw-flex tw-grid tw-grid-cols-autoFit_360 tw-items-center tw-gap-[4rem] tw-justify-between md:tw-flex md:tw-flex-col-reverse md:tw-mt-[2rem] ">
              <div className="tw-flex tw-flex-col tw-gap-[1.5rem] tw-w-full">
                {/* 1st */}
                <div className="tw-flex tw-gap-[2rem] md:tw-gap-[1rem] tw-items-start">
                  <Image src={sec3Icon} alt="" className="tw-w-[50px]" />
                  <div className="tw">
                    <h4 className="tw-font-semiBold tw-text-24 md:tw-text-18">
                      Streamlined Connection
                    </h4>
                    <p className="tw-text-16 tw-text-[#596780] tw-mt-[.75rem] md:tw-text-16">
                      No more chasing RSVPs or waiting for snail mail. With a
                      swift click, your event card designs become invitations
                      that instantly reach your uploaded contacts. The digital
                      realm becomes your stage for extending personalized,
                      stylish invitations that echo the essence of your
                      celebration
                    </p>
                  </div>
                </div>
                {/* 2nd */}
                <div className="tw-flex tw-gap-[2rem] md:tw-gap-[1rem] tw-items-start">
                  <Image src={sec3Icon} alt="" className="tw-w-[50px]" />
                  <div className="tw">
                    <h4 className="tw-font-semiBold tw-text-24 md:tw-text-18">
                      Crafting Personalized Invitations
                    </h4>
                    <p className="tw-text-16 tw-text-[#596780] tw-mt-[.75rem] md:tw-text-16">
                      Customization doesn't stop at design. Tailor your
                      invitations to match the theme, mood, and importance of
                      your event. From elegant weddings to lively birthdays, our
                      platform ensures your invitations reflect the event's
                      uniqueness.
                    </p>
                  </div>
                </div>
                {/* 3rd */}
                <div className="tw-flex tw-gap-[2rem] md:tw-gap-[1rem] tw-items-start">
                  <Image src={sec3Icon} alt="" className="tw-w-[50px]" />
                  <div className="tw">
                    <h4 className="tw-font-semiBold tw-text-24 md:tw-text-18">
                      Effortlessness Redefined
                    </h4>
                    <p className="tw-text-16 tw-text-[#596780] tw-mt-[.75rem] md:tw-text-16">
                      Our seamless sharing feature redefines what it means to
                      extend an invitation. By effortlessly reaching your
                      guests' inboxes, you're not just sending an event card –
                      you're sparking anticipation, excitement, and a connection
                      that bridges the digital divide.
                    </p>
                  </div>
                </div>
              </div>
              <Image src={sec2Img} alt="" className="tw-w-full" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
