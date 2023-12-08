import React, { useRef, useState, useEffect } from "react";
import { helpType } from "../types";
import { RichTextDisplay } from "../input-groups/RichText1";

type Props = {
  helpObj: helpType;
};
const HelpText = ({ helpObj }: Props) => {
  return (
    <>
      <div className="tw-border tw-border-[rgba(0,0,0,0.2)] tw-w-full  tw-p-[3rem] md:tw-p-[1rem]">
        <div className="tw-bg-white">
          <h4 className="tw-text-18 tw-font-bold tw-mb-[2rem] tw-pb-[1rem] tw-border-b tw-border-b-[rgba(0,0,0,0.1)] ">
            {helpObj.title}
          </h4>
          {<RichTextDisplay defaultValue={helpObj.description} />}
        </div>
      </div>
    </>
  );
};

export default HelpText;
