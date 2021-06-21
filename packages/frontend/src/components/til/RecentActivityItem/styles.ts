import styled from "@emotion/styled";
export const Block = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eaeaea;
    padding: 15px 0;
    & > img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        object-fit: cover;
        transform: translateY(-40%);
    }
    & > .activity-info{
        margin-left: 10px;
        display: flex;
        align-items: center;
        & > .activity-description{
            font-size: 13px;
            color: #444444;
            & span{
                &:hover{
                    text-decoration: underline;
                    cursor: pointer;
                }
                color: #000000;
                font-weight: bold;
            }
        }
        & > .created_at{
            background: #fafafa;
            font-weight: 600;
            margin-left: 10px;
            border: 1px solid #eaeaea;
            border-radius: 30px;
            padding: 0px 10px;
            font-size: 12px;
        }
    }
    
`