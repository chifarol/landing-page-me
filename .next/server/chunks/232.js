exports.id = 232;
exports.ids = [232];
exports.modules = {

/***/ 57114:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(90696)


/***/ }),

/***/ 483:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.possibleStandardNames = exports.noTextChildNodes = exports.randomString = exports.styleToObject = void 0;
var styleToObject = function (input) {
    var attributes = input.split(/ ?; ?/);
    return attributes.reduce(function (acc, d) {
        var _a = __read(d.split(/ ?: ?/), 2), key = _a[0], value = _a[1];
        if (key && value) {
            acc[key.replace(/-(\w)/g, function (_$0, $1) { return $1.toUpperCase(); })] = Number.isNaN(Number(value))
                ? value
                : Number(value);
        }
        return acc;
    }, {});
};
exports.styleToObject = styleToObject;
/* istanbul ignore next */
function randomString(length) {
    if (length === void 0) { length = 6; }
    var characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result = '';
    for (var index = length; index > 0; --index) {
        result += characters[Math.round(Math.random() * (characters.length - 1))];
    }
    return result;
}
exports.randomString = randomString;
exports.noTextChildNodes = [
    'br',
    'col',
    'colgroup',
    'dl',
    'hr',
    'iframe',
    'img',
    'input',
    'link',
    'menuitem',
    'meta',
    'ol',
    'param',
    'select',
    'table',
    'tbody',
    'tfoot',
    'thead',
    'tr',
    'ul',
    'wbr',
];
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// Taken from https://raw.githubusercontent.com/facebook/react/baff5cc2f69d30589a5dc65b089e47765437294b/packages/react-dom/src/shared/possibleStandardNames.js
// tslint:disable:object-literal-sort-keys
exports.possibleStandardNames = {
    // HTML
    'accept-charset': 'acceptCharset',
    acceptcharset: 'acceptCharset',
    accesskey: 'accessKey',
    allowfullscreen: 'allowFullScreen',
    autocapitalize: 'autoCapitalize',
    autocomplete: 'autoComplete',
    autocorrect: 'autoCorrect',
    autofocus: 'autoFocus',
    autoplay: 'autoPlay',
    autosave: 'autoSave',
    cellpadding: 'cellPadding',
    cellspacing: 'cellSpacing',
    charset: 'charSet',
    class: 'className',
    classid: 'classID',
    classname: 'className',
    colspan: 'colSpan',
    contenteditable: 'contentEditable',
    contextmenu: 'contextMenu',
    controlslist: 'controlsList',
    crossorigin: 'crossOrigin',
    dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
    datetime: 'dateTime',
    defaultchecked: 'defaultChecked',
    defaultvalue: 'defaultValue',
    enctype: 'encType',
    for: 'htmlFor',
    formmethod: 'formMethod',
    formaction: 'formAction',
    formenctype: 'formEncType',
    formnovalidate: 'formNoValidate',
    formtarget: 'formTarget',
    frameborder: 'frameBorder',
    hreflang: 'hrefLang',
    htmlfor: 'htmlFor',
    httpequiv: 'httpEquiv',
    'http-equiv': 'httpEquiv',
    icon: 'icon',
    innerhtml: 'innerHTML',
    inputmode: 'inputMode',
    itemid: 'itemID',
    itemprop: 'itemProp',
    itemref: 'itemRef',
    itemscope: 'itemScope',
    itemtype: 'itemType',
    keyparams: 'keyParams',
    keytype: 'keyType',
    marginwidth: 'marginWidth',
    marginheight: 'marginHeight',
    maxlength: 'maxLength',
    mediagroup: 'mediaGroup',
    minlength: 'minLength',
    nomodule: 'noModule',
    novalidate: 'noValidate',
    playsinline: 'playsInline',
    radiogroup: 'radioGroup',
    readonly: 'readOnly',
    referrerpolicy: 'referrerPolicy',
    rowspan: 'rowSpan',
    spellcheck: 'spellCheck',
    srcdoc: 'srcDoc',
    srclang: 'srcLang',
    srcset: 'srcSet',
    tabindex: 'tabIndex',
    typemustmatch: 'typeMustMatch',
    usemap: 'useMap',
    // SVG
    accentheight: 'accentHeight',
    'accent-height': 'accentHeight',
    alignmentbaseline: 'alignmentBaseline',
    'alignment-baseline': 'alignmentBaseline',
    allowreorder: 'allowReorder',
    arabicform: 'arabicForm',
    'arabic-form': 'arabicForm',
    attributename: 'attributeName',
    attributetype: 'attributeType',
    autoreverse: 'autoReverse',
    basefrequency: 'baseFrequency',
    baselineshift: 'baselineShift',
    'baseline-shift': 'baselineShift',
    baseprofile: 'baseProfile',
    calcmode: 'calcMode',
    capheight: 'capHeight',
    'cap-height': 'capHeight',
    clippath: 'clipPath',
    'clip-path': 'clipPath',
    clippathunits: 'clipPathUnits',
    cliprule: 'clipRule',
    'clip-rule': 'clipRule',
    colorinterpolation: 'colorInterpolation',
    'color-interpolation': 'colorInterpolation',
    colorinterpolationfilters: 'colorInterpolationFilters',
    'color-interpolation-filters': 'colorInterpolationFilters',
    colorprofile: 'colorProfile',
    'color-profile': 'colorProfile',
    colorrendering: 'colorRendering',
    'color-rendering': 'colorRendering',
    contentscripttype: 'contentScriptType',
    contentstyletype: 'contentStyleType',
    diffuseconstant: 'diffuseConstant',
    dominantbaseline: 'dominantBaseline',
    'dominant-baseline': 'dominantBaseline',
    edgemode: 'edgeMode',
    enablebackground: 'enableBackground',
    'enable-background': 'enableBackground',
    externalresourcesrequired: 'externalResourcesRequired',
    fillopacity: 'fillOpacity',
    'fill-opacity': 'fillOpacity',
    fillrule: 'fillRule',
    'fill-rule': 'fillRule',
    filterres: 'filterRes',
    filterunits: 'filterUnits',
    floodopacity: 'floodOpacity',
    'flood-opacity': 'floodOpacity',
    floodcolor: 'floodColor',
    'flood-color': 'floodColor',
    fontfamily: 'fontFamily',
    'font-family': 'fontFamily',
    fontsize: 'fontSize',
    'font-size': 'fontSize',
    fontsizeadjust: 'fontSizeAdjust',
    'font-size-adjust': 'fontSizeAdjust',
    fontstretch: 'fontStretch',
    'font-stretch': 'fontStretch',
    fontstyle: 'fontStyle',
    'font-style': 'fontStyle',
    fontvariant: 'fontVariant',
    'font-variant': 'fontVariant',
    fontweight: 'fontWeight',
    'font-weight': 'fontWeight',
    glyphname: 'glyphName',
    'glyph-name': 'glyphName',
    glyphorientationhorizontal: 'glyphOrientationHorizontal',
    'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
    glyphorientationvertical: 'glyphOrientationVertical',
    'glyph-orientation-vertical': 'glyphOrientationVertical',
    glyphref: 'glyphRef',
    gradienttransform: 'gradientTransform',
    gradientunits: 'gradientUnits',
    horizadvx: 'horizAdvX',
    'horiz-adv-x': 'horizAdvX',
    horizoriginx: 'horizOriginX',
    'horiz-origin-x': 'horizOriginX',
    imagerendering: 'imageRendering',
    'image-rendering': 'imageRendering',
    kernelmatrix: 'kernelMatrix',
    kernelunitlength: 'kernelUnitLength',
    keypoints: 'keyPoints',
    keysplines: 'keySplines',
    keytimes: 'keyTimes',
    lengthadjust: 'lengthAdjust',
    letterspacing: 'letterSpacing',
    'letter-spacing': 'letterSpacing',
    lightingcolor: 'lightingColor',
    'lighting-color': 'lightingColor',
    limitingconeangle: 'limitingConeAngle',
    markerend: 'markerEnd',
    'marker-end': 'markerEnd',
    markerheight: 'markerHeight',
    markermid: 'markerMid',
    'marker-mid': 'markerMid',
    markerstart: 'markerStart',
    'marker-start': 'markerStart',
    markerunits: 'markerUnits',
    markerwidth: 'markerWidth',
    maskcontentunits: 'maskContentUnits',
    maskunits: 'maskUnits',
    numoctaves: 'numOctaves',
    overlineposition: 'overlinePosition',
    'overline-position': 'overlinePosition',
    overlinethickness: 'overlineThickness',
    'overline-thickness': 'overlineThickness',
    paintorder: 'paintOrder',
    'paint-order': 'paintOrder',
    'panose-1': 'panose1',
    pathlength: 'pathLength',
    patterncontentunits: 'patternContentUnits',
    patterntransform: 'patternTransform',
    patternunits: 'patternUnits',
    pointerevents: 'pointerEvents',
    'pointer-events': 'pointerEvents',
    pointsatx: 'pointsAtX',
    pointsaty: 'pointsAtY',
    pointsatz: 'pointsAtZ',
    preservealpha: 'preserveAlpha',
    preserveaspectratio: 'preserveAspectRatio',
    primitiveunits: 'primitiveUnits',
    refx: 'refX',
    refy: 'refY',
    renderingintent: 'renderingIntent',
    'rendering-intent': 'renderingIntent',
    repeatcount: 'repeatCount',
    repeatdur: 'repeatDur',
    requiredextensions: 'requiredExtensions',
    requiredfeatures: 'requiredFeatures',
    shaperendering: 'shapeRendering',
    'shape-rendering': 'shapeRendering',
    specularconstant: 'specularConstant',
    specularexponent: 'specularExponent',
    spreadmethod: 'spreadMethod',
    startoffset: 'startOffset',
    stddeviation: 'stdDeviation',
    stitchtiles: 'stitchTiles',
    stopcolor: 'stopColor',
    'stop-color': 'stopColor',
    stopopacity: 'stopOpacity',
    'stop-opacity': 'stopOpacity',
    strikethroughposition: 'strikethroughPosition',
    'strikethrough-position': 'strikethroughPosition',
    strikethroughthickness: 'strikethroughThickness',
    'strikethrough-thickness': 'strikethroughThickness',
    strokedasharray: 'strokeDasharray',
    'stroke-dasharray': 'strokeDasharray',
    strokedashoffset: 'strokeDashoffset',
    'stroke-dashoffset': 'strokeDashoffset',
    strokelinecap: 'strokeLinecap',
    'stroke-linecap': 'strokeLinecap',
    strokelinejoin: 'strokeLinejoin',
    'stroke-linejoin': 'strokeLinejoin',
    strokemiterlimit: 'strokeMiterlimit',
    'stroke-miterlimit': 'strokeMiterlimit',
    strokewidth: 'strokeWidth',
    'stroke-width': 'strokeWidth',
    strokeopacity: 'strokeOpacity',
    'stroke-opacity': 'strokeOpacity',
    suppresscontenteditablewarning: 'suppressContentEditableWarning',
    suppresshydrationwarning: 'suppressHydrationWarning',
    surfacescale: 'surfaceScale',
    systemlanguage: 'systemLanguage',
    tablevalues: 'tableValues',
    targetx: 'targetX',
    targety: 'targetY',
    textanchor: 'textAnchor',
    'text-anchor': 'textAnchor',
    textdecoration: 'textDecoration',
    'text-decoration': 'textDecoration',
    textlength: 'textLength',
    textrendering: 'textRendering',
    'text-rendering': 'textRendering',
    underlineposition: 'underlinePosition',
    'underline-position': 'underlinePosition',
    underlinethickness: 'underlineThickness',
    'underline-thickness': 'underlineThickness',
    unicodebidi: 'unicodeBidi',
    'unicode-bidi': 'unicodeBidi',
    unicoderange: 'unicodeRange',
    'unicode-range': 'unicodeRange',
    unitsperem: 'unitsPerEm',
    'units-per-em': 'unitsPerEm',
    unselectable: 'unselectable',
    valphabetic: 'vAlphabetic',
    'v-alphabetic': 'vAlphabetic',
    vectoreffect: 'vectorEffect',
    'vector-effect': 'vectorEffect',
    vertadvy: 'vertAdvY',
    'vert-adv-y': 'vertAdvY',
    vertoriginx: 'vertOriginX',
    'vert-origin-x': 'vertOriginX',
    vertoriginy: 'vertOriginY',
    'vert-origin-y': 'vertOriginY',
    vhanging: 'vHanging',
    'v-hanging': 'vHanging',
    videographic: 'vIdeographic',
    'v-ideographic': 'vIdeographic',
    viewbox: 'viewBox',
    viewtarget: 'viewTarget',
    vmathematical: 'vMathematical',
    'v-mathematical': 'vMathematical',
    wordspacing: 'wordSpacing',
    'word-spacing': 'wordSpacing',
    writingmode: 'writingMode',
    'writing-mode': 'writingMode',
    xchannelselector: 'xChannelSelector',
    xheight: 'xHeight',
    'x-height': 'xHeight',
    xlinkactuate: 'xlinkActuate',
    'xlink:actuate': 'xlinkActuate',
    xlinkarcrole: 'xlinkArcrole',
    'xlink:arcrole': 'xlinkArcrole',
    xlinkhref: 'xlinkHref',
    'xlink:href': 'xlinkHref',
    xlinkrole: 'xlinkRole',
    'xlink:role': 'xlinkRole',
    xlinkshow: 'xlinkShow',
    'xlink:show': 'xlinkShow',
    xlinktitle: 'xlinkTitle',
    'xlink:title': 'xlinkTitle',
    xlinktype: 'xlinkType',
    'xlink:type': 'xlinkType',
    xmlbase: 'xmlBase',
    'xml:base': 'xmlBase',
    xmllang: 'xmlLang',
    'xml:lang': 'xmlLang',
    'xml:space': 'xmlSpace',
    xmlnsxlink: 'xmlnsXlink',
    'xmlns:xlink': 'xmlnsXlink',
    xmlspace: 'xmlSpace',
    ychannelselector: 'yChannelSelector',
    zoomandpan: 'zoomAndPan',
    // event handlers
    onblur: 'onBlur',
    onchange: 'onChange',
    onclick: 'onClick',
    oncontextmenu: 'onContextMenu',
    ondoubleclick: 'onDoubleClick',
    ondrag: 'onDrag',
    ondragend: 'onDragEnd',
    ondragenter: 'onDragEnter',
    ondragexit: 'onDragExit',
    ondragleave: 'onDragLeave',
    ondragover: 'onDragOver',
    ondragstart: 'onDragStart',
    ondrop: 'onDrop',
    onerror: 'onError',
    onfocus: 'onFocus',
    oninput: 'onInput',
    oninvalid: 'onInvalid',
    onkeydown: 'onKeyDown',
    onkeypress: 'onKeyPress',
    onkeyup: 'onKeyUp',
    onload: 'onLoad',
    onmousedown: 'onMouseDown',
    onmouseenter: 'onMouseEnter',
    onmouseleave: 'onMouseLeave',
    onmousemove: 'onMouseMove',
    onmouseout: 'onMouseOut',
    onmouseover: 'onMouseOver',
    onmouseup: 'onMouseUp',
    onscroll: 'onScroll',
    onsubmit: 'onSubmit',
    ontouchcancel: 'onTouchCancel',
    ontouchend: 'onTouchEnd',
    ontouchmove: 'onTouchMove',
    ontouchstart: 'onTouchStart',
    onwheel: 'onWheel',
};
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ 60661:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.convertFromString = exports.convertFromNode = void 0;
/* eslint-disable @typescript-eslint/no-use-before-define */
var React = __webpack_require__(18038);
var helpers_1 = __webpack_require__(483);
function parseAttributes(node, reactKey) {
    var attributes = {
        key: reactKey,
    };
    /* istanbul ignore else */
    if (node instanceof Element) {
        var nodeClassNames = node.getAttribute('class');
        if (nodeClassNames) {
            attributes.className = nodeClassNames;
        }
        __spreadArray([], __read(node.attributes), false).forEach(function (d) {
            switch (d.name) {
                // this is manually handled above, so break;
                case 'class':
                    break;
                case 'style':
                    attributes[d.name] = (0, helpers_1.styleToObject)(d.value);
                    break;
                case 'allowfullscreen':
                case 'allowpaymentrequest':
                case 'async':
                case 'autofocus':
                case 'autoplay':
                case 'checked':
                case 'controls':
                case 'default':
                case 'defer':
                case 'disabled':
                case 'formnovalidate':
                case 'hidden':
                case 'ismap':
                case 'itemscope':
                case 'loop':
                case 'multiple':
                case 'muted':
                case 'nomodule':
                case 'novalidate':
                case 'open':
                case 'readonly':
                case 'required':
                case 'reversed':
                case 'selected':
                case 'typemustmatch':
                    attributes[helpers_1.possibleStandardNames[d.name] || d.name] = true;
                    break;
                default:
                    attributes[helpers_1.possibleStandardNames[d.name] || d.name] = d.value;
            }
        });
    }
    return attributes;
}
function parseChildren(childNodeList, level, options) {
    var children = __spreadArray([], __read(childNodeList), false).map(function (node, index) {
        return convertFromNode(node, __assign(__assign({}, options), { index: index, level: level + 1 }));
    })
        .filter(Boolean);
    if (!children.length) {
        return null;
    }
    return children;
}
function parseName(nodeName) {
    if (/[a-z]+[A-Z]+[a-z]+/.test(nodeName)) {
        return nodeName;
    }
    return nodeName.toLowerCase();
}
function convertFromNode(input, options) {
    var _a;
    if (options === void 0) { options = {}; }
    if (!input || !(input instanceof Node)) {
        return null;
    }
    var _b = options.actions, actions = _b === void 0 ? [] : _b, _c = options.index, index = _c === void 0 ? 0 : _c, _d = options.level, level = _d === void 0 ? 0 : _d, randomKey = options.randomKey;
    var node = input;
    var key = "".concat(level, "-").concat(index);
    var result = [];
    if (randomKey && level === 0) {
        key = "".concat((0, helpers_1.randomString)(), "-").concat(key);
    }
    /* istanbul ignore else */
    if (Array.isArray(actions)) {
        actions.forEach(function (action) {
            if (action.condition(node, key, level)) {
                if (typeof action.pre === 'function') {
                    node = action.pre(node, key, level);
                    if (!(node instanceof Node)) {
                        node = input;
                        /* istanbul ignore else */
                        if (false) {}
                    }
                }
                if (typeof action.post === 'function') {
                    result.push(action.post(node, key, level));
                }
            }
        });
    }
    if (result.length) {
        return result;
    }
    switch (node.nodeType) {
        case 1: {
            // regular dom-node
            return React.createElement(parseName(node.nodeName), parseAttributes(node, key), parseChildren(node.childNodes, level, options));
        }
        case 3: {
            // textnode
            var nodeText = ((_a = node.nodeValue) === null || _a === void 0 ? void 0 : _a.toString()) || '';
            /* istanbul ignore else */
            if (/^\s+$/.test(nodeText) && !/[\u00A0\u202F]/.test(nodeText)) {
                return null;
            }
            /* istanbul ignore next */
            if (!node.parentNode) {
                return nodeText;
            }
            var parentNodeName = node.parentNode.nodeName.toLowerCase();
            if (helpers_1.noTextChildNodes.includes(parentNodeName)) {
                /* istanbul ignore else */
                if (/\S/.test(nodeText)) {
                    // eslint-disable-next-line no-console
                    console.warn("A textNode is not allowed inside '".concat(parentNodeName, "'. Your text \"").concat(nodeText, "\" will be ignored"));
                }
                return null;
            }
            return nodeText;
        }
        case 8: {
            // html-comment
            return null;
        }
        /* istanbul ignore next */
        default: {
            return null;
        }
    }
}
exports.convertFromNode = convertFromNode;
function convertFromString(input, options) {
    if (options === void 0) { options = {}; }
    if (!input || typeof input !== 'string') {
        return null;
    }
    var _a = options.nodeOnly, nodeOnly = _a === void 0 ? false : _a, _b = options.selector, selector = _b === void 0 ? 'body > *' : _b, _c = options.type, type = _c === void 0 ? 'text/html' : _c;
    try {
        var parser = new DOMParser();
        var document_1 = parser.parseFromString(input, type);
        var node = document_1.querySelector(selector);
        if (!(node instanceof Node)) {
            throw new TypeError('Error parsing input');
        }
        if (nodeOnly) {
            return node;
        }
        return convertFromNode(node, options);
    }
    catch (error) {
        /* istanbul ignore else */
        if (false) {}
    }
    return null;
}
exports.convertFromString = convertFromString;
function convert(input, options) {
    if (options === void 0) { options = {}; }
    if (typeof input === 'string') {
        return convertFromString(input, options);
    }
    if (input instanceof Node) {
        return convertFromNode(input, options);
    }
    return null;
}
exports["default"] = convert;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 72856:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ InlineSVG)
/* harmony export */ });
/* unused harmony export cacheStore */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var react_from_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60661);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56786);
"use client";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// src/index.tsx



