import { Ifile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import { useDispatch, useSelector } from "react-redux";
import { setActiveFileAction, setOpendFilesAction, setTabIdToRemoveAction } from "../app/fileTreeSlice";
import { RootState } from "../app/store";
import close from "../../public/icons/close.svg";
import IconImg from "./IconImg";
import React from "react";


interface Iprops {
  file: Ifile;
}

const Tab = ({ file }: Iprops) => {
  const dispatch = useDispatch();
  
  const { activeFile, openedFiles } = useSelector(
    (state: RootState) => state.tree
  );
  const onClick = () => {
    const { name, content } = file;
    dispatch(
      setActiveFileAction({
        fileName: name,
        fileContent: content,
        id: file.id,
      })
    );
  };
  const onRemove = (selectedId: string) => {
    const filtered = openedFiles.filter((file) => file.id !== selectedId);
    const lastTab = filtered[filtered.length - 1];
    if (!lastTab) {
      dispatch(setOpendFilesAction([]));
      dispatch(setActiveFileAction({ id: "", fileContent: "", fileName: "" }));
      return;
    }
    dispatch(setOpendFilesAction(filtered));
    dispatch(
      setActiveFileAction({
        id: lastTab.id,
        fileContent: lastTab.content,
        fileName: lastTab.name,
      })
    );
  };

  const onContextMenu = (e : React.MouseEvent<HTMLDivElement>)=>{
    e.preventDefault();
    dispatch(setTabIdToRemoveAction(file.id));
  }

  

  return (
    <div
      className="flex items-center border-b border-r border-zinc-700 "
      style={{
        borderTop:
          file.id === activeFile.id
            ? "2px solid white "
            : "2px solid transparent",
      }}
      onContextMenu={onContextMenu}
    >
      <div
        onClick={onClick}
        className="flex items-center gap-2  cursor-pointer p-2"
      >
        <RenderFileIcon fileName={file.name} />
        <span
          className={`flex justify-center ${
            file.id === activeFile.id ? "text-white" : "text-gray-500"
          } `}
        >
          {file.name}
        </span>
      </div>
      <span
        onClick={() => {
          onRemove(file.id);
        }}
        className="cursor-pointer p-2 flex justify-center items-center "
      >
        <IconImg src={close} />
      </span>
    </div>
  );
};

export default Tab;
