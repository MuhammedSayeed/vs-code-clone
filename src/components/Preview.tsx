import { useSelector } from "react-redux"
import FileSyntxHighLighter from "./FileSyntxHighLighter"
import OpenedFilebar from "./OpenedFilesbar"
import { RootState } from "../app/store"


const Preview = ()=>{

    const {activeFile : {fileContent}} = useSelector((state : RootState)=> state.tree);
    
    return <>
      <OpenedFilebar />
      <FileSyntxHighLighter content={fileContent!} />
    </>
}

export default Preview