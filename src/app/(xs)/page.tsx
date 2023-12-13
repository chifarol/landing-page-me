import Topbar from "@/components/Topbar";
import heroImage from "@/assets/images/hero-image-home.png";
import peopleImg from "@/assets/images/sec1-people.png";
import sec2Img from "@/assets/images/sec2.png";
import sec3aImg from "@/assets/images/sec3a.png";
import sec3bImg from "@/assets/images/sec3b.png";
import sec3cImg from "@/assets/images/sec3c.png";
import sec4BgImg from "@/assets/images/sec4-bg.png";
import sec5user1Img from "@/assets/images/sec5-user1.png";
import sec5user2Img from "@/assets/images/sec5-user2.png";
import sec5user3Img from "@/assets/images/sec5-user3.png";
import quoteIcon from "@/assets/images/quote-icon.svg";
import playCircleIcon from "@/assets/images/Icons/play-circle-p1.svg";
import Image from "next/image";
import { PrimaryButton } from "@/components/input-groups/Button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Every Event Delivery: Event Planning Made Easy",
  description:
    "Take your Nigerian physical events to the next level with our efficient event planning software. Simplify logistics, enhance attendee engagement.",
};

export default function Home() {
  return (
    <main className="">
      <div className="tw-w-full">
        {/* hero section */}
        <div
          className="tw-w-full tw-grid tw-grid-cols-2 tw-gap-[3rem] tw-bg-cover md:tw-grid-cols-1"
          style={{ backgroundImage: `url('/hero-image-bg.svg')` }}
        >
          <div className=" tw-flex tw-flex-col tw-pt-[180px] tw-px-[4rem] tw-gap-[2.25rem] md:tw-items-center md:tw-px-[1.25rem]">
            {/* 1st */}
            <div className="tw-font-bold tw-flex tw-flex-col md:tw-items-center">
              <p className="tw-text-70 md:tw-text-48">Design.</p>
              <p className="tw-text-p1 tw tw-text-70 md:tw-text-48">
                Customize.
              </p>
              <p className="tw-text-70 md:tw-text-48">Print.</p>
              <p className="tw-text-p1 tw tw-text-70 md:tw-text-48">Deliver.</p>
              <p className="tw tw-text-70 md:tw-text-48 md:tw-text-center">
                All in One Place.
              </p>
            </div>
            {/* 2nd */}
            <p className="tw-text-20 tw-text-[#596780] md:tw-text-center">
              Design and Create Stunning Event Cards, Infusing Your Celebrations
              with Uniqueness and Elegance
            </p>
            {/* 3rd */}
            <div className="tw-flex tw-items-center tw-gap-[1rem] md:tw-flex-col">
              <Image
                src={peopleImg}
                alt="hero image"
                className="tw-h-[53px] tw-w-[auto]"
              />
              <p className="tw-text-18 tw-text-[#596780] md:tw-text-center">
                Join{" "}
                <span className="tw-text-p1 tw-font-bold">
                  {" "}
                  4600+ Event Organizer’s
                </span>{" "}
                turning special moments into tangible memories
              </p>
            </div>

            <PrimaryButton
              label="Plan my Event"
              link="http://app.everyeventdelivery.com"
              classNames="tw-w-[fit-content] tw-text-18 md:tw-w-full"
              className="md:tw-w-full"
            />
          </div>
          <Image
            src={heroImage}
            alt="hero image"
            className="tw--[788px] tw-w-full"
          />
        </div>
        {/* main content */}
        <div className="tw-flex tw-flex-col tw-gp-[160px]">
          {/* section 2 */}
          <div className="tw-w-full tw-grid tw-grid-cols-2 tw-items-center tw-gap-[4rem] tw-justify-between tw-p-[8.3vw_4rem] md:tw-flex md:tw-flex-col-reverse md:tw-p-[3rem_1.25rem]">
            <Image src={sec2Img} alt="" className="tw-w-full" />
            <div className="tw-flex tw-flex-col tw-gap-[1.5rem] tw-max-[583px] md:tw-text-center md:tw-items-center">
              <p className="tw-text-18 tw-text-p1 tw-font-medium">ABOUT US</p>
              <h3 className="tw-font-semiBold tw-text-48 md:tw-text-center">
                Every Event Delivery
              </h3>
              <p className="tw-text-[#73788C]">
                {`Turning your special moments into tangible memories. With a
                seamless blend of creativity and convenience, we've created a
                platform where you can effortlessly design event cards that
                reflect your unique style and personality. From weddings to
                birthdays and everything in between, we're here to make your
                celebrations truly unforgettable`}
              </p>
              <PrimaryButton
                link="/about-us"
                label="Learn more"
                classNames="tw-text-18 tw-font-bold tw-w-[fit-content]"
              />
            </div>
          </div>
          {/* section 3 */}
          <div className="tw-w-full tw-p-[8.3vw_4rem] md:tw-p-[3rem_1.25rem]">
            <div className="tw-flex tw-items-center tw-gap-[2rem] tw-flex-wrap">
              <div className="tw-max-w-[22rem] md:tw-max-w-[100%] md:tw-text-center">
                <p className="tw-text-20 tw-text-p1 tw-font-semiBold">
                  WHY USE EVERY EVENT DELIVERY
                </p>
                <h3 className="tw-font-bold tw-text-48 tw-mt-[12px] md:tw-text-center md:tw-max-w-[80%] md:tw-mx-[auto]">
                  Easy.<span className="tw-text-48 tw-text-p1"> Simple</span>.
                  Affordable
                </h3>
              </div>

              <p className="tw-text-[#596780] tw-max-w-[563px] md:tw-text-center">
                Simplicity and creativity converge in our platform, making the
                design process easy, enjoyable, and accessible. Our tools cater
                to all, ensuring your event card creation journey is a
                delightful and cost-effective experience. Experience the joy of
                crafting without barriers – it's that simple.
              </p>
            </div>

            <div className="tw-grid tw-grid-cols-autoFit_250 tw-gap-[3rem] tw-mt-[2.25rem]">
              <div className="tw-w-full tw-max-w-[384px] md:tw-max-w-[unset]">
                <div className="tw-w-full tw-mb-[1.5rem]">
                  <Image
                    src={sec3aImg}
                    alt=""
                    className="tw-w-full tw-object-cover"
                  />
                </div>

                <h6 className="tw-text-24 tw-font-semiBold">
                  Event Card Template
                </h6>
                <p className="tw-mt-[.75rem] tw-text-[#596780]">
                  Discover a world of inspiration with our curated collection of
                  Event Card Templates. Whether you're planning a wedding,
                  birthday, corporate event, or any special occasion, our
                  diverse range of templates has you covered.
                </p>
              </div>
              <div className="tw-w-full tw-max-w-[384px] md:tw-max-w-[unset]">
                <div className="tw-w-full tw-mb-[1.5rem]">
                  <Image
                    src={sec3bImg}
                    alt=""
                    className="tw-w-full tw-h-[auto] tw-object-cover"
                  />
                </div>

                <h6 className="tw-text-24 tw-font-semiBold">
                  Event Card Design
                </h6>
                <p className="tw-mt-[.75rem] tw-text-[#596780]">
                  Welcome to our state-of-the-art Event Card Design Software.
                  With our user-friendly and intuitive platform, you can unleash
                  your creativity and craft event cards that resonate with your
                  unique style and event theme.
                </p>
              </div>
              <div className="tw-w-full tw-max-w-[384px] md:tw-max-w-[unset]">
                <div className="tw-w-full tw-mb-[1.5rem]">
                  <Image
                    src={sec3cImg}
                    alt=""
                    className="tw-w-full tw-object-cover"
                  />
                </div>

                <h6 className="tw-text-24 tw-font-semiBold">
                  Event Card Printing
                </h6>
                <p className="tw-mt-[.75rem] tw-text-[#596780]">
                  Bring your event card designs to life with our premium Event
                  Card Printing service. Our partnership with registered
                  printing agencies ensures that your designs are printed with
                  the utmost care, resulting in high-quality event cards that
                  leave a lasting impression.
                </p>
              </div>
            </div>
          </div>
          {/* section 4 */}
          <div className="tw-w-full tw-px-[2.125rem] md:tw-p-[3rem_0]">
            <div className="tw-w-full tw-grid tw-grid-cols-2 tw-gap-[4rem] tw-items-center tw-bg-[#F5F5F5] md:tw-grid-cols-1">
              <div className="tw-flex tw-flex-col tw-gap-[1.5rem] tw-max-[583px] tw-py-[8.3vw] tw-pl-[8.3vw] md:tw-py-[2.5rem] md:tw-px-[1.25rem] md:tw-items-center">
                <p className="tw-text-18 tw-text-p1 tw-font-medium">
                  PRINTING PARTNER
                </p>
                <h3 className="tw-font-semiBold tw-text-48 md:tw-text-center">
                  Join Our Network of Printing Excellence
                </h3>
                <p className="tw-text-[#73788C] md:tw-text-center">
                  {`Partner with us to expand your reach and connect with clients seeking exceptional printing services. Become a part of our platform and offer your expertise to those who value quality and craftsmanship.`}
                </p>
                <PrimaryButton
                  link="http://printer.everyeventdelivery.com"
                  label="Become a print partner"
                  classNames="tw-text-18 tw-font-bold tw-w-[fit-content] md:tw-w-full"
                  className="md:tw-w-full"
                />
              </div>

              <Image
                src={sec4BgImg}
                alt="hero image"
                className="tw--[788px] tw-w-full tw-my-[auto]"
              />
            </div>
          </div>
          {/* section 5 -testimonial */}
          <div className="tw-w-full tw-p-[8.3vw_4rem] md:tw-p-[3rem_1.25rem]">
            <div className="tw-flex tw-items-center tw-gap-[2rem] md:tw-gap-[1rem] tw-justify-between md:tw-flex-col">
              <div className="">
                <p className="tw-text-20 tw-text-p1 tw-font-medium md:tw-text-center">
                  CUSTOMER TESTIMONIAL
                </p>
                <h3 className="tw-font-semiBold tw-text-48 tw-mt-[1.5rem] md:tw-text-center">
                  People do say about us?
                </h3>
              </div>

              <Link
                href="/about-us"
                className="tw-flex tw-items-center tw-gap-[rem]"
              >
                <p className="tw-text-18 tw-text-p1 tw-font-medium">
                  Learn More
                </p>
                <Image src={playCircleIcon} alt="" className=" tw-mt-[auto]" />
              </Link>
            </div>

            <div className="tw-grid tw-grid-cols-autoFitt_250 tw-gap-[2rem] tw-mt-[2.25rem] tw-mx-auto">
              {/* 1st */}
              <div className="tw-w-full w-max-w-[384px] md:tw-max-w-[unset] tw-border tw-border-[#DEDCDA] tw-p-[1.5rem] tw-flex tw-flex-col">
                <Image
                  src={quoteIcon}
                  alt=""
                  className="tw-w-[34px] tw-mt-[2.25rem]"
                />
                <p className="tw-my-[1.25rem] tw-text-14 tw-ext-[#596780]">
                  Designing event cards was always a daunting task for me, but
                  then I stumbled upon this platform. It's like a breath of
                  fresh air! The software is incredibly user-friendly, and the
                  templates are just stunning. I was able to create an elegant
                  wedding invitation in no time. The best part? The final
                  printed cards exceeded my expectations. Thank you for making
                  my special day even more special!
                </p>
                <div className="tw-w-full tw-mt-[1.5rem] tw-flex tw-items-center tw-gap-[.85rem] tw-mt-[auto]">
                  <Image src={sec5user1Img} alt="" className="tw-w-[48px]" />
                  <div className="tw">
                    <p className="tw-font-semiBold">Felicia Ibukun</p>
                    {/* <p className="tw-text-12 tw-text-[#767676] tw-mt-[.5rem]">
                      Bole Festival Organizer
                    </p> */}
                  </div>
                </div>
              </div>
              {/* 2nd */}
              <div className="tw-w-full w-max-w-[384px] md:tw-max-w-[unset] tw-border tw-border-[#DEDCDA] tw-p-[1.5rem] tw-flex tw-flex-col">
                <Image
                  src={quoteIcon}
                  alt=""
                  className="tw-w-[34px] tw-mt-[2.25rem]"
                />
                <p className="tw-my-[1.25rem] tw-text-14 tw-ext-[#596780]">
                  As an event planner, time is of the essence, and this platform
                  has become my secret weapon. The diversity of templates is
                  remarkable, catering to various themes and moods. The
                  customization options are a dream come true – I can tailor
                  every detail to match my clients' visions perfectly. The
                  seamless integration with printing partners is the cherry on
                  top. My clients are always amazed at the high-quality event
                  cards we deliver
                </p>
                <div className="tw-w-full tw-mt-[1.5rem] tw-flex tw-items-center tw-gap-[.85rem] tw-mt-[auto]">
                  <Image src={sec5user2Img} alt="" className="tw-w-[48px]" />
                  <div className="tw">
                    <p className="tw-font-semiBold">Anointed Segun </p>
                    {/* <p className="tw-text-12 tw-text-[#767676] tw-mt-[.5rem]">
                      TechStar Summit Converner
                    </p> */}
                  </div>
                </div>
              </div>
              {/* 3rd */}
              <div className="tw-w-full w-max-w-[384px] md:tw-max-w-[unset] tw-border tw-border-[#DEDCDA] tw-p-[1.5rem] tw-flex tw-flex-col">
                <Image
                  src={quoteIcon}
                  alt=""
                  className="tw-w-[34px] tw-mt-[2.25rem]"
                />
                <p className="tw-my-[1.25rem] tw-text-14 tw-ext-[#596780]">
                  I'm not a designer by any means, but this platform gave me the
                  confidence to create beautiful event cards for my daughter's
                  birthday party. The design software is so intuitive, and the
                  range of options allowed me to make something truly unique.
                  The digital delivery option was a game-changer – my friends
                  and family loved receiving the personalized digital
                  invitations. I can't wait to use this platform for all our
                  future celebrations!
                </p>
                <div className="tw-w-full tw-mt-[1.5rem] tw-flex tw-items-center tw-gap-[.85rem] tw-mt-[auto]">
                  <Image src={sec5user3Img} alt="" className="tw-w-[48px]" />
                  <div className="tw">
                    <p className="tw-font-semiBold">Alfredo Justina</p>
                    {/* <p className="tw-text-12 tw-text-[#767676] tw-mt-[.5rem]">
                      Wedding Planner
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
