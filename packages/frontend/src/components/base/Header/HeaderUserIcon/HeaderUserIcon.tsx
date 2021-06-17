import { FC } from 'react';
import * as S from './styles'
import { MdArrowDropDown } from 'react-icons/md';
interface HeaderUserIconProps{
    url : string
}
const HeaderUserIcon : FC<HeaderUserIconProps> = ({url}) => {
    return(
        <S.Block>
            <img src={url}></img>
            <MdArrowDropDown></MdArrowDropDown>
        </S.Block>
    )
}
export default HeaderUserIcon;