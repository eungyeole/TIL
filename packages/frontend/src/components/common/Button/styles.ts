import styled from "@emotion/styled";
export const Block = styled.button`
    background: #000000;
    color: white;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 25px;
    font-size: 14px;
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.2s;
    border: 1px solid black;
    &:hover,
    &:focus {
        background: white;
        color : black;
        border: 1px solid black;
    }
`