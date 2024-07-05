import IconImg from "./IconImg";
import vscode from "../../public/icons/vscode.svg";

const WelcomeTab = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <IconImg className="w-64 h-64" src={vscode} />
    </div>
  );
};

export default WelcomeTab;