// src/config.ts
var CACHE_NAME = "react-inlinesvg";
var CACHE_MAX_RETRIES = 10;
var STATUS = {
  IDLE: "idle",
  LOADING: "loading",
  LOADED: "loaded",
  FAILED: "failed",
  READY: "ready",
  UNSUPPORTED: "unsupported"
};

// src/modules/helpers.ts
function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
function isSupportedEnvironment() {
  return supportsInlineSVG() && typeof window !== "undefined" && window !== null;
}
async function request(url, options) {
  const response = await fetch(url, options);
  const contentType = response.headers.get("content-type");
  const [fileType] = (contentType ?? "").split(/ ?; ?/);
  if (response.status > 299) {
    throw new Error("Not found");
  }
  if (!["image/svg+xml", "text/plain"].some((d) => fileType.includes(d))) {
    throw new Error(`Content type isn't valid: ${fileType}`);
  }
  return response.text();
}
function sleep(seconds = 1) {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1e3);
  });
}
function supportsInlineSVG() {
  if (!document) {
    return false;
  }
  const div = document.createElement("div");
  div.innerHTML = "<svg />";
  const svg = div.firstChild;
  return !!svg && svg.namespaceURI === "http://www.w3.org/2000/svg";
}
function randomCharacter(character) {
  return character[Math.floor(Math.random() * character.length)];
}
function randomString(length) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "1234567890";
  const charset = `${letters}${letters.toUpperCase()}${numbers}`;
  let R = "";
  for (let index = 0; index < length; index++) {
    R += randomCharacter(charset);
  }
  return R;
}
function omit(input, ...filter) {
  const output = {};
  for (const key in input) {
    if ({}.hasOwnProperty.call(input, key)) {
      if (!filter.includes(key)) {
        output[key] = input[key];
      }
    }
  }
  return output;
}

