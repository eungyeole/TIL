import React from "react";
import { useEffect } from "react";
import { FC } from "react";
import * as S from './styles'
interface BlockQuoteProps {
    children : React.ReactNode
}
const BlockQuote : FC<BlockQuoteProps> = ({children}) => {
    useEffect(()=>{
        //console.log(children[1])
        console.log(children[1]?.props?.children.map((i)=>{
            if(typeof i === "object") return i;
            else return i.split("\n").map(line=>{
                if(line.length > 0) return (<span><br/>{line}</span>)
            })
            
        }))
    },[children])
    return(
        <S.Block>
            {
                children[1]?.props?.children.map((i)=>{
                    if(typeof i === "object") return i;
                    else return i.split("\n").map(line=><span><br/>{line}</span>)
                    
                })
            }
        </S.Block>
    )
}
export default BlockQuote;