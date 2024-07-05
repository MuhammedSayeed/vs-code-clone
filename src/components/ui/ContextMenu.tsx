import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeAll, setOpendFilesAction } from "../../app/fileTreeSlice";
import { RootState } from "../../app/store";

interface Iprops {
  positions: {
    x: number;
    y: number;
  };
  setShowMenu: (val: boolean) => void;
}

const ContextMenu = ({ positions, setShowMenu }: Iprops) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const { openedFiles, tabIdToRemove } = useSelector(
    (state: RootState) => state.tree
  );
  const dispatch = useDispatch();

  const onCloseAll = () => {
    dispatch(closeAll());
    setShowMenu(false);
  };
  const onClose = () => {
    const filtered = openedFiles.filter((file) => file.id !== tabIdToRemove);
    dispatch(setOpendFilesAction(filtered));
    setShowMenu(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // checking the menu ref is not equal null and the click done outside the menu
      if (menuRef.current && !menuRef.current.contains(event?.target as Node)) {
        setShowMenu(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef}>
      <ul
        className="bg-white text-black w-fit  rounded-md  "
        style={{ position: "absolute", left: positions.x, top: positions.y }}
      >
        <li
          className="cursor-pointer px-6 py-2 hover:bg-gray-200 rounded-md"
          onClick={onClose}
        >
          Close
        </li>
        <li
          className="cursor-pointer px-6 py-2 hover:bg-gray-200 rounded-md"
          onClick={onCloseAll}
        >
          Close all
        </li>
      </ul>
    </div>
  );
};

export default ContextMenu;
