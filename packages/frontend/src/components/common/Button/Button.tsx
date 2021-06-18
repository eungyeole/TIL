import { HTMLProps } from 'react'
import * as S from './styles'
interface ButtonProps extends HTMLProps<HTMLButtonElement> {}
const Button: React.FC<ButtonProps> = ({
    children,
    ...rest
}) => {
    const htmlProps = rest as any;
    return(
        <S.Block
            {...htmlProps}
            onClick={e => {
                if (htmlProps.onClick) {
                  htmlProps.onClick(e);
                }
                (e.target as HTMLButtonElement).blur();
            }}
        >
            {children}
        </S.Block>
    )
}
export default Button