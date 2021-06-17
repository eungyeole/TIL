import { FC } from 'react';
import * as S from './styles'
interface HeaderMenuItemProps{
    href? : string;
    onClick? : () => void;
}
const HeaderMenuItem: FC<HeaderMenuItemProps> = ({children, href, onClick}) => {
    return(
        <S.Block>
            {children}
        </S.Block>
    )
}
export default HeaderMenuItem;