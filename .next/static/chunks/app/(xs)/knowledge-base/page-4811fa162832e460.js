(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[32],{9655:function(e,t,r){Promise.resolve().then(r.bind(r,74991))},80366:function(e,t,r){"use strict";r.d(t,{G:function(){return l},c:function(){return c}});var a=r(70165),i=r(83718),n=r(70157),s=r(55764);function l(){let e=(0,a.NL)();return{useQueryFxn:function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return(0,i.a)({queryKey:e,queryFn:t,...r})},useMutationFxn:function(t,r,a){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return(0,s.D)({mutationKey:t,mutationFn:a,onMutate:()=>{r(!0)},onSettled:()=>{e.invalidateQueries(t),r(!1)},...i})},useQueriesFxn:function(e,t,r){return(0,n.h)({queries:e.map(e=>({queryKey:[r],queryFn:()=>t(e)}))})}}}function c(){return"https://api.everyeventdelivery.com/v1"}},74991:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var a=r(57437),i=r(2265),n=r(58812),s={src:"/_next/static/media/double-right-arrow.06c03dbd.svg",height:24,width:25,blurWidth:0,blurHeight:0},l=r(16691),c=r.n(l),d=e=>{let{helpList:t,onSelect:r}=e,[l,d]=(0,i.useState)(t),[u,o]=(0,i.useState)(t[0]);return(0,i.useEffect)(()=>{r(t[0])},[]),(0,a.jsxs)("div",{className:"tw-w-full tw-pr-[1rem] tw-max-h-[90vh] tw-overflow-y-auto scroll",children:[(0,a.jsxs)("div",{className:"tw-mb-[2rem]",children:[(0,a.jsx)("p",{className:"tw-text-18 tw-font-semiBold tw-text-[#101828]",children:"Search for a question"}),(0,a.jsx)("p",{className:"tw-text-[#667085] tw-text-14",children:"Type your question or search keyword"})]}),(0,a.jsxs)("div",{className:"tw-relative",children:[(0,a.jsx)(c(),{src:n.Z,alt:"",className:"tw-h-[1rem] tw-absolute tw-top-[.75rem] tw-left-[0.75rem]"}),(0,a.jsx)("input",{type:"text",placeholder:"Start typing...",onChange:e=>{if(console.log(e.target.value),e.target.value){let r=t.filter(t=>t.title.toLowerCase().includes(e.target.value)||t.description.toLowerCase().includes(e.target.value));d(r)}else d(t)},className:"tw-bg-white tw-rounded-[4px] tw-w-[100%] tw-p-[.5rem_2.5rem] tw-text-[1rem] tw-border tw-border-p1",style:{boxShadow:"0px 0px 0px 4px #F4EBFF, 0px 1px 2px 0px rgba(16, 24, 40, 0.05)"}}),(0,a.jsx)("div",{className:"tw-mt-[2rem]",children:l.map((e,t)=>(0,a.jsxs)("div",{className:"tw-p-[0_.75rem] tw-h-[44px] tw-rounded-[5px] tw-flex tw-items-center tw-gap-[1rem] tw-justify-between tw-text-neutral-5 pointer  help-arrow-parent ".concat(u.id===e.id?"active":""),onClick:()=>{o(e),r(e)},children:[(0,a.jsx)("p",{className:"tw-text-14",children:e.title}),(0,a.jsx)(c(),{src:s,alt:"",className:"tw-h-[1.5rem]"})]},t))})]})]})},u=r(26022),o=e=>{let{helpObj:t}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"tw-border tw-border-[rgba(0,0,0,0.2)] tw-w-full  tw-p-[3rem] md:tw-p-[1rem]",children:(0,a.jsxs)("div",{className:"tw-bg-white",children:[(0,a.jsx)("h4",{className:"tw-text-18 tw-font-bold tw-mb-[2rem] tw-pb-[1rem] tw-border-b tw-border-b-[rgba(0,0,0,0.1)] ",children:t.title}),(0,a.jsx)(u.x,{defaultValue:t.description})]})})})},w={src:"/_next/static/media/cancel.f23f6288.svg",height:24,width:24,blurWidth:0,blurHeight:0},h=r(29222),m=r(80366),x=r(95457);function p(){let[e,t]=(0,i.useState)(),[r,n]=(0,i.useState)(!0),[l,u]=(0,i.useState)([]),{useQueryFxn:p,useMutationFxn:f}=(0,m.G)(),b=p(["help"],()=>h.Z.get("".concat((0,m.c)(),"/user/help")).then(e=>{let t=e.data.data;return u(t),console.log("result",t),e.data}).catch(e=>(console.log("fetchTerms error",e),e)),{enabled:!0});return(0,a.jsx)("div",{children:b.isLoading?(0,a.jsx)(x.C,{className:"tw-my-[8rem] tw-h-[3rem]"}):(0,a.jsxs)("div",{className:"tw-flex tw-ap-[1.5rem] tw-py-[8rem] tw-px-[4rem] md:tw-px-[1.25rem]",children:[(0,a.jsxs)("div",{className:"tw tw-relative",children:[(0,a.jsx)("div",{className:"tw-w-full tw-transition-all tw-duration-[600ms] tw-p-[3rem_1.25rem] md:tw-p-[1.5rem_.75rem] tw-whitespace-nowrap tw-border tw-border-[#E6E8F0] tw-overflow-x-hidden ".concat(r?"tw-w-full tw-max-w-[360px] tw-h-[fit-content] md:tw-bg-none sm:tw-max-w-[80%]":"tw-px-[0] tw-max-w-[0] tw-invisible"),style:{background:"url('/help-bg.png') no-repeat"},children:(0,a.jsx)(d,{onSelect:e=>{t(e)},helpList:l})}),(0,a.jsxs)("div",{className:"tw-absolute tw-right-[-40px] tw-top-[0] pointer sm:tw-right-[-20px]",onClick:()=>{n(!r)},children:[!r&&(0,a.jsx)(c(),{src:s,alt:"",className:"tw-h-[1.5rem]"}),r&&(0,a.jsx)(c(),{src:w,alt:"",className:"tw-h-[1.5rem] "})]})]}),(0,a.jsx)("div",{className:"tw-w-full tw-mx-[3.75rem] tw-bg-cover ".concat(r?"sm:tw-hidden ":"md:tw-mx-[3rem]"),style:{background:"url('/help-bg.png') no-repeat"},children:e&&(0,a.jsx)(o,{helpObj:e})})]})})}},95457:function(e,t,r){"use strict";r.d(t,{C:function(){return n},L:function(){return i}});var a=r(57437);let i=e=>{let{isActive:t=!1,...r}=e;return(0,a.jsxs)("svg",{className:"tw-animate-spin -tw-ml-1 tw-mr-3 tw-h-5 tw-w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",...r,children:[(0,a.jsx)("circle",{className:"tw-opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,a.jsx)("path",{className:"tw-opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})},n=e=>{let{isActive:t=!1,...r}=e;return(0,a.jsx)("div",{className:"tw-w-full tw-mx-[auto] tw-grid tw-place-items-center",children:(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"80",height:"80",viewBox:"0 0 135 140",fill:"#fff",className:"tw-h-[2rem] tw-mx-[auto]",...r,children:[(0,a.jsxs)("rect",{y:"10",width:"15",height:"120",rx:"6",fill:"rgba(0,0,0,.1)",children:[(0,a.jsx)("animate",{attributeName:"height",begin:"0.5s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),(0,a.jsx)("animate",{attributeName:"y",begin:"0.5s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})]}),(0,a.jsxs)("rect",{x:"60",width:"15",height:"140",rx:"6",fill:"rgba(0,0,0,.1)",children:[(0,a.jsx)("animate",{attributeName:"height",begin:"0s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),(0,a.jsx)("animate",{attributeName:"y",begin:"0s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})]}),(0,a.jsxs)("rect",{x:"90",y:"10",width:"15",height:"120",rx:"6",fill:"rgba(0,0,0,.1)",children:[(0,a.jsx)("animate",{attributeName:"height",begin:"0.25s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),(0,a.jsx)("animate",{attributeName:"y",begin:"0.25s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})]}),(0,a.jsxs)("rect",{x:"30",y:"10",width:"15",height:"120",rx:"6",fill:"rgba(0,0,0,.1)",children:[(0,a.jsx)("animate",{attributeName:"height",begin:"0.25s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),(0,a.jsx)("animate",{attributeName:"y",begin:"0.25s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})]}),(0,a.jsxs)("rect",{x:"120",y:"10",width:"15",height:"120",rx:"6",fill:"rgba(0,0,0,.1)",children:[(0,a.jsx)("animate",{attributeName:"height",begin:"0.5s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),(0,a.jsx)("animate",{attributeName:"y",begin:"0.5s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})]})]})})}},26022:function(e,t,r){"use strict";r.d(t,{x:function(){return u}});var a=r(57437),i=r(98864),n=r.n(i),s=r(2265),l=r(94360);r(63888);let c=r(44009).default,d=n()(()=>r.e(335).then(r.t.bind(r,36015,23)).then(e=>e.Editor),{loadableGenerated:{webpack:()=>[36015]},ssr:!1});r(35330).default;let u=e=>{let t,{defaultValue:r=""}=e,i=c(r),{contentBlocks:n,entityMap:u}=i;t=l.ContentState.createFromBlockArray(n,u);let[o,w]=(0,s.useState)(l.EditorState.createWithContent(t));return(0,s.useEffect)(()=>{t&&w(l.EditorState.createWithContent(t))},[r]),(0,a.jsx)("div",{children:(0,a.jsx)(d,{editorState:o,toolbarHidden:!0,wrapperClassName:"draftWrapper",editorClassName:"draftEditor",readOnly:!0})})}},58812:function(e,t){"use strict";t.Z={src:"/_next/static/media/search-icon-2.a8fa6b07.svg",height:20,width:20,blurWidth:0,blurHeight:0}}},function(e){e.O(0,[354,986,509,549,222,921,971,596,744],function(){return e(e.s=9655)}),_N_E=e.O()}]);