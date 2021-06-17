import styled from "@emotion/styled";
export const Block = styled.div`
    font-size: 14px;
    color: #666;
    line-height: 20px;
    transition: color 0.1s ease 0s, background-color 0.1s ease 0s;
    cursor: pointer;
    max-width: 100%;
    padding: 8px 15px;
    &:hover {
        background: #fafafa;
        color : #212529;
    }
`;