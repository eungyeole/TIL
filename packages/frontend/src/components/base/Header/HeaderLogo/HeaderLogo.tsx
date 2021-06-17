import { FC } from 'react';
import * as S from './styles'
import Link from 'next/link'
import { SlashIcon } from '../../../../static/svg'
interface HeaderLogoProps{
    username : string
}
const HeaderLogo : FC<HeaderLogoProps> = ({username}) => {
    return(
        <S.Block>
            <SlashIcon color="#eaeaea"></SlashIcon>
            <Link href={username}>
                <a className="user-logo">
                    {username}
                </a>
            </Link>
            
        </S.Block>
    )
}
export default HeaderLogo;