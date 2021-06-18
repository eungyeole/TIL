import { GetServerSidePropsContext } from "next";
import { NextPage } from "next";
import MainResponsive from "../components/main/MainResponsive/MainResponsive";
import TILHeader from "../components/til/TILHeader/TILHeader";
import WorkSpaceItem from "../components/til/WorkSpaceItem/WorkSpaceItem";
import styled from '@emotion/styled'
import WorkSpaceList from "../components/til/WorkSpaceList/WorkSpaceList";
interface UserPageProps {
    username : string
}
const UserPage: NextPage<UserPageProps> = ({username}) => {
    return(
        <> 
            <TILHeader username={username}></TILHeader>
            <Block>
                <Inner>
                    <WorkSpaceList></WorkSpaceList>
                </Inner>
            </Block>
        </>
    )
}
const Block = styled.div`
    background : #fafafa;
    min-height: 700px;
`
const Inner = styled(MainResponsive)`
    transform: translateY(-35px);
`

export async function getServerSideProps(context : GetServerSidePropsContext){
    const { username } = context.query;
    return {
        props : {
            username : username
        }
    }
}
export default UserPage;