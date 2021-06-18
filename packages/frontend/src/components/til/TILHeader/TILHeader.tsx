import { FC } from "react";
import Button from "../../common/Button/Button";
import * as S from './styles'
interface TILHeaderProps{
    username : string
}
const TILHeader: FC<TILHeaderProps> = ({username}) => {
    return(
        <S.Block>
            <S.Inner>
                <S.Left>
                    <img src="https://avatars.githubusercontent.com/u/66717787?v=4"></img>
                    <S.UserBlock>
                        <h2 className='user-name'>{username}</h2>
                        <p className='description'>FrontEnd 공부중인 안은결입니다.</p>
                    </S.UserBlock>
                </S.Left>
                <Button onClick={()=>alert('test')}>New Workspace</Button>
            </S.Inner>
        </S.Block>
    )
}
export default TILHeader;