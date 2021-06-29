import { GetServerSidePropsContext, NextPage } from "next";

interface WorkSpacePageProps{
    workspacename : string
}

const WorkSpacePage: NextPage<WorkSpacePageProps> = ({workspacename}) => {
    return(
        <div>
            {workspacename}
            워크스페이스
        </div>
    )
}

export async function getServerSideProps(context : GetServerSidePropsContext){
    const { workspacename } = context.query;
    return {
        props : {
            workspacename : workspacename
        }
    }
}

export default WorkSpacePage;