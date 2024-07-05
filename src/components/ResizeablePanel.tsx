import { ReactNode } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

interface Iprops {
  defaultLayout?: number[] | undefined;
  leftPanel: ReactNode;
  rightPanel: ReactNode;
  showLeftPanel: boolean;
}

const ResizeablePanel = ({
  defaultLayout = [20, 67],
  leftPanel,
  rightPanel,
  showLeftPanel,
}: Iprops) => {
  const onLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
  };
  return (
    <PanelGroup direction="horizontal" onLayout={onLayout} autoSaveId="condition">
      {showLeftPanel && (
        <>
          <Panel defaultSize={defaultLayout[0]} collapsible>{leftPanel}</Panel>
          <PanelResizeHandle className="border-r border-[#ffffff1f]" />
        </>
      )}
      <Panel defaultSize={defaultLayout[1]}>{rightPanel}</Panel>
    </PanelGroup>
  );
};

export default ResizeablePanel;
