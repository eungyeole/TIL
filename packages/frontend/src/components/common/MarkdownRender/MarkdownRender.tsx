import { FC } from "react";
import ReactMarkdown from 'react-markdown'
import BlockQuote from "./BlockQuote/BlockQuote";
import CodeBlock from './CodeBlock/CodeBlock'
interface MarkdownRender{
  markdown : string
}
const MarkdownRender:FC<MarkdownRender> = ({markdown}) => {
  return(
    <div style={{background: "#fbfdfc", flex : "1 1 0%"}}>
      <ReactMarkdown components={{
        code : CodeBlock,
        blockquote : BlockQuote
      }}>{markdown}</ReactMarkdown>
    </div>
  )
}
export default MarkdownRender;