"use strict";
exports.id = 84;
exports.ids = [84];
exports.modules = {

/***/ 63055:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ searchByTerm)
/* harmony export */ });
function searchByTerm(arr, searchTerm) {
    if (searchTerm) {
        const filteredArr = arr.filter((item, index)=>{
            for (const [key, value] of Object.entries(item)){
                if (item[key].toString().toLowerCase().includes(searchTerm.toLowerCase())) {
                    return true;
                }
            }
        });
        return filteredArr;
    } else {
        return arr;
    }
}


/***/ }),

/***/ 20005:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports SearchInput2, SearchInput_Icon */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_search_icon_2_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86285);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ SearchInput2,SearchInput_Icon,default auto */ 




const SearchInput = ({ placeholder, onChangeHandler, bordered = true })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `tw-relative sha1 ${bordered ? "tw-border tw-border-[#C8951A]" : ""} tw-rounded-[.5rem] tw-w-full tw-max-w-[467px]`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                src: _assets_images_search_icon_2_svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
                alt: "",
                className: "tw-absolute tw-top-[1rem] tw-left-[0.5rem]"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "text",
                placeholder: placeholder,
                onChange: (event)=>{
                    onChangeHandler(event.target.value);
                    console.log(event.target.value);
                },
                className: "tw-bg-white tw-rounded-[6px] tw-w-full tw-p-[1rem_2.5rem] tw-text-[1rem]"
            })
        ]
    });
};
const SearchInput2 = ({ placeholder, onChangeHandler, bordered = true, ...rest })=>{
    return /*#__PURE__*/ _jsx("div", {
        ...rest,
        children: /*#__PURE__*/ _jsxs("div", {
            className: `tw-relative sha1 ${bordered ? "tw-w-full" : ""} tw-rounded-[.5rem]`,
            children: [
                /*#__PURE__*/ _jsx(Image, {
                    src: searchIcon2,
                    alt: "",
                    className: "tw-absolute tw-top-[.7rem] tw-left-[0.5rem] tw-h-[1.25rem]"
                }),
                /*#__PURE__*/ _jsx("input", {
                    type: "text",
                    placeholder: placeholder,
                    onChange: (event)=>{
                        onChangeHandler(event.target.value);
                        console.log(event.target.value);
                    },
                    className: "tw-border tw-border-[#C8951A] tw-bg-white tw-rounded-[6px] tw-w-full tw-max-w-[684px] tw-px-[2.5rem] tw-grid tw-place-items-center tw-h-[2.75rem] tw-text-[1rem]"
                })
            ]
        })
    });
};
const SearchInput_Icon = ({ icon, placeholder, onChangeHandler, listProp })=>{
    const [list, setList] = useState(listProp);
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: "tw-relative",
                children: [
                    /*#__PURE__*/ _jsx(Image, {
                        src: icon,
                        alt: "",
                        className: "tw-h-[1rem] tw-absolute tw-top-[1.25rem] tw-left-[0.75rem]"
                    }),
                    /*#__PURE__*/ _jsx("input", {
                        type: "text",
                        placeholder: placeholder,
                        onChange: (event)=>{
                            console.log(event.target.value);
                            if (!event.target.value) {
                                setList(listProp);
                            } else {
                                const newList = list.filter((item)=>item[1].toLowerCase().includes(event.target.value));
                                setList(newList);
                            }
                        },
                        className: "tw-bg-[#F5F5F8] tw-rounded-[4px] tw-w-[100%] tw-p-[1rem_2.5rem] tw-text-[1rem]"
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "tw-mt-[2rem]",
                children: list.map((listItem, index)=>/*#__PURE__*/ _jsxs("div", {
                        className: "tw-p-[1.25rem_0] twc-border-bottom-1 tw-border-neautral-f0 tw-text-1616 tw-text-neutral-5 tw-flex tw-gap-[0.5rem]",
                        children: [
                            /*#__PURE__*/ _jsx(Image, {
                                src: listItem[0],
                                alt: ""
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "tw",
                                children: listItem[1]
                            })
                        ]
                    }, index))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchInput);


/***/ }),

/***/ 86285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/search-icon-2.a8fa6b07.svg","height":20,"width":20,"blurWidth":0,"blurHeight":0});

/***/ })

};
;