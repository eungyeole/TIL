import { GetServerSidePropsContext } from "next";
import { NextPage } from "next";
import Header from "../components/base/Header/Header";

interface UserPageProps {
    username : string
}
const UserPage: NextPage<UserPageProps> = ({username}) => {
    return(
        <> 
            {username}
        </>
    )
}
export async function getServerSideProps(context : GetServerSidePropsContext){
    const { username } = context.query;
    return {
        props : {
            username : username
        }
    }
}
export default UserPage;