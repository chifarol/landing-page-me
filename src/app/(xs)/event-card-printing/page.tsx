import heroImage from "@/assets/images/printing/hero-image.png";
import sec2Img from "@/assets/images/printing/sec2.png";
import sec3Img from "@/assets/images/printing/sec3.png";
import sec4Img from "@/assets/images/printing/sec4.png";
import tickCircle from "@/assets/images/Icons/tick-circle.svg";
import Image from "next/image";
import { PrimaryButton } from "@/components/input-groups/Button";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Card Printing - Everyeventdelivery",
  description:
    "Elevate Efficiency Every Event Print Partner Software. Now, we're thrilled to invite you to a platform that streamlines your operations, enhances collaboration, and ensures seamless communication with clients seeking exceptional event card printing.",
};

export default function EventCardPrinting() {
  return (
    <main className="">
      {/* hero section */}
      <div
        className="tw-w-full tw-pt-[200px] tw-px-[7.5rem] tw-bg-cover md:tw-px-[1.25rem] md:tw-pt-[160px]"
        style={{ backgroundImage: `url('/hero-image-bg.svg')` }}
      >
        <div className=" tw-flex tw-flex-col tw-items-center tw-gap-[2.25rem] md:tw-gap-[1.5rem]">
          {/* 1st */}
          <div className="tw-font-bold tw-flex tw-flex-col tw-text-center">
            <p className="tw-text-60 md:tw-text-48 tw-max-w-[1033px]">
              Elevate{" "}
              <span className="tw-text-60 md:tw-text-48 tw-text-p1">
                {" "}
                Efficiency{" "}
              </span>{" "}
              Every Event Print{" "}
              <span className="tw-text-60 md:tw-text-48 tw-text-p1">
                Partner
              </span>{" "}
              Software
            </p>
          </div>
          {/* 2nd */}
          <p className="tw-text-20 tw-text-[#596780] tw-max-w-[830px] tw-text-center md:tw-text-14">
            Now, we're thrilled to invite you to a platform that streamlines
            your operations, enhances collaboration, and ensures seamless
            communication with clients seeking exceptional event card printing.
          </p>
          {/* 3rd */}
          <PrimaryButton
            label="Become a print partner"
            link="http://printer.everyeventdelivery.com/"
            classNames="tw-w-[fit-content] tw-text-18 md:tw-w-full"
            className="md:tw-w-full"
          />
        </div>
        <div className="tw-mt-[4rem] tw-w-full">
          <Image src={heroImage} alt="" className="tw-w-full" />
        </div>
      </div>
      {/* main content */}
      <div className="tw-flex tw-flex-col tw-gp-[160px] md:text-center">
        {/* section 2 */}
        <div className="tw-w-full tw-grid tw-grid-cols-2 tw-items-center tw-gap-[4rem] tw-justify-between tw-py-[8.3vw] md:tw-py-[3.5rem] md:tw-grid-cols-1">
          <div className="tw-flex tw-flex-col tw-gap-[1.5rem] tw-max-[583px] tw-px-[7.5rem] md:tw-px-[1.25rem]">
            <p className="tw-text-18 tw-text-p1 tw-font-medium md:tw-text-center">
              Print Order
            </p>
            <h3 className="tw-font-bold tw-text-40 md:tw-text-32 md:tw-text-center">
              Effortless Print Order Management
            </h3>
            <p className="tw-text-[#596780]">
              {`Our platform offers an intuitive interface designed specifically for printing partners, enabling you to manage orders, track progress, and deliver excellence with ease.`}
            </p>
            <div className="tw-flex tw-flex-col  tw-gap-[1rem] md:tw-flex-row md:tw-flex-wrap">
              <div className="tw-flex tw-items-center tw-gap-[1rem]">
                <Image src={tickCircle} alt="" className="tw-w-[24px]" />
                <p className="tw-text-[#596780]">Incoming Order</p>
              </div>
              <div className="tw-flex tw-items-center tw-gap-[1rem]">
                <Image src={tickCircle} alt="" className="tw-w-[24px]" />
                <p className="tw-text-[#596780]">Active Order</p>
              </div>
              <div className="tw-flex tw-items-center tw-gap-[1rem]">
                <Image src={tickCircle} alt="" className="tw-w-[24px]" />
                <p className="tw-text-[#596780]">Declined Order</p>
              </div>
            </div>
          </div>
          <Image src={sec2Img} alt="" className="tw-w-full" />
        </div>
        {/* section 3 */}
        <div className="tw-w-full tw-grid tw-grid-cols-2 tw-items-center tw-gap-[4rem] tw-justify-between tw-py-[8.3vw] md:tw-py-[3.5rem] md:tw-flex md:tw-flex-col-reverse">
          <Image src={sec3Img} alt="" className="tw-w-full" />
          <div className="tw-flex tw-flex-col tw-gap-[1.5rem] tw-max-[583px] tw-px-[7.5rem] md:tw-px-[1.25rem]">
            <p className="tw-text-18 tw-text-p1 tw-font-medium md:tw-text-center">
              INCREASE PRODUCTIVITY
            </p>
            <h3 className="tw-font-bold tw-text-40 md:tw-text-32 md:tw-text-center">
              Showcase Your Printing Catalogue
            </h3>
            <p className="tw-text-[#596780]">
              {`Welcome to the heart of your Printing Partner Platform journey – the space where your printing agency's expertise takes center stage. Here, you have the unique opportunity to exhibit your range of printing services and options, creating an immersive experience for clients seeking exceptional event card printing`}
            </p>
            <div className="tw-flex tw-flex-col tw-gap-[1rem] md:tw-text-left">
              <div className="tw-flex tw-items-center tw-gap-[1rem]">
                <Image src={tickCircle} alt="" className="tw-w-[24px]" />
                <p className="tw-text-[#596780]">
                  Your printing catalogue equips clients with the knowledge they
                  need to make choices that reflect their individual style.{" "}
                </p>
              </div>
              <div className="tw-flex tw-items-center tw-gap-[1rem]">
                <Image src={tickCircle} alt="" className="tw-w-[24px]" />
                <p className="tw-text-[#596780]">
                  With your printing catalogue, clients embark on a journey of
                  customization and creativity.
                </p>
              </div>
              <div className="tw-flex tw-items-center tw-gap-[1rem]">
                <Image src={tickCircle} alt="" className="tw-w-[24px]" />
                <p className="tw-text-[#596780]">
                  Each option is accompanied by visual representations, allowing
                  clients to visualize how their choices will manifest in the
                  final product.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* section 4 */}
        <div className="tw-w-full tw-grid tw-grid-cols-2 tw-items-center tw-gap-[4rem] tw-justify-between tw-p-[8.3vw_7.5rem] md:tw-p-[3.5rem_1.25rem] md:tw-grid-cols-1">
          <div className="tw-flex tw-flex-col tw-gap-[1.5rem] tw-max-[583px] md:tw-text-center">
            <h3 className="tw-font-bold tw-text-40 md:tw-text-32">
              Payment and Earnings Dashboard
            </h3>
            <p className="tw-text-[#596780]">
              {`We have a dedicated Payment and Earnings Dashboard, where managing your financial transactions and tracking your earnings has never been more convenient. This comprehensive section empowers you, our esteemed printing partner, to stay on top of your financial interactions seamlessly.`}
            </p>
            <div className="tw-flex tw-flex-col tw-gap-[1rem] md:tw-text-left">
              <div className="tw-flex tw-items-center tw-gap-[1rem]">
                <Image src={tickCircle} alt="" className="tw-w-[24px]" />
                <p className="tw-text-[#596780]">
                  Track all transactions from orders to payments. Effortlessly
                  monitor fund flow, ensuring transparency in your operations.
                </p>
              </div>
              <div className="tw-flex tw-items-center tw-gap-[1rem]">
                <Image src={tickCircle} alt="" className="tw-w-[24px]" />
                <p className="tw-text-[#596780]">
                  Simplify your finances. Add your bank details for secure,
                  seamless withdrawals. Your data's safety is our priority
                </p>
              </div>
            </div>
          </div>
          <Image src={sec4Img} alt="" className="tw-w-full" />
        </div>
      </div>
    </main>
  );
}
