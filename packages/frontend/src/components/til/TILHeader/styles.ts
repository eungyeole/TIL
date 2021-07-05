import styled from "@emotion/styled";
import media from "../../../lib/styles/media";
import MainResponsive from "../../main/MainResponsive/MainResponsive";
export const Block = styled.div`
    padding: 48px 0;
    padding-bottom: 84px;
    border-bottom: 1px solid #eaeaea;
`
export const Inner = styled(MainResponsive)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${media.small}{
        flex-direction: column;
        align-items: unset;
        & > button{
            margin-top: 10px;
        }
    }
`

export const UserBlock = styled.div`
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    & > .user-name {
        font-weight : 600;
        color : #212529;
        font-size: 31px;
    }
    & >  .description {
        max-width: 450px;
        font-size: 16px;
        color : #495057;
        margin-top: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* 표시하고자 하는 라인 수 */
        -webkit-box-orient: vertical;
    }
    ${media.small}{
        margin-left: 20px;
        & > .user-name{
            font-size: 21px;
        }
        & > .description{
            font-size: 14px;
        }
    }
`

export const Left = styled.div`
    display: flex;
    align-items: center;
    & img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
    ${media.small}{
        & img{
            width: 90px;
            height: 90px;
        }
    }
    
`