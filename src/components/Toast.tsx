import React from "react";

type Props = {
  type: string;
  text: string;
};

function Toast({ type, text }: Props) {
  return (
    <div
      className={`tw-font-medium tw-w-full tw-rounded-[6px] tw-p-[.75rem] tw-my-[1.5rem] ${
        type == "error"
          ? "tw-text-error tw-bg-error/5 tw-border tw-border-error"
          : "tw-text-success tw-bg-success/5 tw-border tw-border-success"
      }`}
    >
      {text}
    </div>
  );
}

export default Toast;