// src/modules/cache.ts
var CacheStore = class {
  constructor() {
    __publicField(this, "cacheApi");
    __publicField(this, "cacheStore");
    __publicField(this, "subscribers", []);
    __publicField(this, "isReady", false);
    this.cacheStore = /* @__PURE__ */ new Map();
    let cacheName = CACHE_NAME;
    let usePersistentCache = false;
    if (canUseDOM()) {
      cacheName = window.REACT_INLINESVG_CACHE_NAME ?? CACHE_NAME;
      usePersistentCache = !!window.REACT_INLINESVG_PERSISTENT_CACHE && "caches" in window;
    }
    if (usePersistentCache) {
      caches.open(cacheName).then((cache) => {
        this.cacheApi = cache;
        this.isReady = true;
        this.subscribers.forEach((callback) => callback());
      }).catch((error) => {
        this.isReady = true;
        console.error(`Failed to open cache: ${error.message}`);
      });
    } else {
      this.isReady = true;
    }
  }
  onReady(callback) {
    if (this.isReady) {
      callback();
    } else {
      this.subscribers.push(callback);
    }
  }
  async get(url, fetchOptions) {
    await (this.cacheApi ? this.fetchAndAddToPersistentCache(url, fetchOptions) : this.fetchAndAddToInternalCache(url, fetchOptions));
    return this.cacheStore.get(url)?.content ?? "";
  }
  set(url, data) {
    this.cacheStore.set(url, data);
  }
  isCached(url) {
    return this.cacheStore.get(url)?.status === STATUS.LOADED;
  }
  async fetchAndAddToInternalCache(url, fetchOptions) {
    const cache = this.cacheStore.get(url);
    if (cache?.status === STATUS.LOADING) {
      await this.handleLoading(url, async () => {
        this.cacheStore.set(url, { content: "", status: STATUS.IDLE });
        await this.fetchAndAddToInternalCache(url, fetchOptions);
      });
      return;
    }
    if (!cache?.content) {
      this.cacheStore.set(url, { content: "", status: STATUS.LOADING });
      try {
        const content = await request(url, fetchOptions);
        this.cacheStore.set(url, { content, status: STATUS.LOADED });
      } catch (error) {
        this.cacheStore.set(url, { content: "", status: STATUS.FAILED });
        throw error;
      }
    }
  }
  async fetchAndAddToPersistentCache(url, fetchOptions) {
    const cache = this.cacheStore.get(url);
    if (cache?.status === STATUS.LOADED) {
      return;
    }
    if (cache?.status === STATUS.LOADING) {
      await this.handleLoading(url, async () => {
        this.cacheStore.set(url, { content: "", status: STATUS.IDLE });
        await this.fetchAndAddToPersistentCache(url, fetchOptions);
      });
      return;
    }
    this.cacheStore.set(url, { content: "", status: STATUS.LOADING });
    const data = await this.cacheApi?.match(url);
    if (data) {
      const content = await data.text();
      this.cacheStore.set(url, { content, status: STATUS.LOADED });
      return;
    }
    try {
      await this.cacheApi?.add(new Request(url, fetchOptions));
      const response = await this.cacheApi?.match(url);
      const content = await response?.text() ?? "";
      this.cacheStore.set(url, { content, status: STATUS.LOADED });
    } catch (error) {
      this.cacheStore.set(url, { content: "", status: STATUS.FAILED });
      throw error;
    }
  }
  async handleLoading(url, callback) {
    let retryCount = 0;
    while (this.cacheStore.get(url)?.status === STATUS.LOADING && retryCount < CACHE_MAX_RETRIES) {
      await sleep(0.1);
      retryCount += 1;
    }
    if (retryCount >= CACHE_MAX_RETRIES) {
      await callback();
    }
  }
  keys() {
    return [...this.cacheStore.keys()];
  }
  data() {
    return [...this.cacheStore.entries()].map(([key, value]) => ({ [key]: value }));
  }
  async delete(url) {
    if (this.cacheApi) {
      await this.cacheApi.delete(url);
    }
    this.cacheStore.delete(url);
  }
  async clear() {
    if (this.cacheApi) {
      const keys = await this.cacheApi.keys();
      for (const key of keys) {
        await this.cacheApi.delete(key);
      }
    }
    this.cacheStore.clear();
  }
};

