import * as S from './styles'

export type MainResponsiveProps = {
  className?: string;
  children: React.ReactNode;
};

function MainResponsive({ className, children }: MainResponsiveProps) {
  return <S.Block className={className}>{children}</S.Block>;
}



export default MainResponsive;