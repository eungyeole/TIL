import { useEffect } from "react";
import { FC } from "react";
import SyntaxHighlighter from "react-syntax-highlighter"
import CodeBlockStyle from "./CodeBlockStyle";
interface CodeBlockProps{
    children : React.ReactNode
    className? : string
}

const CodeBlock:FC<CodeBlockProps> = ({children, className}) => {
    return(
        <SyntaxHighlighter style={CodeBlockStyle} language={className?.replace('language-','')}>
            {children.toString()}
        </SyntaxHighlighter>
    )
}
export default CodeBlock;