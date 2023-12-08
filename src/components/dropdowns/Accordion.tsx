"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import closeIcon from "@/assets/images/Icons/minus-circle.svg";
import openIcon from "@/assets/images/Icons/plus-circle.svg";
import { ChevronDownIcon } from "@/assets/icon-components/topbar-icons";
import Link from "next/link";
import { accordionType, navType } from "../types";
import { RichTextDisplay } from "../input-groups/RichText1";

interface Props {
  data: accordionType[];
}

const Accordion = ({ data }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [height, setHeight] = useState("tw-h-[120px]");
  const accContentRef = useRef(null);
  function toggleAcc(index: number) {
    console.log(currentIndex);
    if (index === currentIndex) {
      setCurrentIndex(-1);
      return;
    }
    setCurrentIndex(index);
    setTimeout(() => {
      setHeight("!tw-h-[auto]");
    }, 500);
  }
  return (
    <div className="tw-w-full tw-max-w-[768px]" id="experiences">
      {/* 2nd */}
      {data.map((item, index) => (
        <div
          className={`tw-w-full tw-p-[1.125rem] md:tw-p-[1rem] ${
            index !== 0 ? "tw-border-t tw-border-t-[#EAECF0]" : ""
          }`}
          key={index}
        >
          <div
            className={`border-0d tw-flex tw-justify-between tw-gap-[1rem] tw-items-center pointer`}
            onClick={() => toggleAcc(index)}
          >
            <h5 className="tw-text-18 tw-font-medium">{item.title}</h5>
            {currentIndex === index ? (
              <Image src={closeIcon} alt="" height={24} width={24} />
            ) : (
              <Image src={openIcon} alt="" height={24} width={24} />
            )}
          </div>
          <div
            className={`tw-overflow-hidden tw-transition-all tw-duration-[500ms]
            ${
              currentIndex !== index
                ? "acc-drop tw-max-h-[0]"
                : "tw-max-h-[300px] acc-drop-close"
            }
            `}
            ref={accContentRef}
          >
            {<RichTextDisplay defaultValue={item.body} />}
            {/* <ul
              className={`tw-list-disc tw-pl-[1rem] tw-pl-[2rem] tw-py-[2rem] md:tw-py-[1rem]`}
            >
              {item.content ||
                item.contentList?.map((listItem, index) => (
                  <li className="tw" key={index}>
                    {listItem}
                  </li>
                ))}
            </ul> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;

interface Props2 extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  linkObjs: navType[];
  onSelect: () => void;
  isSelected: boolean;
}
export const NavAccordion = ({
  title,
  linkObjs,
  onSelect,
  isSelected,
  ...rest
}: Props2) => {
  const [openMenu, setOpenMenu] = useState(isSelected);
  return (
    <div {...rest}>
      <div
        className="tw-flex tw-items-center pointer"
        onClick={() => {
          setOpenMenu(!openMenu);
        }}
      >
        <div className="tw-text-16 tw-font-semiBold">{title}</div>
        <div
          className={`tw-transition-all ${
            openMenu && isSelected ? "tw-rotate-180" : ""
          }`}
        >
          <ChevronDownIcon />
        </div>
      </div>
      <div
        className={`tw-flex tw-flex-col tw-gap-[1.5rem]  tw-w-full tw-overflow-hidden tw-transition-all 
            ${
              openMenu && isSelected
                ? "tw-max-h-[1000px] tw-mt-[1rem]"
                : "tw-max-h-[0]"
            }
            `}
      >
        {linkObjs.map((link, index) => (
          <Link
            href={link.href}
            className="tw-w-full tw-flex tw-gap-[1rem] tw-min-w-[200px]"
            key={index}
            onClick={() => onSelect()}
          >
            <div className="tw-min-w-[3rem] tw-max-w-[3rem] tw-gap-[.75rem]">
              <Image src={link.image} alt="" className="tw-w-full" />
            </div>

            <div className="tw">
              <h6 className="tw-font-bold  tw-text-14">{link.heading}</h6>
              <p className="tw-text-[#596780] tw-text-12">{link.text}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
