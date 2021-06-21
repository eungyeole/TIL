import { NextPage } from "next";
import dynamic from 'next/dynamic';
import { useState } from 'react';
import styled from "@emotion/styled";
import TitleTextArea from "../components/write/TitleTextArea/TitleTextArea";
const Editor = dynamic(() => import('../components/common/MarkdownEditor/MarkdownEditor'), { ssr: false });


const WritePage: NextPage = () => {
    const [value, setValue] = useState<string>();
    return(
        <>
            <div>

            </div>
            <img src=""></img>
            <TitleTextArea placeholder="Untitled"></TitleTextArea>
            <Editor onChangeMarkdown={setValue}></Editor>
        </>
    )
} 

const Block = styled.div`
    display: flex;
    
`
export default WritePage;