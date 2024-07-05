import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface Iprops {
  content: string;
}

const FileSyntxHighLighter = ({ content }: Iprops) => {
  return (
    <SyntaxHighlighter customStyle={{maxHeight : "100vh" , width : "100%", overflowX : "auto"  , background : "transparent"}}  language="javascript" style={atomOneDark}>
      {content}
    </SyntaxHighlighter>
  );
};

export default FileSyntxHighLighter;
