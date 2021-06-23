import { FC } from "react";
import SyntaxHighlighter from "react-syntax-highlighter"
import CodeBlockStyle from "./CodeBlockStyle";
interface CodeBlockProps{
    children : React.ReactNode
    className? : string
}
const CodeBlock:FC<CodeBlockProps> = ({children, className}) => {
    const match = /language-(\w+)/.exec(className || '');
    return match ? (
        <SyntaxHighlighter style={CodeBlockStyle} language={match[1]}>
            {children.toString().replace(/\n$/, '')}
        </SyntaxHighlighter>
    ) : (
        <code className={className}>
            {children}
        </code>
    )
}
export default CodeBlock;