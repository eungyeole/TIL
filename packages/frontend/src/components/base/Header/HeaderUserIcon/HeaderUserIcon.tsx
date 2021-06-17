import { FC } from 'react';
import * as S from './styles'
import { MdArrowDropDown } from 'react-icons/md';
interface HeaderUserIconProps{
    url : string
    onClick : () => void
}
const HeaderUserIcon : FC<HeaderUserIconProps> = ({url, onClick}) => {
    return(
        <S.Block onClick={onClick}>
            <img src={url}></img>
            <MdArrowDropDown></MdArrowDropDown>
        </S.Block>
    )
}
export default HeaderUserIcon;