import styled from "@emotion/styled";
export const MarkdownEditorBlock = styled.div`
  .CodeMirror {
    height: auto;
    font-size: 1.125rem;
    line-height: 1.5;
    flex: 1 1 0%;
    color: #212529;
    font-family: 'Fira Mono', monospace;
    /* font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', */
    .cm-header {
      line-height: 2;
      color: #212529;
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
      color: #212529;
    }
    .CodeMirror-placeholder {
      color: #adb5bd;
      font-style: italic;
    }
  }
`;