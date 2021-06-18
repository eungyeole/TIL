import React, { FC } from "react";
import WorkSpaceItem from "../WorkSpaceItem/WorkSpaceItem";
import * as S from './styles'
const dummy = [
    {
        title : 'Javascript',
        github : 'til/javascript',
        lastupdate : '55m',
        recentTasks : [
            {
                title : 'javascript',
                lastupdate: '55m'
            }
        ]
    },
    {
        title : 'Javascript',
        github : 'til/javascript',
        lastupdate : '55m',
        recentTasks : [
            {
                title : 'javascript',
                lastupdate: '55m'
            }
        ]
    },
    {
        title : 'Javascript',
        github : 'til/javascript',
        lastupdate : '55m',
        recentTasks : [
            {
                title : 'javascript',
                lastupdate: '55m'
            }
        ]
    }
]
interface WorkSpaceListProps{}
const WorkSpaceList: FC<WorkSpaceListProps> = () => {
    return(
        <S.Block>
            {
                React.Children.toArray(
                    dummy.map((i)=><WorkSpaceItem></WorkSpaceItem>)
                )
            }
        </S.Block>
    )
} 
export default WorkSpaceList;