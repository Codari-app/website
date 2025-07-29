import type { SVGProps } from "react";
import type { JSX } from "react/jsx-runtime";
import { colors } from "../../styles/theme";

const MobileTech = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 100 125"
    fill={colors.primary}
    {...props}
  >
    <title>{"Mobile Smpl"}</title>
    <path d="M79 50c0 12.9-.07 25.81 0 38.72a11 11 0 0 1-8.75 11 12.46 12.46 0 0 1-2.36.27Q50 100 32.06 100a11 11 0 0 1-10.85-8.62 10.74 10.74 0 0 1-.2-2.26Q21 50 21 10.91A10.93 10.93 0 0 1 30.81.11 17.87 17.87 0 0 1 32.75 0h34.76a11.45 11.45 0 0 1 6.7 2A10.41 10.41 0 0 1 79 11v39Zm-4.39-.14v-31c0-1.41-.58-2-2-2H27.42c-1.45 0-2 .57-2 2v61.91c0 1.47.57 2 2 2H72.6c1.41 0 2-.6 2-2ZM50 96.34a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0-88h7.64a1 1 0 0 0 1.1-.89 1 1 0 0 0-1-1H42.56a1.11 1.11 0 0 0-.67.12c-.25.22-.56.53-.56.81s.31.6.55.81a1.14 1.14 0 0 0 .68.11Z" />
  </svg>
);
export default MobileTech;
