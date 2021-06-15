import styled from "@emotion/styled";
export const MarkdownEditorBlock = styled.div`
  .CodeMirror {
    height: auto;
    font-size: 1.125rem;
    line-height: 1.5;
    color: black;
    font-family: 'Fira Mono', monospace;
    /* font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', */
    .cm-header {
      line-height: 2;
      color: black;
    }
    .cm-header-1 {
      font-size: 2.5rem;
    }
    .cm-header-2 {
      font-size: 2rem;
    }
    .cm-header-3 {
      font-size: 1.5rem;
    }
    .cm-header-4,
    .cm-header-5,
    .cm-header-6 {
      font-size: 1.3125rem;
    }
    .cm-strong,
    .cm-em {
      color: black;
    }
    .CodeMirror-placeholder {
      color: black;
      font-style: italic;
    }
  }
`;