import { FC } from "react";
import HeaderMenuItem from "./HeaderMenuItem/HeaderMenuItem";
import * as S from './styles'
interface HeaderUserMenuProps {
    onClose?: (e: React.MouseEvent) => void;
    onLogout?: () => void;
    username?: string;
    visible: boolean;
}   
const HeaderUserMenu: FC<HeaderUserMenuProps> = ({onClose, onLogout, username, visible}) => {
    if(!visible) return null;
    return(
        <S.Block>
            <S.MenuWrapper>
                <HeaderMenuItem>DashBoard</HeaderMenuItem>
                <S.Line></S.Line>
                <HeaderMenuItem>Logout</HeaderMenuItem>
            </S.MenuWrapper>
        </S.Block>
    )
}
export default HeaderUserMenu;