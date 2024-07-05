import { extenstionIconsPath } from "../constant";
import IconImg from "./IconImg";
import FileIcon from "./SVG/File";

interface Iprops {
  fileName: string;
  isFolder?: boolean;
  isOpen?: boolean;
}

const RenderFileIcon = ({ fileName, isFolder, isOpen }: Iprops) => {
  const extenstion = fileName.split(".").pop();

  if (
    extenstion &&
    Object.prototype.hasOwnProperty.call(extenstionIconsPath, extenstion)
  ) {
    const iconPath = isFolder
      ? isOpen
        ? `${extenstionIconsPath[extenstion]}-open.svg`
        : `${extenstionIconsPath[extenstion]}.svg`
      : `${extenstionIconsPath[extenstion]}.svg`;
    return <IconImg src={iconPath} />;
  }

  if (isFolder && isOpen)
    return <IconImg src={"../public/icons/folder-project-open.svg"} />;
  if (isFolder && !isOpen)
    return <IconImg src={"../public/icons/folder-project.svg"} />;

  return <FileIcon />;
};

export default RenderFileIcon;
