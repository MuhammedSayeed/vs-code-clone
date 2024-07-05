import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Ifile } from "../interfaces";



interface IActiveFile {
    fileName: string;
    fileContent: string | undefined;
    id: string,
}
interface IInitialState {
    openedFiles: Ifile[];
    activeFile: IActiveFile;
    tabIdToRemove: string | null;
}
const initialState: IInitialState = {
    openedFiles: [],
    activeFile: {
        id: "",
        fileName: "",
        fileContent: ""
    },
    tabIdToRemove: null
}
export const fileTreeSlice = createSlice({
    name: "fileTree",
    initialState,
    reducers: {
        setOpendFilesAction: (state, action: PayloadAction<Ifile[]>) => {
            state.openedFiles = action.payload;
        },
        setActiveFileAction: (state, action: PayloadAction<IActiveFile>) => {
            state.activeFile = action.payload;
        },
        closeAll: (state) => {
            state.openedFiles = [];
            state.activeFile = {
                id: "",
                fileName: "",
                fileContent: ""
            }
        },
        setTabIdToRemoveAction: (state, action: PayloadAction<string | null>) => {
            state.tabIdToRemove = action.payload;
        }
    }
})
export const { setOpendFilesAction, setActiveFileAction, closeAll , setTabIdToRemoveAction } = fileTreeSlice.actions;
export default fileTreeSlice.reducer;