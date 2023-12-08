import Topbar from "@/components/Topbar";
import heroImage from "@/assets/images/card-templates/hero-image.png";
import sec2Img from "@/assets/images/card-templates/sec2.png";
import sec2aImg from "@/assets/images/design-software/sec2a.svg";
import sec2bImg from "@/assets/images/design-software/sec2b.svg";
import sec2cImg from "@/assets/images/design-software/sec2c.svg";
import sec2dImg from "@/assets/images/design-software/sec2d.svg";
import sec2eImg from "@/assets/images/design-software/sec2e.svg";
import sec2fImg from "@/assets/images/design-software/sec2f.svg";
import sec3Img from "@/assets/images/design-software/sec3.png";
import sec3aIcon from "@/assets/images/design-software/sec3a.svg";
import sec3bIcon from "@/assets/images/design-software/sec3b.svg";
import Image from "next/image";
import { PrimaryButton } from "@/components/input-groups/Button";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Card Delivery | Every Event Delivery",
  description:
    "Take your Nigerian physical events to the next level with our efficient event planning software. Simplify logistics, enhance attendee engagement, and achieve event success with ease.",
};

export default function EventCardTemplates() {
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
                Templates{" "}
              </span>{" "}
              Where{" "}
              <span className="tw-text-60 md:tw-text-48 tw-text-p1">
                Creativity
              </span>{" "}
              Takes Shape
            </p>
          </div>
          {/* 2nd */}
          <p className="tw-text-20 tw-text-[#596780] tw-max-w-[830px] tw-text-center md:tw-text-14">
            Welcome to the treasure trove of event card templates – where your
            imagination meets expertly crafted designs. Our Event Card Templates
            section is designed to ignite your creativity and simplify your
            journey towards creating captivating event cards that resonate with
            your unique style.
          </p>
          {/* 3rd */}
          <PrimaryButton
            label="Explore Templates"
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
        <div className="tw-w-full tw-p-[14rem_7.5rem] md:tw-p-[7.5rem_1.25rem]">
          {/* 1st */}
          <div className="tw-w-full tw-flex w-grid w-grid-cols-2 tw-items-center tw-gap-[4rem] tw-justify-between md:tw-flex-wrap">
            <div className="tw-flex tw-flex-col tw-gap-[1.5rem] tw-max-w-[497px] md:tw-max-w-[unset]">
              {/* 1st */}
              <div className="tw">
                <h4 className="tw-font-semiBold tw-text-20 md:tw-text-18">
                  Diverse Collection
                </h4>
                <p className="tw-text-16 tw-text-[#596780] tw-mt-[.75rem] md:tw-text-14">
                  Explore a diverse collection of event card templates
                  meticulously curated for a wide range of occasions. From the
                  timeless elegance of weddings to the vibrant exuberance of
                  birthdays, each template is designed to encapsulate the
                  essence of the event it represents.
                </p>
              </div>
              {/* 2nd */}
              <div className="tw">
                <h4 className="tw-font-semiBold tw-text-20 md:tw-text-18">
                  Themes and Styles
                </h4>
                <p className="tw-text-16 tw-text-[#596780] tw-mt-[.75rem] md:tw-text-14">
                  Delve into an array of themes and styles that cater to various
                  tastes. Whether you're envisioning a rustic wedding, a
                  minimalist corporate event, or a whimsical baby shower, our
                  templates offer a starting point that aligns with your vision.
                </p>
              </div>
              {/* 3rd */}
              <div className="tw">
                <h4 className="tw-font-semiBold tw-text-20 md:tw-text-18">
                  Elevate Every Occasion
                </h4>
                <p className="tw-text-16 tw-text-[#596780] tw-mt-[.75rem] md:tw-text-14">
                  Whether it's a grand celebration or an intimate gathering, our
                  Event Card Templates are here to elevate your occasions. Craft
                  event cards that set the tone, capture the mood, and create
                  anticipation among your guests.
                </p>
              </div>
              {/* 4th */}
              <div className="tw">
                <h4 className="tw-font-semiBold tw-text-20 md:tw-text-18">
                  Customizable to Perfection
                </h4>
                <p className="tw-text-16 tw-text-[#596780] tw-mt-[.75rem] md:tw-text-14">
                  While our templates are expertly designed, they are also fully
                  customizable to match your specific preferences. Change
                  colors, fonts, images, and layout until the template reflects
                  your unique style. Our design editor empowers you to create a
                  template that feels tailor-made.
                </p>
              </div>
            </div>

            <div className="tw-w-full tw-flex tw-flex-col">
              <p className="tw-text-20 tw-text-p1">Every Event TEMPLATE</p>
              <h4 className="tw-font-bold tw-text-40 md:tw-text-32 tw-mt-[.75rem]">
                Where Imagination Meets Design
              </h4>
              <Image src={sec2Img} alt="" className="tw-w-full tw-mt-[4rem]" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
