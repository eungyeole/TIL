import styled from "@emotion/styled";
import TextAreaAutosize from 'react-textarea-autosize'

const TitleTextArea = styled(TextAreaAutosize)`
    outline: none;
    border: none;
    resize: none;
    padding: 0;
    color : #212529;
    font-weight : bold;
    font-size: 44px;
    &::placeholder{
        color : #ADB5BD;
    }
`
export default TitleTextArea;