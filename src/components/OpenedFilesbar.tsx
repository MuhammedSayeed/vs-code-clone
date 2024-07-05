import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import Tab from "./Tab";
import React, { useState } from "react";
import ContextMenu from "./ui/ContextMenu";

const OpenedFilebar = () => {
  const { openedFiles } = useSelector((state: RootState) => state.tree);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [menuPositions, setMenuPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const onContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setMenuPosition({
      x: e.clientX,
      y: e.clientY,
    });
    setShowMenu(true);
  };
  return (
    <div className="w-fit" >
      <div className="flex items-center"  onContextMenu={onContextMenu} >
        {openedFiles.map((file) => (
          <Tab key={file.id} file={file} />
        ))}
      </div>
      {showMenu && <ContextMenu positions={menuPositions} setShowMenu = {setShowMenu} />}

    </div>
  );
};

export default OpenedFilebar;
