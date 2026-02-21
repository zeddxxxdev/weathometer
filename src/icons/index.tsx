import { LucideProps } from "lucide-react"

const Icons = {
  Shield: (props: LucideProps) => (
    <svg
      width={20}
      height={21}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.266.206a.75.75 0 0 0-1.032 0 11.2 11.2 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.7 12.7 0 0 0 0 7.786c0 5.942 4.064 10.933 9.563 12.348a.75.75 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516H18c-2.996 0-5.717-1.17-7.734-3.08m3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53-1.624-1.624a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094z"
        fill="#098309"
      />
    </svg>
  ),
  Divider: (props: LucideProps) => (
    <svg
      width={28}
      height={32}
      viewBox="0 0 28 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.916 25.789.001 28l4.148 3.991 1.486-5.51zM22.442 6.202l4.915-2.21L23.21 0l-1.486 5.51zM4.976 26.496l.36.345 1.933-2.333-.359-.346-.359-.345-1.934 2.333zm3.868-4.667.36.346 1.933-2.334-.359-.345-.359-.346-1.934 2.333zm3.868-4.667.36.346 1.934-2.333-.36-.346-.359-.346-1.934 2.334zm3.868-4.666.36.345 1.934-2.333-.36-.346-.359-.345-1.934 2.333zm3.868-4.667.36.346 1.934-2.334-.36-.345-.359-.346-1.934 2.333z"
        fill="#7a7a7a"
      />
    </svg>
  ),
  ChevronRight: (props: LucideProps) => (
    <svg
      width={8}
      height={15}
      viewBox="0 0 8 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.697 6.766a.66.66 0 0 1 0 .93l-6.589 6.59a.659.659 0 0 1-.931-.931L6.3 7.23.177 1.108a.659.659 0 0 1 .931-.931z"
        fill="#294f7c"
      />
    </svg>
  ),
  Thunder: (props: LucideProps) => (
    <svg
      width={15}
      height={18}
      viewBox="0 0 15 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.68.079a.625.625 0 0 1 .298.71l-1.66 6.086h6.057a.625.625 0 0 1 .457 1.052l-8.75 9.375a.625.625 0 0 1-1.06-.592l1.66-6.085H.625a.625.625 0 0 1-.457-1.052L8.918.198A.625.625 0 0 1 9.68.08"
        fill="#294f7c"
      />
    </svg>
  ),
  Lock: (props: LucideProps) => (
    <svg
      width={14}
      height={18}
      viewBox="0 0 14 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.875 0A4.375 4.375 0 0 0 2.5 4.375v2.5a2.5 2.5 0 0 0-2.5 2.5V15a2.5 2.5 0 0 0 2.5 2.5h8.75a2.5 2.5 0 0 0 2.5-2.5V9.375a2.5 2.5 0 0 0-2.5-2.5v-2.5A4.374 4.374 0 0 0 6.875 0M10 6.875v-2.5a3.125 3.125 0 0 0-6.25 0v2.5z"
        fill="#8f8f8f"
      />
    </svg>
  ),
}

export default Icons
