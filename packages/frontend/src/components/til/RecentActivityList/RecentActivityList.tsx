import { FC } from "react";
import RecentActivityItem from "../RecentActivityItem/RecentActivityItem";
import * as S from './styles'
const dummy = [
    {

    },
    {

    },
]
interface RecentActivityListProps{}
const RecentActivityList: FC<RecentActivityListProps> = () => {
    return(
        <S.Block>
            <h3>Recent Activity</h3>
            {
                dummy.map((i)=><RecentActivityItem />)
            }
        </S.Block>
    )
}
export default RecentActivityList;