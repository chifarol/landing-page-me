exports.id = 206;
exports.ids = [206];
exports.modules = {

/***/ 74724:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 16505, 23))

/***/ }),

/***/ 63312:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 92397))

/***/ }),

/***/ 92397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Providers: () => (/* binding */ Providers)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js
var redux_toolkit_cjs_production_min = __webpack_require__(91388);
;// CONCATENATED MODULE: ./src/store-ts/features/counterSlice.ts

const initialState = {
    value: 0
};
const counterSlice = (0,redux_toolkit_cjs_production_min.createSlice)({
    name: "counter",
    initialState,
    reducers: {
        increment: (state)=>{
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1;
        },
        decrement: (state)=>{
            state.value -= 1;
        },
        incrementByAmount: (state, action)=>{
            state.value += action.payload;
        }
    }
});
const { increment, decrement, incrementByAmount } = counterSlice.actions;
// Other code such as selectors can use the imported `RootState` type
const selectCount = (state)=>state.counter.value;
/* harmony default export */ const features_counterSlice = (counterSlice.reducer);

;// CONCATENATED MODULE: ./src/store-ts/features/titleSlice.ts

const titleSlice_initialState = {
    value: ""
};
const titleSlice = (0,redux_toolkit_cjs_production_min.createSlice)({
    name: "title",
    initialState: titleSlice_initialState,
    reducers: {
        updateTitle: (state, action)=>{
            state.value = action.payload;
        }
    }
});
const { updateTitle } = titleSlice.actions;
// Other code such as selectors can use the imported `RootState` type
const selectTitle = (state)=>state.title.value;
/* harmony default export */ const features_titleSlice = (titleSlice.reducer);

// EXTERNAL MODULE: ./src/store-ts/features/modalSlice.ts
var modalSlice = __webpack_require__(37795);
// EXTERNAL MODULE: ./src/store-ts/features/modalContainerSlice.ts
var modalContainerSlice = __webpack_require__(30430);
// EXTERNAL MODULE: ./src/store-ts/features/menuOpenSlice.ts
var menuOpenSlice = __webpack_require__(6015);
;// CONCATENATED MODULE: ./src/store-ts/store.ts






const store = (0,redux_toolkit_cjs_production_min.configureStore)({
    reducer: {
        counter: features_counterSlice,
        title: features_titleSlice,
        modal: modalSlice/* default */.ZP,
        modalContainer: modalContainerSlice/* default */.ZP,
        menuOpen: menuOpenSlice/* default */.ZP
    }
});
/* harmony default export */ const store_ts_store = (store);

// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(8250);
// EXTERNAL MODULE: ./node_modules/@tanstack/query-core/build/lib/queryClient.mjs + 4 modules
var lib_queryClient = __webpack_require__(85167);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs
var QueryClientProvider = __webpack_require__(212);
;// CONCATENATED MODULE: ./src/store-ts/Provider.tsx
/* __next_internal_client_entry_do_not_use__ Providers auto */ 



function Providers({ children }) {
    const queryClient = new lib_queryClient/* QueryClient */.S();
    return /*#__PURE__*/ jsx_runtime_.jsx(QueryClientProvider/* QueryClientProvider */.aH, {
        client: queryClient,
        children: /*#__PURE__*/ jsx_runtime_.jsx(lib.Provider, {
            store: store_ts_store,
            children: children
        })
    });
}


/***/ }),

/***/ 6015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Wf: () => (/* binding */ selectMenuIsOpen),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports menuOpenSlice, openMenu, closeMenu */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91388);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    menuIsOpen: false
};
const menuOpenSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "menuOpen",
    initialState,
    reducers: {
        openMenu: (state)=>{
            state.menuIsOpen = true;
            console.log("menuIsOpen true");
        },
        closeMenu: (state)=>{
            state.menuIsOpen = false;
            console.log("menuIsOpen false");
        }
    }
});
const { openMenu, closeMenu } = menuOpenSlice.actions;
// Other code such as selectors can use the imported `RootState` type
const selectMenuIsOpen = (state)=>state.menuOpen.menuIsOpen;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuOpenSlice.reducer);


/***/ }),

/***/ 30430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   h7: () => (/* binding */ openModal),
/* harmony export */   ud: () => (/* binding */ selectOpenModalContainer)
/* harmony export */ });
/* unused harmony exports modalContainerSlice, closeModal, closeAllModal */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91388);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    isOpen: false
};
const modalContainerSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "modalContainer",
    initialState,
    reducers: {
        openModal: (state)=>{
            state.isOpen = true;
        // console.log("openModal")
        },
        closeModal: (state)=>{
            state.isOpen = false;
        },
        closeAllModal: (state)=>{
            state.isOpen = false;
        }
    }
});
const { openModal, closeModal, closeAllModal } = modalContainerSlice.actions;
// Other code such as selectors can use the imported `RootState` type
const selectOpenModalContainer = (state)=>state.modalContainer.isOpen;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalContainerSlice.reducer);


/***/ }),

/***/ 37795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ID: () => (/* binding */ changeModal),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   cO: () => (/* binding */ selectCurrentModal)
/* harmony export */ });
/* unused harmony exports modalSlice, modalWidth, selectModalWidth */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91388);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    currentModal: "",
    width: 38.875
};
const modalSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "modal",
    initialState,
    reducers: {
        changeModal: (state, action)=>{
            state.currentModal = action.payload.currentModal;
            if (action.payload.width) {
                state.width = action.payload.width;
            } else {
                state.width = 32.625;
            }
        },
        modalWidth: (state, action)=>{
            state.width = action.payload;
        }
    }
});
const { changeModal, modalWidth } = modalSlice.actions;
// Other code such as selectors can use the imported `RootState` type
const selectCurrentModal = (state)=>state.modal.currentModal;
const selectModalWidth = (state)=>state.modal.width;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalSlice.reducer);


/***/ }),

/***/ 58847:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/font/local/target.css?{"path":"src\\app\\layout.tsx","import":"","arguments":[{"src":[{"path":"../../public/fonts/Inter-Regular.ttf","weight":"400"},{"path":"../../public/fonts/Inter-Medium.ttf","weight":"500"},{"path":"../../public/fonts/Inter-Bold.ttf","weight":"700"}],"variable":"--font-inter"}],"variableName":"inter"}
var Inter_Bold_ttf_weight_700_variable_font_inter_variableName_inter_ = __webpack_require__(16017);
var Inter_Bold_ttf_weight_700_variable_font_inter_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(Inter_Bold_ttf_weight_700_variable_font_inter_variableName_inter_);
// EXTERNAL MODULE: ./src/app/globals.scss
var globals = __webpack_require__(30924);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./src/store-ts/Provider.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\xampp\htdocs\projects\mobirevo\everyevent\landing-page\src\store-ts\Provider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["Providers"];

;// CONCATENATED MODULE: ./src/app/layout.tsx




const metadata = {
    title: "Simplifying Event Management in Nigeria",
    description: "Take your Nigerian physical events to the next level with our efficient event planning software. Simplify logistics, enhance attendee engagement, and achieve event success with ease."
};
function RootLayout({ children }) {
    // const menuIsOpen = useAppSelector(selectMenuIsOpen);
    // const [menuIsOpen, setMenuIsOpen] = useState(false);
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        className: `${(Inter_Bold_ttf_weight_700_variable_font_inter_variableName_inter_default()).variable} tw-font-sans`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(e0, {
                children: [
                    " ",
                    children,
                    " "
                ]
            })
        })
    });
}


/***/ }),

/***/ 73881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80085);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"36x36"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 30924:
/***/ (() => {



/***/ })

};
;