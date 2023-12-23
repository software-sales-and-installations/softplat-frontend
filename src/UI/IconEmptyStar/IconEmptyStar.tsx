import { IconsEmptyStarProps } from './IconEmptyStarTypes.tsx';

/**
 * Компонент иконки.
 */

export const IconEmptyStar = ({fill}:IconsEmptyStarProps) => (
  <svg className="test" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
       fill="url(#gradient)">
    <path
      d="M10.8905 1.14546C10.5194 0.418207 9.48025 0.418212 9.10911 1.14546L6.67238 5.92023L1.37831 6.76221C0.571969 6.89045 0.250855 7.87874 0.827823 8.45645L4.61591 12.2494L3.78072 17.5445C3.65351 18.3511 4.4942 18.9618 5.22193 18.5916L9.99982 16.161L14.7777 18.5916C15.5054 18.9619 16.3461 18.351 16.2189 17.5445L15.3837 12.2494L19.1718 8.45645C19.7488 7.87874 19.4277 6.89045 18.6213 6.76221L13.3273 5.92023L10.8905 1.14546Z"
      stroke="#C9FA4C" />
    <defs>
      <linearGradient id="gradient">
        <stop offset="0%" stopColor="#C9FA4C" />
        <stop offset={fill} stopColor="#C9FA4C" />
        <stop offset={fill} stopColor="white" />
        <stop offset="100%" stopColor="white" />
      </linearGradient>
    </defs>
  </svg>
);
