import dynamic from 'next/dynamic';
import { useState } from 'react';
import Header from '../components/base/Header/Header';
import MarkdownRender from '../components/common/MarkdownRender/MarkdownRender';
const Editor = dynamic(() => import('../components/common/MarkdownEditor/MarkdownEditor'), { ssr: false });

export default function Home() {
  const [value, setValue] = useState<string>('');
  return (
    <>
    </>
  )
}
