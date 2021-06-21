import { FC } from "react";
import * as S from './styles'
const RecentActivityItem: FC = () => {
    return(
        <S.Block>
            <img src='https://avatars.githubusercontent.com/u/66717787?v=4'></img>
            <div className='activity-info'>
                <p className='activity-description'>
                    <span>eungyeole</span> has published <span>안녕하세요</span> on the <span>java</span> workspace.
                </p>
                <div className='created_at'>4h</div>
            </div>
        </S.Block>
    )
}
export default RecentActivityItem;