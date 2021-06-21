import React, { CSSProperties, useRef, useEffect, useCallback, FC } from 'react';
import * as S from './styles'
import CodeMirror, { EditorFromTextArea, Editor } from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/addon/display/placeholder';



export interface MarkdownEditorProps {
  style?: CSSProperties;
  className?: string;
  onChangeMarkdown: (markdown: string) => void;
  initialMarkdown?: string;
}

const MarkdownEditor : FC<MarkdownEditorProps> = ({style, className, onChangeMarkdown, initialMarkdown}) => {
  const textArea = useRef<HTMLTextAreaElement | null>(null);
  const codemirror = useRef<EditorFromTextArea | null>(null);

  const onChange = useCallback(
    (cm: Editor) => {
      onChangeMarkdown(cm.getValue());
    },
    [onChangeMarkdown],
  );

  useEffect(() => {
    if (!textArea.current) return;
    const cm = CodeMirror.fromTextArea(textArea.current, {
      mode: 'markdown',
      theme: 'one-light',
      placeholder : 'Writing your Learn',
      lineWrapping: true,
    });
    codemirror.current = cm;
    cm.focus();
    cm.on('change', onChange);

    if (initialMarkdown) {
      cm.setValue(initialMarkdown);
    }

    return () => {
      cm.toTextArea();
    };
  }, [initialMarkdown, onChange]);

  
  return (
    <S.MarkdownEditorBlock style={style} className={className}>
      <textarea ref={textArea} style={{border: "none", display: "none"}}/>
    </S.MarkdownEditorBlock>
  );
};

export default MarkdownEditor;