// src/modules/hooks.tsx

function usePrevious(state) {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    ref.current = state;
  });
  return ref.current;
}

// src/modules/utils.ts

function getNode(options) {
  const {
    baseURL,
    content,
    description,
    handleError,
    hash,
    preProcessor,
    title,
    uniquifyIDs = false
  } = options;
  try {
    const svgText = processSVG(content, preProcessor);
    const node = react_from_dom__WEBPACK_IMPORTED_MODULE_1__(svgText, { nodeOnly: true });
    if (!node || !(node instanceof SVGSVGElement)) {
      throw new Error("Could not convert the src to a DOM Node");
    }
    const svg = updateSVGAttributes(node, { baseURL, hash, uniquifyIDs });
    if (description) {
      const originalDesc = svg.querySelector("desc");
      if (originalDesc?.parentNode) {
        originalDesc.parentNode.removeChild(originalDesc);
      }
      const descElement = document.createElementNS("http://www.w3.org/2000/svg", "desc");
      descElement.innerHTML = description;
      svg.prepend(descElement);
    }
    if (typeof title !== "undefined") {
      const originalTitle = svg.querySelector("title");
      if (originalTitle?.parentNode) {
        originalTitle.parentNode.removeChild(originalTitle);
      }
      if (title) {
        const titleElement = document.createElementNS("http://www.w3.org/2000/svg", "title");
        titleElement.innerHTML = title;
        svg.prepend(titleElement);
      }
    }
    return svg;
  } catch (error) {
    return handleError(error);
  }
}
function processSVG(content, preProcessor) {
  if (preProcessor) {
    return preProcessor(content);
  }
  return content;
}
function updateSVGAttributes(node, options) {
  const { baseURL = "", hash, uniquifyIDs } = options;
  const replaceableAttributes = ["id", "href", "xlink:href", "xlink:role", "xlink:arcrole"];
  const linkAttributes = ["href", "xlink:href"];
  const isDataValue = (name, value) => linkAttributes.includes(name) && (value ? !value.includes("#") : false);
  if (!uniquifyIDs) {
    return node;
  }
  [...node.children].forEach((d) => {
    if (d.attributes?.length) {
      const attributes = Object.values(d.attributes).map((a) => {
        const attribute = a;
        const match = /url\((.*?)\)/.exec(a.value);
        if (match?.[1]) {
          attribute.value = a.value.replace(match[0], `url(${baseURL}${match[1]}__${hash})`);
        }
        return attribute;
      });
      replaceableAttributes.forEach((r) => {
        const attribute = attributes.find((a) => a.name === r);
        if (attribute && !isDataValue(r, attribute.value)) {
          attribute.value = `${attribute.value}__${hash}`;
        }
      });
    }
    if (d.children.length) {
      return updateSVGAttributes(d, options);
    }
    return d;
  });
  return node;
}

