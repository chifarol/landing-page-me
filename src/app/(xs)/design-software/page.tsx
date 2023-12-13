import Topbar from "@/components/Topbar";
import heroImage from "@/assets/images/design-software/hero-image.png";
import sec2aImg from "@/assets/images/design-software/sec2a.png";
import sec2bImg from "@/assets/images/design-software/sec2b.png";
import sec2cImg from "@/assets/images/design-software/sec2c.png";
import sec2dImg from "@/assets/images/design-software/sec2d.png";
import sec2eImg from "@/assets/images/design-software/sec2e.png";
import sec2fImg from "@/assets/images/design-software/sec2f.png";
import sec3Img from "@/assets/images/design-software/sec3.png";
import sec3Icon from "@/assets/images/design-software/sec3a.svg";
import Image from "next/image";
import { PrimaryButton } from "@/components/input-groups/Button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Card Design Software - Everyeventdelivery",
  description:
    "Discover Limitless Creativity: Every Event Card Design Editor Software. Craft one-of-a-kind event cards that match your celebrations. Whether you're new to design or a seasoned pro, our software makes it effortless to transform your ideas into reality.",
};

export default function DesignSoftware() {
  const cards = [
    {
      title: "Template",
      text: "Find the template that resonates with your vision and embark on your design journey.",
      image: sec2aImg,
    },
    {
      title: "Text",
      text: "Access more tools to enhance experience",
      image: sec2bImg,
    },
    {
      title: "Element",
      text: "Access more shapes",
      image: sec2cImg,
    },
    {
      title: "Upload",
      text: "Your design, your style – effortlessly uploaded, beautifully realized.",
      image: sec2dImg,
    },
    {
      title: "Tools",
      text: "Your command center for precision and creativity",
      image: sec2eImg,
    },
    {
      title: "Artboard",
      text: "Let your creativity flow on this blank canvas of endless possibilities.",
      image: sec2fImg,
    },
  ];
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
              Discover Limitless{" "}
              <span className="tw-text-60 md:tw-text-48 tw-text-p1">
                {" "}
                Creativity:{" "}
              </span>{" "}
              Every Event{" "}
              <span className="tw-text-60 md:tw-text-48 tw-text-p1">
                Card
              </span>{" "}
              Design Editor Software
            </p>
          </div>
          {/* 2nd */}
          <p className="tw-text-20 tw-text-[#596780] tw-max-w-[830px] tw-text-center md:tw-text-14">
            Craft one-of-a-kind event cards that match your celebrations.
            Whether you're new to design or a seasoned pro, our software makes
            it effortless to transform your ideas into reality.
          </p>
          {/* 3rd */}
          <PrimaryButton
            label="Start Designing"
            link="http://app.everyeventdelivery.com"
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
        <div className="tw-w-full tw-p-[8.3vw_7.5rem] md:tw-p-[3.5rem_1.25rem]">
          <div className="tw-flex tw-flex-col tw-items-center tw-gap-[4.5rem] md:tw-gap-[1.5rem]">
            {/* 1st */}
            <div className="tw-flex tw-flex-col tw-text-center">
              <p className="tw-text-20 tw-text-p1">HOW IT WORKS</p>
              <p className="tw-font-bold tw-text-40 md:tw-text-32 tw-mt-[.75rem]">
                From Idea to Masterpiece in Moments
              </p>
              <p className="tw-text-18 tw-text-[#596780] tw-max-w-[712px] tw-text-center tw-mt-[1.5rem] md:tw-text-14">
                Discover the simple steps that lead you from concept to a
                beautifully designed event card that captures your vision and
                essence.
              </p>
            </div>
            <div className="tw-w-full tw-grid tw-grid-cols-autoFit_300 tw-gap-[3rem]">
              {cards.map((item, index) => (
                <div
                  key={index}
                  className="tw-flex tw-flex-col tw-items-center tw-text-center"
                >
                  <Image
                    src={item.image}
                    alt=""
                    className="tw-ml-[-1.5rem]  tw-w-full tw-max-w-[300px] sm:tw-max-w-[unset] md:tw-w-[80%]"
                  />
                  <h6 className="tw-font-semiBold tw-mt-[1rem] tw-text-18">
                    {item.title}
                  </h6>
                  <p className="tw-text-[#667085] tw-mt-[.25rem]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* section 3 */}
        <div className="tw-w-full">
          <div className=" tw-flex tw-flex-col tw-items-center tw-gap-[4.5rem]  tw-py-[8.3vw] md:tw-py-[3.5rem] md:tw-gap-[2.5rem]">
            {/* 1st */}
            <div className="tw-flex tw-flex-col tw-text-center  tw-px-[7.5rem] md:tw-px-[1.25rem]">
              <p className="tw-text-20 tw-text-p1 tw-uppercase">
                WHY use Every Event Design Editor
              </p>
              <h4 className="tw-font-bold tw-text-40 md:tw-text-32 tw-mt-[.75rem]">
                Intuitive, Versatile, Expressive
              </h4>
              <p className="tw-text-16 tw-text-[#596780] tw-max-w-[712px] tw-text-center tw-mt-[1.5rem] md:tw-text-14">
                Our design software isn't just a tool; it's a catalyst for
                turning visions into stunning event cards. Experience the ease
                of creation and the thrill of personalization with every click.
              </p>
            </div>
            <div className="tw-w-full tw-grid tw-grid-cols-autoFit_360 tw-items-center tw-gap-[4rem] tw-justify-between tw-px-[7.5rem] md:tw-flex md:tw-flex-col-reverse md:tw-px-[0]">
              <div className="tw-flex tw-flex-col tw-gap-[1.5rem] tw-w-full md:tw-px-[1.25rem]">
                {/* 1st */}
                <div className="tw-flex tw-gap-[2rem] md:tw-gap-[1rem] tw-items-start">
                  <Image src={sec3Icon} alt="" className="tw-w-[50px]" />
                  <div className="tw">
                    <h4 className="tw-font-semiBold tw-text-24 md:tw-text-18">
                      Intuitive Interface
                    </h4>
                    <p className="tw-text-16 tw-text-[#596780] tw-mt-[.75rem] md:tw-text-16">
                      No design expertise? No problem. Our user-friendly
                      interface ensures that creating stunning event cards is a
                      breeze, even if you're new to design
                    </p>
                  </div>
                </div>
                {/* 2nd */}
                <div className="tw-flex tw-gap-[2rem] md:tw-gap-[1rem] tw-items-start">
                  <Image src={sec3Icon} alt="" className="tw-w-[50px]" />
                  <div className="tw">
                    <h4 className="tw-font-semiBold tw-text-24 md:tw-text-18">
                      Limitless Customization
                    </h4>
                    <p className="tw-text-16 tw-text-[#596780] tw-mt-[.75rem] md:tw-text-16">
                      Your event card should be an extension of your vision.
                      Customize every element – fonts, colors, images, and more
                      – until your design mirrors your imagination.
                    </p>
                  </div>
                </div>
                {/* 3rd */}
                <div className="tw-flex tw-gap-[2rem] md:tw-gap-[1rem] tw-items-start">
                  <Image src={sec3Icon} alt="" className="tw-w-[50px]" />
                  <div className="tw">
                    <h4 className="tw-font-semiBold tw-text-24 md:tw-text-18">
                      Real-Time Previews:
                    </h4>
                    <p className="tw-text-16 tw-text-[#596780] tw-mt-[.75rem] md:tw-text-16">
                      Our instant preview feature allows you to make adjustments
                      on the spot, ensuring your event card matches your
                      expectations.
                    </p>
                  </div>
                </div>
              </div>
              <Image src={sec3Img} alt="" className="tw-w-full" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
