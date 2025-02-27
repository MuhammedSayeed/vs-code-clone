import { svgStyles } from "../../styles";

interface Iprops {}

const FolderIcon = ({}: Iprops) => {
  return (
    <svg
      {...svgStyles}
      className="w-[20px] h-[20px] text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M3 6a2 2 0 0 1 2-2h5.532a2 2 0 0 1 1.536.72l1.9 2.28H3V6Zm0 3v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9H3Z"
        clipRule="evenodd"
        color="yellow"
      />
    </svg>
  );
};

export default FolderIcon;
