import dynamic from 'next/dynamic';
import { useState } from 'react';
const Editor = dynamic(() => import('../components/common/MarkdownEditor/MarkdownEditor'), { ssr: false });

export default function Home() {
  const [value, setValue] = useState<string>('');
  return (
    <>
      <Editor initialMarkdown={''} onChangeMarkdown={setValue}></Editor>
    </>
  )
}
