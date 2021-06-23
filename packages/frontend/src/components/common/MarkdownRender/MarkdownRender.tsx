import { FC } from "react";
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import BlockQuote from "./BlockQuote/BlockQuote";
import CodeBlock from "./CodeBlock/CodeBlock";
import styled from '@emotion/styled';

interface MarkdownRender{
  markdown : string
}
const MarkdownRender:FC<MarkdownRender> = ({markdown}) => {
  return(
    <Block>
      <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[gfm]} components={{
        blockquote : BlockQuote,
        code : CodeBlock
      }}>{markdown}</ReactMarkdown>
    </Block>
  )
}
export default MarkdownRender;

const Block = styled.div`
  & ul, ol{
    padding-left: 32px;
  }
  & blockquote, details, dl, ol, pre, table, ul, p{
    margin-bottom: 16px;
  }
  & p {
    color: #222426;
  }
  & h1, h2, h3, h4, h5, h6{
    margin-top: 24px;
    margin-bottom: 16px;
    color: #222426;
  }
  & img{
    max-width: 100%;
  }
  & table{
    width: max-content;
    max-width: 100%;
    overflow: auto;
    border-spacing: 0;
    border-collapse: collapse;
    & tr{
      background-color: #fff;
      border-top: 1px solid #c6cbd2;
    }
    & td, th{
      border: 1px solid #e0e3e6;
      padding: 6px 13px;
    }
  }
`