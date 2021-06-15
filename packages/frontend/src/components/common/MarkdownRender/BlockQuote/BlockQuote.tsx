import React from "react";
import { useEffect } from "react";
import { FC } from "react";
import * as S from './styles'
interface BlockQuoteProps {
    children : React.ReactNode
}
const BlockQuote : FC<BlockQuoteProps> = ({children}) => {
    useEffect(()=>{
        console.log()
    },[children])
    return(
        <S.Block>
            {children[1]?.props.children[0].split('\n').map((line,index) => {
                return (<span key={index}>{line}<br/></span>)
            })}
        </S.Block>
    )
}
export default BlockQuote;