(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[233],{40359:function(t,e,r){Promise.resolve().then(r.bind(r,52647))},80366:function(t,e,r){"use strict";r.d(e,{G:function(){return l},c:function(){return c}});var n=r(70165),s=r(83718),i=r(70157),a=r(55764);function l(){let t=(0,n.NL)();return{useQueryFxn:function(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return(0,s.a)({queryKey:t,queryFn:e,...r})},useMutationFxn:function(e,r,n){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return(0,a.D)({mutationKey:e,mutationFn:n,onMutate:()=>{r(!0)},onSettled:()=>{t.invalidateQueries(e),r(!1)},...s})},useQueriesFxn:function(t,e,r){return(0,i.h)({queries:t.map(t=>({queryKey:[r],queryFn:()=>e(t)}))})}}}function c(){return"https://api.everyeventdelivery.com/v1"}},52647:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return d}});var n=r(57437),s=r(13578),i=r(87188),a=r(2265),l=r(3614),c=r(29222),w=r(80366),u=r(95457);function d(){let[t,e]=(0,a.useState)([]),[r,d]=(0,a.useState)([]),[o,m]=(0,a.useState)(""),{useQueryFxn:x,useMutationFxn:h}=(0,w.G)(),f=x(["careers"],()=>c.Z.get("".concat((0,w.c)(),"/user/careers")).then(t=>{let r=t.data.data;return e(r),d(r),console.log("result",r),t.data}).catch(t=>(console.log("fetchFAQs error",t),t)),{enabled:!0});return(0,n.jsxs)("main",{className:"tw-p-[4rem] md:tw-px-[0] tw-bg-cover tw-bg-no-repeat",style:{backgroundImage:"url('/hero-image-bg.svg')"},children:[(0,n.jsxs)("div",{className:"tw-w-full tw-pt-[6rem] tw-pb-[4rem] tw-bg-cover  md:tw-pb-[2rem] md:tw-pt-[4rem]",children:[(0,n.jsx)("div",{className:"tw-p-[3rem] tw-h-[400px] tw-w-full tw-grid tw-place-items-center tw-bg-p1 tw-bgcover tw-bg-center tw-rounded-[20px] md:tw-rounded-[0] md:tw-p-[1.25rem] md:tw-h-[240px]",style:{backgroundImage:"url('/page-bg.png')"},children:(0,n.jsxs)("div",{className:"tw-text-center",children:[(0,n.jsx)("h4",{className:"tw-text-60 tw-text-white tw-font-bold md:tw-text-40",children:"Career"}),(0,n.jsx)("p",{className:"tw-mt-[rem] tw-text-white",children:"Become a part of our big family to inspire and get inspired by professional experts."}),(0,n.jsxs)("div",{className:"tw-w-full tw-max-w-[669px] tw-bg-white tw-px-[.5rem] tw-h-[3.5rem] tw-flex tw-items-center tw-gap-[1rem] tw-rounded-[10px] tw-mt-[1rem]",children:[(0,n.jsx)(i.ZP,{placeholder:"Search",bordered:!1,onChangeHandler:e=>{d((0,l.$)(t,e)),m(e)}}),(0,n.jsx)("button",{className:"tw-ml-[auto] tw-text-center tw-bg-p1 tw-text-white tw-px-[2rem] tw-h-[40px] tw-rounded-[6px]",onClick:()=>{},children:"Search"})]})]})}),(0,n.jsxs)("div",{className:"tw-w-full tw-b-white tw-p-[6rem_0] tw-rounded-[10px] md:tw-p-[2rem_1rem]",children:[(0,n.jsx)("h4",{className:"tw-text-24 tw-font-bold",children:t.length===r.length?"All Jobs":o&&"Search results for '".concat(o,"'")}),f.isLoading?(0,n.jsx)(u.C,{className:"tw-my-[8rem] tw-h-[2rem]"}):(0,n.jsx)("div",{className:"tw-grid tw-grid-cols-autoFit_360 md:tw-grid-cols-autoFit_300 tw-gap-[1.5rem] tw-mt-[2rem]",children:r.length?r.map((t,e)=>(0,n.jsxs)("div",{className:"tw-bg-white tw-flex tw-flex-col tw-p-[1.5rem] tw-border tw-border-[#D6DDEB]",children:[(0,n.jsx)("a",{href:"/careers/".concat(t.slug),className:"tw-font-bold tw-text-24 tw-border-b tw-border-b-[rgba(0,0,0,0.1)] tw-pb-[1rem] md:tw-text-18",children:t.title}),(0,n.jsx)("div",{className:"tw-text-[#272727] tw-mt-[1.5rem] tw-flex tw-flex-col tw-gap-[.75rem]",children:(0,n.jsx)("p",{className:"tw-text-14 tw-mb-[2rem] tw-line-clamp-4",dangerouslySetInnerHTML:{__html:t.description}})}),(0,n.jsx)(s.PrimaryButton,{label:"Apply Now",onClickHandler:()=>{},link:"/careers/".concat(t.slug),className:"tw-ml-[auto] tw-w-[fit-content] tw-mt-[auto]"})]},e)):(0,n.jsx)("p",{className:"",children:"Nothing found"})})]})]}),(0,n.jsx)("div",{className:"tw"})]})}},95457:function(t,e,r){"use strict";r.d(e,{C:function(){return i},L:function(){return s}});var n=r(57437);let s=t=>{let{isActive:e=!1,...r}=t;return(0,n.jsxs)("svg",{className:"tw-animate-spin -tw-ml-1 tw-mr-3 tw-h-5 tw-w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",...r,children:[(0,n.jsx)("circle",{className:"tw-opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,n.jsx)("path",{className:"tw-opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})},i=t=>{let{isActive:e=!1,...r}=t;return(0,n.jsx)("div",{className:"tw-w-full tw-mx-[auto] tw-grid tw-place-items-center",children:(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"80",height:"80",viewBox:"0 0 135 140",fill:"#fff",className:"tw-h-[2rem] tw-mx-[auto]",...r,children:[(0,n.jsxs)("rect",{y:"10",width:"15",height:"120",rx:"6",fill:"rgba(0,0,0,.1)",children:[(0,n.jsx)("animate",{attributeName:"height",begin:"0.5s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),(0,n.jsx)("animate",{attributeName:"y",begin:"0.5s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})]}),(0,n.jsxs)("rect",{x:"60",width:"15",height:"140",rx:"6",fill:"rgba(0,0,0,.1)",children:[(0,n.jsx)("animate",{attributeName:"height",begin:"0s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),(0,n.jsx)("animate",{attributeName:"y",begin:"0s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})]}),(0,n.jsxs)("rect",{x:"90",y:"10",width:"15",height:"120",rx:"6",fill:"rgba(0,0,0,.1)",children:[(0,n.jsx)("animate",{attributeName:"height",begin:"0.25s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),(0,n.jsx)("animate",{attributeName:"y",begin:"0.25s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})]}),(0,n.jsxs)("rect",{x:"30",y:"10",width:"15",height:"120",rx:"6",fill:"rgba(0,0,0,.1)",children:[(0,n.jsx)("animate",{attributeName:"height",begin:"0.25s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),(0,n.jsx)("animate",{attributeName:"y",begin:"0.25s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})]}),(0,n.jsxs)("rect",{x:"120",y:"10",width:"15",height:"120",rx:"6",fill:"rgba(0,0,0,.1)",children:[(0,n.jsx)("animate",{attributeName:"height",begin:"0.5s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),(0,n.jsx)("animate",{attributeName:"y",begin:"0.5s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})]})]})})}},3614:function(t,e,r){"use strict";function n(t,e){if(!e)return t;{let r=t.filter((t,r)=>{for(let[r,n]of Object.entries(t))if(t[r].toString().toLowerCase().includes(e.toLowerCase()))return!0});return r}}r.d(e,{$:function(){return n}})},13578:function(t,e,r){"use strict";r.r(e),r.d(e,{OutlineButton:function(){return x},PrimaryButton:function(){return w},PrimaryErrorButton:function(){return u},SecondaryButton:function(){return o},SecondaryDangerButton:function(){return d},SubmitButton:function(){return c},TransparentButton:function(){return m}});var n=r(57437),s=r(16691),i=r.n(s),a=r(2265),l=r(95457);let c=t=>{let{label:e,link:r="",footnote:s="",footnoteCTA:i="",footnoteCTALink:c="#",onClickHandler:w=()=>{},isDisabled:u=!1,isLoading:d=!1,...o}=t,m=(0,a.useRef)(null);return(0,a.useEffect)(()=>{null!==m.current&&(m.current.disabled=u)},[u]),(0,n.jsxs)("div",{...o,children:[(0,n.jsx)("button",{className:"tw-text-center ".concat(u?"tw-bg-pdisabled":"tw-bg-p1"," tw-font-medium tw-text-16 tw-text-white tw-px-[1rem] tw-h-[44px] tw-grid tw-place-items-center tw-rounded-[8px] tw-w-[100%]"),onClick:w,ref:m,children:d?(0,n.jsx)(l.L,{}):r?(0,n.jsx)("a",{href:r,className:"tw",children:e}):e}),s&&(0,n.jsxs)("div",{className:"tw-mt-[1.25rem] tw-text-neutral-5 tw-text-1416",children:[s," ",(0,n.jsx)("a",{className:"tw-text-purple2 tw-font-medium",href:c,children:i})]})]})},w=t=>{let{classNames:e="",label:r,link:s="",onClickHandler:i=()=>{},isDisabled:c=!1,isLoading:w=!1,...u}=t,d=(0,a.useRef)(null);return(0,a.useEffect)(()=>{null!==d.current&&(d.current.disabled=c)},[c]),(0,n.jsx)("div",{...u,children:(0,n.jsx)("button",{className:"tw-text-center ".concat(c?"tw-bg-pdisabled":"tw-bg-p1"," tw-font-medium tw-text-16 tw-text-white tw-px-[1rem] tw-h-[44px] tw-grid tw-place-items-center tw-rounded-[8px] tw-w-[100%] ").concat(e),onClick:i,ref:d,children:w?(0,n.jsx)(l.L,{}):s?(0,n.jsx)("a",{href:s,className:"tw",children:r}):r})})},u=t=>{let{link:e="",label:r,onClickHandler:s=()=>{},isDisabled:i=!1,...l}=t,c=(0,a.useRef)(null);return(0,a.useEffect)(()=>{null!==c.current&&(c.current.disabled=i)},[i]),(0,n.jsx)("div",{...l,children:(0,n.jsx)("button",{className:"tw-text-center tw-text-white ".concat(i?"tw-bg-pdisabled":"tw-bg-error"," tw-font-medium tw-text-16 tw-text-white tw-px-[1rem] tw-h-[44px] tw-grid tw-place-items-center tw-rounded-[8px] tw-w-[100%]"),onClick:s,ref:c,children:e?(0,n.jsx)("a",{href:e,className:"tw",children:r}):r})})},d=t=>{let{link:e="",label:r,onClickHandler:s=()=>{},isDisabled:i=!1,...l}=t,c=(0,a.useRef)(null);return(0,a.useEffect)(()=>{null!==c.current&&(c.current.disabled=i)},[i]),(0,n.jsx)("div",{...l,children:(0,n.jsx)("button",{className:"tw-text-center tw-border pointer ".concat(i?"tw-border-pdisabled tw-text-p1/50":"tw-border-error"," tw-font-medium tw-text-16 tw-text-error tw-px-[1rem] tw-h-[44px] tw-grid tw-place-items-center tw-rounded-[8px] tw-w-[100%]"),onClick:s,ref:c,children:e?(0,n.jsx)("a",{href:e,className:"tw",children:r}):r})})},o=t=>{let{link:e="",label:r,onClickHandler:s=()=>{},isDisabled:i=!1,...l}=t,c=(0,a.useRef)(null);return(0,a.useEffect)(()=>{null!==c.current&&(c.current.disabled=i)},[i]),(0,n.jsx)("div",{...l,children:(0,n.jsx)("button",{className:"tw-text-center tw-border ".concat(i?"tw-border-pdisabled tw-text-p1/50":"tw-border-p1 tw-text-p1"," tw-font-medium tw-text-16 tw-text-white tw-px-[1rem] tw-h-[44px] tw-grid tw-place-items-center tw-rounded-[8px] tw-w-[100%]"),onClick:s,ref:c,children:e?(0,n.jsx)("a",{href:e,className:"tw",children:r}):r})})},m=t=>{let{link:e="",label:r,icon:s,onClickHandler:l=()=>{},isDisabled:c=!1,...w}=t,u=(0,a.useRef)(null);return(0,a.useEffect)(()=>{null!==u.current&&(u.current.disabled=c)},[c]),(0,n.jsx)("div",{...w,children:(0,n.jsxs)("button",{className:"tw-text-center tw-text-white tw-border tw-border-white tw-bg-white/50 tw-h-[40px] tw-px-[1rem] tw-flex tw-justify-center tw-items-center tw-gap-[.5rem] tw-rounded-[8px] tw-w-[100%] tw-whitespace-nowrap",onClick:l,ref:u,children:[s&&(0,n.jsx)(i(),{src:s,alt:"",className:"tw"}),(0,n.jsx)("span",{className:"tw",children:e?(0,n.jsx)("a",{href:e,className:"tw",children:r}):r})]})})},x=t=>{let{link:e="",label:r,icon:s,onClickHandler:l=()=>{},isDisabled:c=!1,color:w="#D0D5DD",...u}=t,d=(0,a.useRef)(null);return(0,a.useEffect)(()=>{null!==d.current&&(d.current.disabled=c)},[c]),(0,n.jsx)("div",{...u,children:(0,n.jsxs)("button",{className:"tw-border tw-font-medium tw-text-16 tw-text-white tw-px-[1rem] tw-h-[44px] tw-flex tw-justify-center tw-items-center tw-rounded-[8px] tw-w-[100%]",style:{color:"#344054",borderColor:"#D0D5DD"},onClick:l,ref:d,children:[s&&(0,n.jsx)(i(),{src:s,alt:"",className:"tw"}),(0,n.jsx)("span",{className:"tw",children:e?(0,n.jsx)("a",{href:e,className:"tw",children:r}):r})]})})}},87188:function(t,e,r){"use strict";var n=r(57437);r(2265);var s=r(58812),i=r(16691),a=r.n(i);e.ZP=t=>{let{placeholder:e,onChangeHandler:r,bordered:i=!0}=t;return(0,n.jsxs)("div",{className:"tw-relative sha1 ".concat(i?"tw-border tw-border-[#C8951A]":""," tw-rounded-[.5rem] tw-w-full tw-max-w-[467px]"),children:[(0,n.jsx)(a(),{src:s.Z,alt:"",className:"tw-absolute tw-top-[1rem] tw-left-[0.5rem]"}),(0,n.jsx)("input",{type:"text",placeholder:e,onChange:t=>{r(t.target.value),console.log(t.target.value)},className:"tw-bg-white tw-rounded-[6px] tw-w-full tw-p-[1rem_2.5rem] tw-text-[1rem]"})]})}},58812:function(t,e){"use strict";e.Z={src:"/_next/static/media/search-icon-2.a8fa6b07.svg",height:20,width:20,blurWidth:0,blurHeight:0}}},function(t){t.O(0,[986,509,549,222,971,596,744],function(){return t(t.s=40359)}),_N_E=t.O()}]);