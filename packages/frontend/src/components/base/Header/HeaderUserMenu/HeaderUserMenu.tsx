import { FC, useEffect } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import HeaderMenuItem from "./HeaderMenuItem/HeaderMenuItem";
import * as S from './styles'
interface HeaderUserMenuProps {
    onClose: (e: React.MouseEvent) => void;
    onLogout?: () => void;
    username?: string;
    visible: boolean;
}   
const HeaderUserMenu: FC<HeaderUserMenuProps> = ({onClose, onLogout, username, visible}) => {
    if(!visible) return null;
    return(
        <OutsideClickHandler onOutsideClick={onClose}>
            <S.Block>
                <S.MenuWrapper>
                    <HeaderMenuItem>DashBoard</HeaderMenuItem>
                    <S.Line></S.Line>
                    <HeaderMenuItem>Logout</HeaderMenuItem>
                </S.MenuWrapper>
            </S.Block>
        </OutsideClickHandler>
    )
}
export default HeaderUserMenu;