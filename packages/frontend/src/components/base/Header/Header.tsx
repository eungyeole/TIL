import { FC, useCallback, useRef } from "react";
import * as S from './styles'
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderUserIcon from "./HeaderUserIcon/HeaderUserIcon";
import HeaderUserMenu from "./HeaderUserMenu/HeaderUserMenu";
import useToggle from "../../../lib/hooks/useToggle";;
interface HeaderProps{
}
const Header : FC<HeaderProps> = () => {
    const [userMenu, toggleUserMenu] = useToggle(false);
    const ref = useRef<HTMLDivElement>(null);
    const onOutsideClick = useCallback(
        (e: React.MouseEvent) => {
          if (!ref.current) return;
          if (ref.current.contains(e.target as HTMLDivElement)) return;
          toggleUserMenu();
        },
        [toggleUserMenu],
    );
    return(
        <S.Block>
            <S.Inner>
                <HeaderLogo username={'eungyeole'} />
                <S.Right>
                    <div ref={ref}>
                        <HeaderUserIcon  
                            onClick={toggleUserMenu}
                            url="https://avatars.githubusercontent.com/u/66717787?v=4"
                        />
                    </div>
                    <HeaderUserMenu 
                        onClose={onOutsideClick} 
                        visible={userMenu}
                    />    
                </S.Right>
            </S.Inner>
        </S.Block>
    )
}
export default Header;