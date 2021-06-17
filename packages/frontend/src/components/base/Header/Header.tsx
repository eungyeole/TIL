import { FC } from "react";
import * as S from './styles'
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderUserIcon from "./HeaderUserIcon/HeaderUserIcon";
import HeaderUserMenu from "./HeaderUserMenu/HeaderUserMenu";
const Header : FC = () => {
    return(
        <S.Block>
            <S.Inner>
                <HeaderLogo username="eungyeole"></HeaderLogo>
                <S.Right>
                    <HeaderUserIcon url="https://avatars.githubusercontent.com/u/66717787?v=4"></HeaderUserIcon>
                    <HeaderUserMenu visible={true}></HeaderUserMenu>
                </S.Right>
            </S.Inner>
        </S.Block>
    )
}
export default Header;