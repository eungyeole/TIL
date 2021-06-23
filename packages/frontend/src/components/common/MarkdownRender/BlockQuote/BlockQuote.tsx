import React from "react";
import { useEffect } from "react";
import { FC } from "react";
import * as S from './styles'
interface BlockQuoteProps {
    children : React.ReactNode
}
const BlockQuote : FC<BlockQuoteProps> = ({children}) => {
    return(
        <S.Block>
            {children}
        </S.Block>
    )
}
export default BlockQuote;