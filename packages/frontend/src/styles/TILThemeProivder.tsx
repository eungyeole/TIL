import { Global, ThemeProvider } from '@emotion/react'
import { FC } from 'react';
import { globalStyle } from './globalStyle';
interface TILThemeProviderProps{
    children : React.ReactNode
}
const TILThemeProvider: FC<TILThemeProviderProps> = ({children}) => {

    return(
        <>
            <Global styles={globalStyle}></Global>
            {children}
        </>
    )
}
export default TILThemeProvider;