import styled from "@emotion/styled";
export const Block = styled.div`    
    cursor: pointer;
    display: flex;
    align-items: center;
    img{
        height: 28px;
        width: 28px;
        border: 1px solid #eaeaea;
        border-radius: 50%;
    }
    svg {
        font-size: 1.5rem;
        margin-left: 0.25rem;
        color: #868e96;
        transition: 0.125s all ease-in;
        margin-right: -0.4375rem;
    }
    &:hover{
        svg {
            color : #212529;
        }
    }
`