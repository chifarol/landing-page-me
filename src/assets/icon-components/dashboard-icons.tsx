interface Props extends React.SVGProps<SVGSVGElement> {
  isActive?: boolean;
}

export const FowardArrowIcon = ({ isActive = false, ...rest }: Props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M5 12H19"
      stroke={isActive ? "black" : "#9E9E9E"}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 5L19 12L12 19"
      stroke={isActive ? "black" : "#9E9E9E"}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const NextArrowIcon = ({ isActive = false, ...rest }: Props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M5 12L19 12"
      stroke={isActive ? "white" : "black"}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 5L19 12L12 19"
      stroke={isActive ? "white" : "black"}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const BackArrowIcon = ({ isActive = false, ...rest }: Props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M19 12H5"
      stroke={isActive ? "white" : "black"}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 19L5 12L12 5"
      stroke={isActive ? "white" : "black"}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const ChevronRightIcon = ({ isActive = false, ...rest }: Props) => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M6.75 4.5L11.25 9L6.75 13.5"
      stroke={isActive ? "white" : "black"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
