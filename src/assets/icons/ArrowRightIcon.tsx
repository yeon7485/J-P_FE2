interface Props {
  fill?: string;
  stroke?: string;
}

const ArrowRightIcon = ({ fill = "none", stroke = "white" }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="13"
      viewBox="0 0 8 13"
      fill={fill}
    >
      <path
        d="M1.5 1.5L6.5 6.5L1.5 11.5"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowRightIcon;
