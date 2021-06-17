import styled from '@emotion/styled';
import { mediaQuery } from '../../../lib/styles/media';
export const Block = styled.div`
  width: 1048px;
  margin-left: auto;
  margin-right: auto;
  ${mediaQuery(1056)} {
    width: calc(100% - 2rem);
  }
`;