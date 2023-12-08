"use strict";
exports.id = 789;
exports.ids = [789];
exports.modules = {

/***/ 29789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OutlineButton: () => (/* binding */ OutlineButton),
/* harmony export */   PrimaryButton: () => (/* binding */ PrimaryButton),
/* harmony export */   PrimaryErrorButton: () => (/* binding */ PrimaryErrorButton),
/* harmony export */   SecondaryButton: () => (/* binding */ SecondaryButton),
/* harmony export */   SecondaryDangerButton: () => (/* binding */ SecondaryDangerButton),
/* harmony export */   SubmitButton: () => (/* binding */ SubmitButton),
/* harmony export */   TransparentButton: () => (/* binding */ TransparentButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Spinners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11804);
/* __next_internal_client_entry_do_not_use__ SubmitButton,PrimaryButton,PrimaryErrorButton,SecondaryDangerButton,SecondaryButton,TransparentButton,OutlineButton auto */ 



const SubmitButton = ({ label, link = "", footnote = "", footnoteCTA = "", footnoteCTALink = "#", onClickHandler = ()=>{}, isDisabled = false, isLoading = false, ...rest })=>{
    const buttonRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (buttonRef.current !== null) {
            buttonRef.current.disabled = isDisabled;
        }
    }, [
        isDisabled
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        ...rest,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: `tw-text-center ${!isDisabled ? "tw-bg-p1" : "tw-bg-pdisabled"} tw-font-medium tw-text-16 tw-text-white tw-px-[1rem] tw-h-[44px] tw-grid tw-place-items-center tw-rounded-[8px] tw-w-[100%]`,
                onClick: onClickHandler,
                ref: buttonRef,
                children: isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Spinners__WEBPACK_IMPORTED_MODULE_3__/* .SpinnerIcon */ .L, {}) : link ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: link,
                    className: "tw",
                    children: label
                }) : label
            }),
            footnote && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "tw-mt-[1.25rem] tw-text-neutral-5 tw-text-1416",
                children: [
                    footnote,
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "tw-text-purple2 tw-font-medium",
                        href: footnoteCTALink,
                        children: footnoteCTA
                    })
                ]
            })
        ]
    });
};
const PrimaryButton = ({ classNames = "", label, link = "", onClickHandler = ()=>{}, isDisabled = false, isLoading = false, ...rest })=>{
    const buttonRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (buttonRef.current !== null) {
            buttonRef.current.disabled = isDisabled;
        }
    }, [
        isDisabled
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ...rest,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            className: `tw-text-center ${!isDisabled ? "tw-bg-p1" : "tw-bg-pdisabled"} tw-font-medium tw-text-16 tw-text-white tw-px-[1rem] tw-h-[44px] tw-grid tw-place-items-center tw-rounded-[8px] tw-w-[100%] ${classNames}`,
            onClick: onClickHandler,
            ref: buttonRef,
            children: isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Spinners__WEBPACK_IMPORTED_MODULE_3__/* .SpinnerIcon */ .L, {}) : link ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: link,
                className: "tw",
                children: label
            }) : label
        })
    });
};
const PrimaryErrorButton = ({ link = "", label, onClickHandler = ()=>{}, isDisabled = false, ...rest })=>{
    const buttonRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (buttonRef.current !== null) {
            buttonRef.current.disabled = isDisabled;
        }
    }, [
        isDisabled
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ...rest,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            className: `tw-text-center tw-text-white ${!isDisabled ? "tw-bg-error" : "tw-bg-pdisabled"} tw-font-medium tw-text-16 tw-text-white tw-px-[1rem] tw-h-[44px] tw-grid tw-place-items-center tw-rounded-[8px] tw-w-[100%]`,
            onClick: onClickHandler,
            ref: buttonRef,
            children: link ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: link,
                className: "tw",
                children: label
            }) : label
        })
    });
};
const SecondaryDangerButton = ({ link = "", label, onClickHandler = ()=>{}, isDisabled = false, ...rest })=>{
    const buttonRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (buttonRef.current !== null) {
            buttonRef.current.disabled = isDisabled;
        }
    }, [
        isDisabled
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ...rest,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            className: `tw-text-center tw-border pointer ${!isDisabled ? "tw-border-error" : "tw-border-pdisabled tw-text-p1/50"} tw-font-medium tw-text-16 tw-text-error tw-px-[1rem] tw-h-[44px] tw-grid tw-place-items-center tw-rounded-[8px] tw-w-[100%]`,
            onClick: onClickHandler,
            ref: buttonRef,
            children: link ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: link,
                className: "tw",
                children: label
            }) : label
        })
    });
};
const SecondaryButton = ({ link = "", label, onClickHandler = ()=>{}, isDisabled = false, ...rest })=>{
    const buttonRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (buttonRef.current !== null) {
            buttonRef.current.disabled = isDisabled;
        }
    }, [
        isDisabled
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ...rest,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            className: `tw-text-center tw-border ${!isDisabled ? "tw-border-p1 tw-text-p1" : "tw-border-pdisabled tw-text-p1/50"} tw-font-medium tw-text-16 tw-text-white tw-px-[1rem] tw-h-[44px] tw-grid tw-place-items-center tw-rounded-[8px] tw-w-[100%]`,
            onClick: onClickHandler,
            ref: buttonRef,
            children: link ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: link,
                className: "tw",
                children: label
            }) : label
        })
    });
};
const TransparentButton = ({ link = "", label, icon, onClickHandler = ()=>{}, isDisabled = false, ...rest })=>{
    const buttonRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (buttonRef.current !== null) {
            buttonRef.current.disabled = isDisabled;
        }
    }, [
        isDisabled
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ...rest,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
            className: `tw-text-center tw-text-white tw-border tw-border-white tw-bg-white/50 tw-h-[40px] tw-px-[1rem] tw-flex tw-justify-center tw-items-center tw-gap-[.5rem] tw-rounded-[8px] tw-w-[100%] tw-whitespace-nowrap`,
            onClick: onClickHandler,
            ref: buttonRef,
            children: [
                icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    src: icon,
                    alt: "",
                    className: "tw"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "tw",
                    children: link ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: link,
                        className: "tw",
                        children: label
                    }) : label
                })
            ]
        })
    });
};
const OutlineButton = ({ link = "", label, icon, onClickHandler = ()=>{}, isDisabled = false, color = "#D0D5DD", ...rest })=>{
    const buttonRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (buttonRef.current !== null) {
            buttonRef.current.disabled = isDisabled;
        }
    }, [
        isDisabled
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ...rest,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
            className: `tw-border tw-font-medium tw-text-16 tw-text-white tw-px-[1rem] tw-h-[44px] tw-flex tw-justify-center tw-items-center tw-rounded-[8px] tw-w-[100%]`,
            style: {
                color: "#344054",
                borderColor: "#D0D5DD"
            },
            onClick: onClickHandler,
            ref: buttonRef,
            children: [
                icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    src: icon,
                    alt: "",
                    className: "tw"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "tw",
                    children: link ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: link,
                        className: "tw",
                        children: label
                    }) : label
                })
            ]
        })
    });
};


/***/ })

};
;