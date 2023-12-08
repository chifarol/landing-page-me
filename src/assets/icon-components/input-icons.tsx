interface Props extends React.SVGProps<SVGSVGElement> {
  isActive?: boolean;
}

export const EmailAddressIcon = ({ isActive = false, ...rest }: Props) => (
  <svg
    width="18"
    height="19"
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M12 9.5C12 7.84315 10.6569 6.5 9 6.5C7.34315 6.5 6 7.84315 6 9.5C6 11.1569 7.34315 12.5 9 12.5C10.6569 12.5 12 11.1569 12 9.5ZM12 9.5V10.625C12 11.6605 12.8395 12.5 13.875 12.5C14.9105 12.5 15.75 11.6605 15.75 10.625V9.5C15.75 5.77208 12.7279 2.75 9 2.75C5.27208 2.75 2.25 5.77208 2.25 9.5C2.25 13.2279 5.27208 16.25 9 16.25M12.375 15.3457C11.31 15.9605 10.1472 16.2522 8.99997 16.2511"
      stroke="#A1A1AA"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const PasswordIcon = ({ isActive = false, ...rest }: Props) => (
  <svg
    width={18}
    height={19}
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M9 11.75V13.25M4.5 16.25H13.5C14.3284 16.25 15 15.5784 15 14.75V10.25C15 9.42157 14.3284 8.75 13.5 8.75H4.5C3.67157 8.75 3 9.42157 3 10.25V14.75C3 15.5784 3.67157 16.25 4.5 16.25ZM12 8.75V5.75C12 4.09315 10.6569 2.75 9 2.75C7.34315 2.75 6 4.09315 6 5.75V8.75H12Z"
      stroke="#A1A1AA"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);
