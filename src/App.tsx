import "./App.css";
import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./components/FileTree";
import ResizeablePanel from "./components/ResizeablePanel";
import Preview from "./components/Preview";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import WelcomeTab from "./components/WelcomeTab";

function App() {
  const { openedFiles } = useSelector(({ tree }: RootState) => tree);
  return (
    <div>
      <div className="flex h-screen">
        <ResizeablePanel
          showLeftPanel={true}
          leftPanel={
            <div className="w-64 p-2">
              <RecursiveComponent fileTree={fileTree} />
            </div>
          }
          rightPanel={openedFiles.length ? <Preview /> : <WelcomeTab />}
        />
      </div>
    </div>
  );
}

export default App;
