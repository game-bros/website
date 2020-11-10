import styled from 'styled-components';

type WrapperProps = {
  /** max-width of the wrapped content area */
  readonly width: string;
}

const ContentWrapper = styled.div<WrapperProps>`
  max-width: ${({width = '800px'}) => width};
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 10px;
  position: relative;
`;

export default ContentWrapper;
