import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  links: {
    image: StaticImageData;
    heading: string;
    text: string;
    href: string;
  }[];
  classNames?: string;
  onSelect: () => void;
}

const NavDropdown = ({ links, classNames, onSelect, ...rest }: Props) => {
  return (
    <div
      {...rest}
      className={`tw-p-[2.7vw] tw-bg-white tw-absolute tw-top-[50px] tw-left-[10%] tw-translate-x-[-10%] tw-rounded-[12px] tw-z-[10] ${classNames}`}
      style={{ boxShadow: "4px 2px 20px 0px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="tw-grid tw-grid-cols-autoFit_180 tw-gap-[2rem]  tw-w-full">
        {links.map((link, index) => (
          <Link
            href={link.href}
            className="tw-w-full tw-min-w-[200px]"
            key={index}
            onClick={() => onSelect()}
          >
            <div className="tw-w-full tw-mb-[1rem]">
              <Image
                src={link.image}
                alt=""
                className="tw-w-full tw-object-cover"
              />
            </div>

            <h6 className="tw-font-bold">{link.heading}</h6>
            <p className="tw-mt-[.5rem] tw-text-[#596780]">{link.text}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavDropdown;
