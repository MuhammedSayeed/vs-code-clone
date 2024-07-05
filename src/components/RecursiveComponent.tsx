import { useState } from "react";
import { Ifile } from "../interfaces";
import RightArrowIcon from "./SVG/Right";
import BottomArrowIcon from "./SVG/Bottom";
import RenderFileIcon from "./RenderFileIcon";
import { useDispatch, useSelector } from "react-redux";
import { setOpendFilesAction, setActiveFileAction } from "../app/fileTreeSlice";
import { RootState } from "../app/store";

interface Iprops {
  fileTree: Ifile;
}

const RecursiveComponent = ({ fileTree }: Iprops) => {
  const dispatch = useDispatch();
  const { openedFiles } = useSelector((state: RootState) => state.tree);
  const { id, name, isFolder, children, content } = fileTree;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  //HANDELRS
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };
  const onFileClick = () => {
    const exists = openedFiles.some((obj) => obj.id === id);
    if (!exists) dispatch(setOpendFilesAction([...openedFiles, { id, name, content, isFolder }]));
    dispatch(setActiveFileAction({ id, fileName: name, fileContent: content }));
  };

  return (
    <div className="mb-2 ml-2 cursor-pointer ">
      <div className="flex items-center mb-1 hover:bg-neutral-900 ">
        {isFolder ? (
          <div onClick={toggle} className="flex items-center">
            {isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}
            <RenderFileIcon
              isFolder={isFolder}
              isOpen={isOpen}
              fileName={name}
            />

            <span className="ml-2">{name}</span>
          </div>
        ) : (
          <div onClick={onFileClick} className="flex items-center ml-4">
            <RenderFileIcon fileName={name} />
            <span className="ml-2">{name}</span>
          </div>
        )}
      </div>
      {isOpen &&
        children?.map((file) => (
          <>
            <RecursiveComponent key={file.id} fileTree={file} />
          </>
        ))}
    </div>
  );
};

export default RecursiveComponent;
