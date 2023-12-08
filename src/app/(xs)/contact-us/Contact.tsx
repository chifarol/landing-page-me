"use client";
import Image from "next/image";
import contactBgImg from "@/assets/images/contact-bg.svg";
import mailIcon from "@/assets/images/Icons/mail-icon.svg";
import phoneIcon from "@/assets/images/Icons/phone.svg";
import Link from "next/link";
import { TextInput } from "@/components/input-groups/TextInput";
import { TextareaInput } from "@/components/input-groups/TextareaInput";
import { PrimaryButton } from "@/components/input-groups/Button";
import { EmailInput } from "@/components/input-groups/EmailInput";

import axios from "axios";
import { getApiPath, useRequestProcessor } from "@/QueryFxns";
import { BarSpinner } from "@/components/Spinners";
import { useState } from "react";
import Toast from "@/components/Toast";
import type { Metadata } from "next";

export default function ContactUs() {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [formMsg, setFormMsg] = useState({
    text: "",
    type: "",
    open: false,
  });
  const [supportEmail, setSupportEmail] = useState("");
  function formSubmitResponse(
    text: string,
    type: "error" | "success" | "info"
  ) {
    setFormMsg({
      type: type,
      text:
        type == "error" ? `Error: Form could not be submitted - ${text}` : text,
      open: true,
    });

    setTimeout(() => {
      setFormMsg({
        type: "",
        text: "",
        open: false,
      });
    }, 5000);
  }

  const { useQueryFxn, useMutationFxn } = useRequestProcessor();

  const submitFormReq = useMutationFxn(
    ["design"],
    (isLoading) => {
      setIsLoading(isLoading);
    },
    () => {
      const formData = new FormData();
      formData.append("fullname", form.fullname);
      formData.append("email", form.email);
      formData.append("company", form.company);
      formData.append("subject", form.subject);
      formData.append("message", form.message);
      return axios
        .post(`${getApiPath()}/user/contact-us`, formData, {})
        .then((res) => {
          // console.log("updateDesign result", res.data);
          formSubmitResponse(
            "Form submitted successfully - " + res.data.message,
            "success"
          );
          return res.data;
        })
        .catch((e) => {
          formSubmitResponse(
            `Error: Form could not be submitted ${e.response.data.message}`,
            "error"
          );

          console.log("updateDesign error", e);

          return e;
        });
    },
    { enabled: false }
  );

  const fetchSupportEmail = useQueryFxn(
    ["email"],
    () => {
      return axios
        .get(`${getApiPath()}/user/get-support-emails`)
        .then((res) => {
          const result = res.data.data;
          setSupportEmail(result.support_email3);
          console.log("result", result);
          return res.data;
        })
        .catch((e) => {
          console.log("email error", e);
          return e;
        });
    },
    { enabled: true }
  );
  return (
    <main
      className="tw-p-[4rem] md:tw-px-[0] tw-bg-cover tw-bg-no-repeat"
      style={{ backgroundImage: `url('/hero-image-bg.svg')` }}
    >
      {/* hero section */}
      <div className="tw-w-full tw-pt-[6rem] tw-pb-[4rem] tw-bg-cover  md:tw-pb-[2rem] md:tw-pt-[4rem]">
        {/* header */}
        <div
          className="tw-p-[3rem] tw-h-[400px] tw-w-full tw-grid tw-place-items-center tw-bg-p1 tw-bgcover tw-bg-center tw-rounded-[20px] md:tw-rounded-[0] md:tw-p-[1.25rem] md:tw-h-[240px]"
          style={{ backgroundImage: `url('/page-bg.png')` }}
        >
          <div className="tw-flex tw-flex-col tw-items-center">
            <h4 className="tw-text-60 tw-text-white tw-font-bold md:tw-text-40">
              Get in Touch
            </h4>
            {supportEmail && (
              <div className="tw-flex tw-items-center tw-gap-[.65rem] tw-mt-[.75rem]">
                <Image src={mailIcon} alt="" className="tw-h-[20px]" />
                <p className="tw-mt-[rem] tw-text-white">{supportEmail}</p>
              </div>
            )}
            <div className="tw-flex tw-items-center tw-gap-[.65rem] tw-mt-[.5rem]">
              <Image src={phoneIcon} alt="" className="tw-h-[20px]" />
              <p className="tw-mt-[rem] tw-text-white">+23496232994</p>
            </div>
          </div>
        </div>

        {/* main content */}
        <div className="tw-mt-[-6rem] md:tw-mt-[-3rem]">
          <div
            className="tw-w-full tw-bg-white tw-p-[4rem_3rem] tw-rounded-[20px] md:tw-p-[2rem_1.25rem] tw-z-[10]  tw-max-w-[90%] tw-mx-[auto] "
            style={{
              filter: "drop-shadow(0px 69px 42px rgba(200, 200, 200, 0.25))",
            }}
          >
            {formMsg.open && <Toast text={formMsg.text} type={formMsg.type} />}
            <div className="tw tw-grid tw-grid-cols-2 tw-gap-[2rem] md:tw-grid-cols-1 md:tw-gap-[1rem]">
              <TextInput
                label="Full name *"
                placeholder="John David"
                onChangeHandler={(value) => {
                  setForm({ ...form, fullname: value });
                }}
              />
              <EmailInput
                label="Your email *"
                placeholder="example@yourmail.com"
                onChangeHandler={(value) => {
                  setForm({ ...form, email: value });
                }}
              />
              <TextInput
                label="Company *"
                placeholder="your company name here"
                onChangeHandler={(value) => {
                  setForm({ ...form, company: value });
                }}
              />
              <TextInput
                label="Subject *"
                placeholder="Subject"
                onChangeHandler={(value) => {
                  setForm({ ...form, subject: value });
                }}
              />
            </div>
            <TextareaInput
              label="Message *"
              placeholder="Hello there,I would like to talk about how to..."
              onChangeHandler={(value) => {
                setForm({ ...form, message: value });
              }}
              className="tw-mt-[2rem]"
              minLength={15}
            />
            <PrimaryButton
              label="Send Message"
              className="tw-min-w-[150px] tw-w-[fit-content] tw-mt-[2rem]"
              isLoading={isLoading}
              onClickHandler={() => {
                submitFormReq.mutate();
              }}
              isDisabled={
                form.fullname && form.email && form.subject && form.message
                  ? false
                  : true
              }
            />
          </div>

          <Image
            src={contactBgImg}
            alt=""
            className="tw-w-full tw-mt-[-9rem] md:tw-mt-[-4rem]"
          />
        </div>
      </div>

      <div className="tw"></div>
    </main>
  );
}
