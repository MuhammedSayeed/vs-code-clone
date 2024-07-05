export interface Ifile {
    id: string;
    name: string;
    isFolder: boolean;
    children?: Ifile[];
    content?: string;
}

export interface IActiveFile {
    fileName: string ;
    fileContent: string | undefined;
    id: string ,
}

export interface IInitialState {
    openedFiles: Ifile[];
    activeFile: IActiveFile;
}