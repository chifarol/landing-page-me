import notFoundImg from "../assets/images/not-found.svg";
import Image from "next/image";

import React from "react";

type Props = { text?: string };

const NotFound = ({ text = "No results" }: Props) => {
  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-my-[2rem]">
      <Image className="tw-mb-[1rem]" alt="no result" src={notFoundImg} />
      <p className="tw-font-medium">{text}</p>
    </div>
  );
};

export default NotFound;