// src/index.tsx

var cacheStore;
function ReactInlineSVG(props) {
  const {
    cacheRequests = true,
    children = null,
    description,
    fetchOptions,
    innerRef,
    loader = null,
    onError,
    onLoad,
    src,
    title,
    uniqueHash
  } = props;
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(
    (previousState2, nextState) => ({
      ...previousState2,
      ...nextState
    }),
    {
      content: "",
      element: null,
      isCached: cacheRequests && cacheStore.isCached(props.src),
      status: STATUS.IDLE
    }
  );
  const { content, element, isCached, status } = state;
  const previousProps = usePrevious(props);
  const previousState = usePrevious(state);
  const hash = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(uniqueHash ?? randomString(8));
  const isActive = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const isInitialized = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const handleError = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
    (error) => {
      if (isActive.current) {
        setState({
          status: error.message === "Browser does not support SVG" ? STATUS.UNSUPPORTED : STATUS.FAILED
        });
        onError?.(error);
      }
    },
    [onError]
  );
  const handleLoad = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((loadedContent, hasCache = false) => {
    if (isActive.current) {
      setState({
        content: loadedContent,
        isCached: hasCache,
        status: STATUS.LOADED
      });
    }
  }, []);
  const fetchContent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    const responseContent = await request(src, fetchOptions);
    handleLoad(responseContent);
  }, [fetchOptions, handleLoad, src]);
  const getElement = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    try {
      const node = getNode({ ...props, handleError, hash: hash.current, content });
      const convertedElement = react_from_dom__WEBPACK_IMPORTED_MODULE_1__(node);
      if (!convertedElement || !(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(convertedElement)) {
        throw new Error("Could not convert the src to a React element");
      }
      setState({
        element: convertedElement,
        status: STATUS.READY
      });
    } catch (error) {
      handleError(new Error(error.message));
    }
  }, [content, handleError, props]);
  const getContent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    const dataURI = /^data:image\/svg[^,]*?(;base64)?,(.*)/u.exec(src);
    let inlineSrc;
    if (dataURI) {
      inlineSrc = dataURI[1] ? window.atob(dataURI[2]) : decodeURIComponent(dataURI[2]);
    } else if (src.includes("<svg")) {
      inlineSrc = src;
    }
    if (inlineSrc) {
      handleLoad(inlineSrc);
      return;
    }
    try {
      if (cacheRequests) {
        const cachedContent = await cacheStore.get(src, fetchOptions);
        handleLoad(cachedContent, true);
      } else {
        await fetchContent();
      }
    } catch (error) {
      handleError(error);
    }
  }, [cacheRequests, fetchContent, fetchOptions, handleError, handleLoad, src]);
  const load = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    if (isActive.current) {
      setState({
        content: "",
        element: null,
        isCached: false,
        status: STATUS.LOADING
      });
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(
    () => {
      isActive.current = true;
      if (!canUseDOM() || isInitialized.current) {
        return () => void 0;
      }
      try {
        if (status === STATUS.IDLE) {
          if (!isSupportedEnvironment()) {
            throw new Error("Browser does not support SVG");
          }
          if (!src) {
            throw new Error("Missing src");
          }
          load();
        }
      } catch (error) {
        handleError(error);
      }
      isInitialized.current = true;
      return () => {
        isActive.current = false;
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!canUseDOM()) {
      return;
    }
    if (!previousProps) {
      return;
    }
    if (previousProps.src !== src) {
      if (!src) {
        handleError(new Error("Missing src"));
        return;
      }
      load();
    } else if (previousProps.title !== title || previousProps.description !== description) {
      getElement();
    }
  }, [description, getElement, handleError, load, previousProps, src, title]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!previousState) {
      return;
    }
    if (previousState.status !== STATUS.LOADING && status === STATUS.LOADING) {
      getContent();
    }
    if (previousState.status !== STATUS.LOADED && status === STATUS.LOADED) {
      getElement();
    }
    if (previousState.status !== STATUS.READY && status === STATUS.READY) {
      onLoad?.(src, isCached);
    }
  }, [getContent, getElement, isCached, onLoad, previousState, src, status]);
  const elementProps = omit(
    props,
    "baseURL",
    "cacheRequests",
    "children",
    "description",
    "fetchOptions",
    "innerRef",
    "loader",
    "onError",
    "onLoad",
    "preProcessor",
    "src",
    "title",
    "uniqueHash",
    "uniquifyIDs"
  );
  if (!canUseDOM()) {
    return loader;
  }
  if (element) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(element, { ref: innerRef, ...elementProps });
  }
  if ([STATUS.UNSUPPORTED, STATUS.FAILED].includes(status)) {
    return children;
  }
  return loader;
}
function InlineSVG(props) {
  if (!cacheStore) {
    cacheStore = new CacheStore();
  }
  const { loader } = props;
  const hasCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const [isReady, setReady] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(cacheStore.isReady);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!hasCallback.current) {
      cacheStore.onReady(() => {
        setReady(true);
      });
      hasCallback.current = true;
    }
  }, []);
  if (!isReady) {
    return loader;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ReactInlineSVG, { ...props });
}

//# sourceMappingURL=index.mjs.map

/***/ })

};
;