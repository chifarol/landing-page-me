"use client";
import React, { useState, useRef, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/store-ts/hooks";
import {
  closeAllModal,
  closeModal,
  openModal,
  selectOpenModalContainer,
} from "@/store-ts/features/modalContainerSlice";
import {
  changeModal,
  modalState,
  selectCurrentModal,
} from "@/store-ts/features/modalSlice";
import {
  openMenu,
  closeMenu,
  selectMenuIsOpen,
} from "@/store-ts/features/menuOpenSlice";
import logo from "@/assets/images/logo.svg";
import avatarImg from "@/assets/images/avatar.png";
import navSolutions1Img from "@/assets/images/nav-solutions1.png";
import navSolutions2Img from "@/assets/images/nav-solutions2.png";
import navSolutions3Img from "@/assets/images/nav-solutions3.png";
import navSolutions4Img from "@/assets/images/nav-solutions4.png";
import navCompany1Img from "@/assets/images/nav-company1.png";
import navCompany2Img from "@/assets/images/nav-company2.png";
import navSupport1Img from "@/assets/images/nav-support1.png";
import navSupport2Img from "@/assets/images/nav-support2.png";
import {
  BellIcon,
  ChevronDownIcon,
  DropDownIcon,
  HamburgerIcon,
  SearchIcon,
  SignOutIcon,
  UploadIcon,
} from "@/assets/icon-components/topbar-icons";
import Image from "next/image";
import NavDropdown from "./dropdowns/NavDropdown";
import Link from "next/link";
import { NavAccordion } from "./dropdowns/Accordion";
import { navType } from "./types";

import facebookIcon from "@/assets/images/facebook-icon.svg";
import instaIcon from "@/assets/images/insta-icon.svg";
import youtubeIcon from "@/assets/images/youtube-icon.svg";

type Props = {
  // onMenuToggle: (isOpen: boolean) => void;
};
const Topbar = ({}: Props) => {
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
        heading: "Career",
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
    ],
  };

  const [openMenu, setOpenMenu] = useState(false);
  const isModalOpen = useAppSelector(selectOpenModalContainer);
  const currentModal = useAppSelector(selectCurrentModal);
  const isMenuOpen = useAppSelector(selectMenuIsOpen);
  const dispatch = useAppDispatch();
  const changeModalFxn = (newModal: typeof currentModal, width = 24) => {
    dispatch(openModal());
    dispatch(changeModal({ currentModal: newModal, width: width }));
  };
  const dropDownRef = useRef<HTMLDivElement | null>(null);
  const [currentDropDown, setcurrentDropDown] = useState<
    "" | "solutions" | "support" | "company"
  >("");

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as Node)
      ) {
        setcurrentDropDown("");
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropDownRef]);

  useEffect(() => {
    // onMenuToggle(openMenu);
  }, [openMenu]);

  return (
    <>
      <div className="tw-w-full tw-max-w-[1440px] tw-absolute tw-top-[0] tw-eft-[-50%] tw-transate-x-[50%]">
        {/* topbar lg */}
        <div className="tw-w-full tw-h-[90px] tw-flex  tw-items-center tw-px-[4rem] md:tw-hidden md:tw-px-[1.5rem]">
          <a href="/" className="tw-pr-[2rem] ">
            <Image src={logo} alt="" className="tw-h-[2rem] tw-w-[auto]" />
          </a>
          <div className="tw-w-full tw-flex tw-items-center tw-gap-[2rem] tw-px-[1.75rem] tw-justify-between">
            <div
              className="tw-flex tw-items-center tw-gap-[1rem]"
              ref={dropDownRef}
            >
              {/* solutions */}
              <div
                className="tw-relative "
                onMouseOver={() => setcurrentDropDown((x) => (x = "solutions"))}
                onMouseLeave={() => setcurrentDropDown((x) => (x = ""))}
              >
                <div className="tw-flex tw-items-center">
                  <div className="tw-text-16 tw-font-semiBold pointer">
                    Solutions
                  </div>
                  <ChevronDownIcon />
                </div>
                <NavDropdown
                  links={linkObjs.solutions}
                  classNames={`tw-w-[1000px] tw-max-w-[80vw] tw-transition-all tw-duration-[400ms] ${
                    currentDropDown === "solutions"
                      ? "tw-max-h-[800px] tw-opacity-1"
                      : "tw-max-h-[0] tw-invisible !tw-p-[0] tw-opacity-0"
                  }`}
                  onSelect={() => setcurrentDropDown("")}
                />
              </div>
              {/* support */}
              <div
                className="tw-relative"
                onMouseOver={() => setcurrentDropDown((x) => (x = "support"))}
                onMouseLeave={() => setcurrentDropDown((x) => (x = ""))}
              >
                <div className="tw-flex tw-items-center">
                  <div className="tw-text-16 tw-font-semiBold pointer">
                    Support
                  </div>
                  <ChevronDownIcon />
                </div>
                <NavDropdown
                  links={linkObjs.support}
                  classNames={`tw-w-[590px] tw-max-w-[90vw] tw-transition-all tw-duration-[300ms] ${
                    currentDropDown === "support"
                      ? "tw-max-h-[800px] tw-opacity-1"
                      : "tw-max-h-[0] tw-invisible !tw-p-[0] tw-opacity-0"
                  }`}
                  onSelect={() => setcurrentDropDown("")}
                />
              </div>
              {/* company */}
              <div
                className="tw-relative"
                onMouseOver={() => setcurrentDropDown((x) => (x = "company"))}
                onMouseLeave={() => setcurrentDropDown((x) => (x = ""))}
              >
                <div className="tw-flex tw-items-center">
                  <div className="tw-text-16 tw-font-semiBold pointer">
                    Company
                  </div>
                  <ChevronDownIcon />
                </div>
                <NavDropdown
                  links={linkObjs.company}
                  classNames={`tw-w-[590px] tw-max-w-[90vw] tw-transition-all tw-duration-[300ms] tw-overflow-y-hidden ${
                    currentDropDown === "company"
                      ? "tw-max-h-[800px] tw-opacity-1"
                      : "tw-max-h-[0] tw-invisible !tw-p-[0] tw-opacity-0"
                  }`}
                  onSelect={() => setcurrentDropDown("")}
                />
              </div>
            </div>
            <div className="tw-flex  tw-items-center tw-gap-[1.5rem]">
              <a
                href="http://app.everyeventdelivery.com"
                className={`tw-text-center tw-grid tw-place-items-center tw-bg-p1 tw-text-white tw-px-[1rem] tw-h-[2.5rem] tw-rounded-[6px]`}
              >
                Login/Signup
              </a>
            </div>
          </div>
        </div>
        {/* topbar sm */}
        <div className="tw-relative tw-w-full tw-bg-white tw-items-center tw-p-[1.5rem] tw-hidden md:tw-flex">
          <div className="tw-w-full tw-flex tw-justify-between tw-items-center tw-gap-[1.5rem]">
            <a href="/" className="tw-min-w-[265px] tw-max-w-[360px] ">
              <Image src={logo} alt="" className="tw-h-[2rem] tw-w-[auto]" />
            </a>

            <div
              className="tw pointer"
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
            >
              <HamburgerIcon />
            </div>
          </div>
          {/* sidebar sm */}
          <div
            className={`tw-w-full tw-min-w-[265px] md:tw-min-w-[unset] tw-max-w-[265px] md:tw-fixed md:tw-left-[0] md:tw-top-[0] md:tw-z-[60] md:tw-min-h-[100vh] md:tw-transition-[max-width] md:tw-w-full  ${
              openMenu
                ? "md:tw-visible md:tw-max-w-[100vw] md:tw-bg-[#525252]/40"
                : "md:tw-invisible md:tw-bg-[#525252]/0 md:tw-overflow-hidden"
            } `}
            onClick={() => setOpenMenu(false)}
          >
            <div
              className={`tw-w-full tw-max-w-[85%] tw-bg-white tw-p-[1.25rem] tw-min-h-[100vh] ${
                openMenu ? "md:tw-visible" : "md:tw-invisible"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="tw-min-h-[100vh] tw-flex tw-flex-col">
                <a href="/" className=" tw-max-w-[250px] tw-mb-[3rem]">
                  <Image
                    src={logo}
                    alt=""
                    className="tw-h-[2rem] tw-w-[auto]"
                  />
                </a>
                <div className="tw-flex tw-flex-col tw-gap-[2rem]">
                  {/* solutions */}
                  <NavAccordion
                    title="Solutions"
                    linkObjs={linkObjs.solutions}
                    onSelect={() => setOpenMenu(false)}
                    isSelected={currentDropDown === "solutions"}
                    onClick={() => {
                      setcurrentDropDown("solutions");
                    }}
                  />
                  {/* support */}
                  <NavAccordion
                    title="Support"
                    linkObjs={linkObjs.support}
                    onSelect={() => setOpenMenu(false)}
                    isSelected={currentDropDown === "support"}
                    onClick={() => {
                      setcurrentDropDown("support");
                    }}
                  />
                  {/* company */}
                  <NavAccordion
                    title="Company"
                    linkObjs={linkObjs.company}
                    onSelect={() => setOpenMenu(false)}
                    isSelected={currentDropDown === "company"}
                    onClick={() => {
                      setcurrentDropDown("company");
                    }}
                  />
                </div>

                <a
                  href="/blank-canvases"
                  className={`tw-text-center tw-grid tw-place-items-center tw-bg-p1 tw-text-white tw-px-[1rem] tw-h-[2.5rem] tw-rounded-[6px] tw-my-[3rem] tw-w-[fit-content]`}
                >
                  Login/Signup
                </a>

                <div className="tw-font-medium tw-mt-[auto]">
                  <h6 className="tw-text-20 tw-mb-[1rem]">Follow us on</h6>
                  <div className="tw-flex tw-gap-[1rem]">
                    <Link href="#">
                      <Image
                        src={instaIcon}
                        alt=""
                        className="tw-h-[2.25rem] tw-w-[2.25rem]"
                      />
                    </Link>
                    <Link href="#">
                      <Image
                        src={instaIcon}
                        alt=""
                        className="tw-h-[2.25rem] tw-w-[2.25rem]"
                      />{" "}
                    </Link>
                    <Link href="#">
                      <Image
                        src={facebookIcon}
                        alt=""
                        className="tw-h-[2.25rem] tw-w-[2.25rem]"
                      />{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* {isModalOpen && currentModal === "new-template" && (
        <ModalContainer>
          <CreateTemplate />
        </ModalContainer>
      )} */}
      </div>
    </>
  );
};

export default Topbar;
