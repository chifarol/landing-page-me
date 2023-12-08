interface Props extends React.SVGProps<SVGSVGElement> {
  isActive?: boolean;
}

export const HamburgerIcon = ({ isActive = false, ...rest }: Props) => (
  <svg
    width={18}
    height={10}
    viewBox="0 0 18 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M1 1.50879H17M1 8.49133H17"
      stroke="#1B1B1B"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SettingsIcon = ({ isActive = false, ...rest }: Props) => (
  <svg
    width="18"
    height="19"
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <g clipPath="url(#clip0_1618_36660)">
      <path
        d="M9 11.75C10.2426 11.75 11.25 10.7426 11.25 9.5C11.25 8.25736 10.2426 7.25 9 7.25C7.75736 7.25 6.75 8.25736 6.75 9.5C6.75 10.7426 7.75736 11.75 9 11.75Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.55 11.75C14.4502 11.9762 14.4204 12.2271 14.4645 12.4704C14.5086 12.7137 14.6246 12.9382 14.7975 13.115L14.8425 13.16C14.982 13.2993 15.0926 13.4647 15.1681 13.6468C15.2436 13.8289 15.2824 14.0241 15.2824 14.2213C15.2824 14.4184 15.2436 14.6136 15.1681 14.7957C15.0926 14.9778 14.982 15.1432 14.8425 15.2825C14.7032 15.422 14.5378 15.5326 14.3557 15.6081C14.1736 15.6836 13.9784 15.7224 13.7812 15.7224C13.5841 15.7224 13.3889 15.6836 13.2068 15.6081C13.0247 15.5326 12.8593 15.422 12.72 15.2825L12.675 15.2375C12.4982 15.0646 12.2737 14.9486 12.0304 14.9045C11.7871 14.8604 11.5362 14.8902 11.31 14.99C11.0882 15.0851 10.899 15.2429 10.7657 15.4442C10.6325 15.6454 10.561 15.8812 10.56 16.1225V16.25C10.56 16.6478 10.402 17.0294 10.1207 17.3107C9.83936 17.592 9.45782 17.75 9.06 17.75C8.66218 17.75 8.28064 17.592 7.99934 17.3107C7.71804 17.0294 7.56 16.6478 7.56 16.25V16.1825C7.55419 15.9343 7.47384 15.6935 7.32938 15.4915C7.18493 15.2896 6.98305 15.1357 6.75 15.05C6.52379 14.9502 6.27286 14.9204 6.02956 14.9645C5.78626 15.0086 5.56176 15.1246 5.385 15.2975L5.34 15.3425C5.20069 15.482 5.03526 15.5926 4.85316 15.6681C4.67106 15.7436 4.47587 15.7824 4.27875 15.7824C4.08163 15.7824 3.88644 15.7436 3.70434 15.6681C3.52224 15.5926 3.35681 15.482 3.2175 15.3425C3.07804 15.2032 2.9674 15.0378 2.89191 14.8557C2.81642 14.6736 2.77757 14.4784 2.77757 14.2812C2.77757 14.0841 2.81642 13.8889 2.89191 13.7068C2.9674 13.5247 3.07804 13.3593 3.2175 13.22L3.2625 13.175C3.4354 12.9982 3.55139 12.7737 3.5955 12.5304C3.63962 12.2871 3.60984 12.0362 3.51 11.81C3.41493 11.5882 3.25707 11.399 3.05585 11.2657C2.85463 11.1325 2.61884 11.061 2.3775 11.06H2.25C1.85218 11.06 1.47064 10.902 1.18934 10.6207C0.908035 10.3394 0.75 9.95782 0.75 9.56C0.75 9.16218 0.908035 8.78064 1.18934 8.49934C1.47064 8.21804 1.85218 8.06 2.25 8.06H2.3175C2.56575 8.05419 2.8065 7.97384 3.00847 7.82938C3.21045 7.68493 3.36429 7.48305 3.45 7.25C3.54984 7.02379 3.57962 6.77286 3.5355 6.52956C3.49139 6.28626 3.3754 6.06176 3.2025 5.885L3.1575 5.84C3.01804 5.70069 2.9074 5.53526 2.83191 5.35316C2.75642 5.17106 2.71757 4.97587 2.71757 4.77875C2.71757 4.58163 2.75642 4.38644 2.83191 4.20434C2.9074 4.02224 3.01804 3.85681 3.1575 3.7175C3.29681 3.57804 3.46224 3.4674 3.64434 3.39191C3.82644 3.31642 4.02163 3.27757 4.21875 3.27757C4.41587 3.27757 4.61106 3.31642 4.79316 3.39191C4.97526 3.4674 5.14069 3.57804 5.28 3.7175L5.325 3.7625C5.50176 3.9354 5.72626 4.05139 5.96956 4.0955C6.21285 4.13962 6.46379 4.10984 6.69 4.01H6.75C6.97183 3.91493 7.16101 3.75707 7.29427 3.55585C7.42753 3.35463 7.49904 3.11884 7.5 2.8775V2.75C7.5 2.35218 7.65804 1.97064 7.93934 1.68934C8.22064 1.40804 8.60218 1.25 9 1.25C9.39782 1.25 9.77936 1.40804 10.0607 1.68934C10.342 1.97064 10.5 2.35218 10.5 2.75V2.8175C10.501 3.05884 10.5725 3.29463 10.7057 3.49585C10.839 3.69707 11.0282 3.85493 11.25 3.95C11.4762 4.04984 11.7271 4.07962 11.9704 4.0355C12.2137 3.99139 12.4382 3.8754 12.615 3.7025L12.66 3.6575C12.7993 3.51804 12.9647 3.4074 13.1468 3.33191C13.3289 3.25642 13.5241 3.21757 13.7213 3.21757C13.9184 3.21757 14.1136 3.25642 14.2957 3.33191C14.4778 3.4074 14.6432 3.51804 14.7825 3.6575C14.922 3.79681 15.0326 3.96224 15.1081 4.14434C15.1836 4.32644 15.2224 4.52163 15.2224 4.71875C15.2224 4.91587 15.1836 5.11106 15.1081 5.29316C15.0326 5.47526 14.922 5.64069 14.7825 5.78L14.7375 5.825C14.5646 6.00176 14.4486 6.22626 14.4045 6.46956C14.3604 6.71285 14.3902 6.96379 14.49 7.19V7.25C14.5851 7.47183 14.7429 7.66101 14.9442 7.79427C15.1454 7.92753 15.3812 7.99904 15.6225 8H15.75C16.1478 8 16.5294 8.15804 16.8107 8.43934C17.092 8.72064 17.25 9.10218 17.25 9.5C17.25 9.89782 17.092 10.2794 16.8107 10.5607C16.5294 10.842 16.1478 11 15.75 11H15.6825C15.4412 11.001 15.2054 11.0725 15.0042 11.2057C14.8029 11.339 14.6451 11.5282 14.55 11.75V11.75Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1618_36660">
        <rect
          width="18"
          height="18"
          fill="white"
          transform="translate(0 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
);
export const HelpIcon = ({ isActive = false, ...rest }: Props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <g clipPath="url(#clip0_1618_36665)">
      <path
        d="M8.00004 14.6668C11.6819 14.6668 14.6667 11.6821 14.6667 8.00016C14.6667 4.31826 11.6819 1.3335 8.00004 1.3335C4.31814 1.3335 1.33337 4.31826 1.33337 8.00016C1.33337 11.6821 4.31814 14.6668 8.00004 14.6668Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.06006 5.99989C6.21679 5.55434 6.52616 5.17863 6.93336 4.93931C7.34056 4.7 7.81932 4.61252 8.28484 4.69237C8.75036 4.77222 9.1726 5.01424 9.47678 5.37558C9.78095 5.73691 9.94743 6.19424 9.94672 6.66656C9.94672 7.99989 7.94673 8.66656 7.94673 8.66656"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 11.3335H8.00667"
        stroke="black"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1618_36665">
        <rect width={16} height={16} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const SignOutIcon = ({ isActive = false, ...rest }: Props) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M13 10.5C13.2761 10.5 13.5 10.2761 13.5 10C13.5 9.72386 13.2761 9.5 13 9.5L13 10.5ZM2.64645 9.64644C2.45118 9.84171 2.45118 10.1583 2.64645 10.3536L5.82843 13.5355C6.02369 13.7308 6.34027 13.7308 6.53553 13.5355C6.7308 13.3403 6.7308 13.0237 6.53553 12.8284L3.70711 10L6.53553 7.17157C6.7308 6.97631 6.7308 6.65973 6.53553 6.46446C6.34027 6.2692 6.02369 6.2692 5.82843 6.46447L2.64645 9.64644ZM13 9.5L3 9.5L3 10.5L13 10.5L13 9.5Z"
      fill="black"
    />
    <path
      d="M10 6.5V5.5C10 4.11929 11.1193 3 12.5 3H14.5C15.8807 3 17 4.11929 17 5.5V14.5C17 15.8807 15.8807 17 14.5 17H12.5C11.1193 17 10 15.8807 10 14.5V14"
      stroke="black"
      strokeLinecap="round"
    />
  </svg>
);
export const SearchIcon = ({ isActive = false, ...rest }: Props) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
      stroke={isActive ? "white" : "black"}
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const ChevronDownIcon = ({ isActive = false, ...rest }: Props) => (
  <svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M8.5 10.5L12.5 14.5L16.5 10.5"
      stroke="#000000"
      strokeWidth={1.5}
    />
  </svg>
);

export const UploadIcon = ({ isActive = false, ...rest }: Props) => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M15.375 11.125V13.9583C15.375 14.3341 15.2257 14.6944 14.9601 14.9601C14.6944 15.2257 14.3341 15.375 13.9583 15.375H4.04167C3.66594 15.375 3.30561 15.2257 3.03993 14.9601C2.77426 14.6944 2.625 14.3341 2.625 13.9583V11.125"
      stroke={isActive ? "white" : "black"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.5416 6.16667L8.99992 2.625L5.45825 6.16667"
      stroke={isActive ? "white" : "black"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 2.625V11.125"
      stroke={isActive ? "white" : "black"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const BackIcon = ({ isActive = true, ...rest }: Props) => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M14 8L10 12L14 16" stroke="#6E7C87" />
  </svg>
);
export const DropDownIcon = ({ isActive = true, ...rest }: Props) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M16.364 7.86396L10 14.2279L3.63604 7.86396"
      stroke="black"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  </svg>
);

export function Cloud({ isActive = false, ...rest }: Props) {
  return (
    <svg
      width={40}
      height={40}
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <rect x="0.5" width={40} height={40} rx={20} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5825 12.437C18.1777 12.4371 16.8262 12.9748 15.8052 13.9397C14.7841 14.9046 14.1711 16.2237 14.0917 17.6263C12.9925 18.0727 12.0808 18.8844 11.5102 19.9245C10.9396 20.9647 10.7451 22.1698 10.9593 23.3367C11.1736 24.5036 11.7835 25.5609 12.6863 26.3306C13.5892 27.1003 14.7298 27.5352 15.9159 27.562L25.0825 27.5629C26.2094 27.5382 27.2971 27.144 28.1792 26.4424C29.0613 25.7408 29.6892 24.7694 29.9668 23.677C30.2444 22.5847 30.1564 21.4314 29.7164 20.3938C29.2763 19.3561 28.5083 18.4912 27.53 17.9315L26.5089 18.9527C27.3083 19.31 27.959 19.9337 28.3499 20.7173C28.7408 21.5009 28.8476 22.3958 28.6523 23.2494C28.4569 24.103 27.9714 24.8623 27.2786 25.3979C26.5858 25.9335 25.7287 26.212 24.8534 26.1861L16.145 26.187V26.1852C15.1776 26.2135 14.2361 25.8698 13.5145 25.2248C12.7929 24.5798 12.3461 23.6827 12.2661 22.7181C12.1861 21.7536 12.479 20.7951 13.0845 20.04C13.69 19.285 14.5619 18.7908 15.5208 18.6593C15.3421 17.6654 15.5343 16.6404 16.0609 15.7787C16.5875 14.9169 17.4119 14.2783 18.3779 13.9839C19.3439 13.6894 20.3844 13.7595 21.3022 14.181C22.2199 14.6024 22.9512 15.3459 23.3574 16.2705L24.3804 15.2466C23.9025 14.3942 23.2061 13.6845 22.3628 13.1907C21.5195 12.6968 20.5598 12.4367 19.5825 12.437ZM26.5776 16.9378C26.6436 16.8749 26.6963 16.7994 26.7328 16.7158C26.7693 16.6322 26.7888 16.5422 26.7902 16.451C26.7916 16.3598 26.7748 16.2693 26.7408 16.1846C26.7068 16.1 26.6564 16.0229 26.5923 15.958C26.5283 15.8931 26.452 15.8415 26.3678 15.8063C26.2837 15.7712 26.1934 15.7531 26.1022 15.7532C26.011 15.7533 25.9207 15.7715 25.8366 15.8068C25.7525 15.8421 25.6763 15.8938 25.6124 15.9588L19.28 22.2912L17.5109 20.522C17.4502 20.4514 17.3759 20.3937 17.2923 20.3527C17.2087 20.3116 17.1177 20.288 17.0247 20.2832C16.9317 20.2783 16.8387 20.2925 16.7514 20.3247C16.664 20.3569 16.5841 20.4065 16.5165 20.4705C16.4489 20.5345 16.395 20.6116 16.358 20.697C16.3211 20.7825 16.3019 20.8746 16.3016 20.9677C16.3014 21.0608 16.32 21.153 16.3564 21.2387C16.3929 21.3244 16.4463 21.4018 16.5135 21.4662L16.5126 21.468L18.753 23.7093C18.8148 23.7826 18.8914 23.8421 18.9778 23.884C19.0641 23.9259 19.1583 23.9492 19.2542 23.9524C19.3501 23.9556 19.4456 23.9386 19.5345 23.9026C19.6234 23.8665 19.7038 23.8122 19.7705 23.7432V23.7441L26.5767 16.9388L26.5776 16.9378Z"
        fill={isActive ? "#000" : "rgba(37, 44, 50, 0.3)"}
      />
    </svg>
  );
}

export function BellIcon({ isActive = false, ...rest }: Props) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M15 6.66675C15 5.34067 14.4732 4.0689 13.5355 3.13121C12.5979 2.19353 11.3261 1.66675 10 1.66675C8.67392 1.66675 7.40215 2.19353 6.46447 3.13121C5.52678 4.0689 5 5.34067 5 6.66675C5 12.5001 2.5 14.1667 2.5 14.1667H17.5C17.5 14.1667 15 12.5001 15 6.66675Z"
        stroke={isActive ? "white" : "black"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.4417 17.5C11.2952 17.7526 11.0849 17.9622 10.8319 18.1079C10.5789 18.2537 10.292 18.3304 10 18.3304C9.70803 18.3304 9.42117 18.2537 9.16816 18.1079C8.91515 17.9622 8.70486 17.7526 8.55835 17.5"
        stroke={isActive ? "white" : "black"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}