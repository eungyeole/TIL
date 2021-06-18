import styled from "@emotion/styled";
import Button from "../../common/Button/Button";
export const Block = styled.div`
    box-shadow: 0 5px 10px rgba(0,0,0,0.12);
    background: white;
    border-radius: 8px;
    display: flex;
    margin-bottom: 48px;
    flex-direction: column;
    & > .workspace-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 24px;
        & > .workspace-title{
            display: flex;
            align-items: center;
            & > img{
                width: 40px;
                height: 40px;
                object-fit: cover;
            }
            & > h3{
                margin-left: 10px;
            }
        }
    }
    & > section{
        margin: 0 24px;
        margin-bottom: 18px;
        & > .learn-info{
            align-items: center;
            display: flex;
            &:hover{
                cursor: pointer;
                text-decoration : underline;
            }
        }
        & > svg{
            font-size: 32px;
            width: 100%;
            padding: 5px 0;
            margin-top: 5px;
            transition: 0.3s;
            border-radius: 5px;
            cursor: pointer;
            &:hover{
                background: #eee;
            }
        }
    }
    & > .workspace-footer{
        display: flex;
        padding: 12px 24px;
        align-items: center;
        border-top: 1px solid #eaeaea;
        justify-content: space-between;
        font-size: 14px;
        & > p{
            color : #444444;
        }
        & > .github-info{
            display: flex;
            align-items: center;
            & > svg{
                font-size: 18px;
                margin-right: 6px;
            }
        }
    }
    
`


export const NewLearnButton = styled(Button)`
    background: #ffffff;
    border: 1px solid #eaeaea;
    color: #666;
    height: unset;
    padding: 6px 12px;
    font-size: 14px;
`

export const Badge = styled.div`
    background: #fafafa;
    font-weight: 600;
    margin-left: 10px;
    border: 1px solid #eaeaea;
    border-radius : 30px;
    padding: 0px 10px;
    font-size: 12px;
`