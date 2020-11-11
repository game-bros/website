import React from 'react';
import styled from 'styled-components';
import ContentWrapper from './ContentWrapper';

const PageTitleBase = styled.div<TitleBaseProps>`
  background: ${({ background }) => background.endsWith('.png') ? "url('" + background + "')" : background};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 180px;

  div {
    height: 100%;
    display: flex;
    align-items: center;
  }

  h1 {
    font-size: 3em;
    color: white;
    text-shadow: 1px 1px 4px rgba(0 , 0, 0, 0.5);
  }
`;

type TitleBaseProps = {
  readonly background: string;
}

type TitleProps = {
  /** header text */
  readonly title: string;
  /** background. Can be a path to an image or a color */
  readonly background: string;
}

const PageTitle: React.FC<TitleProps> = ({ title, background }) => {
  return (
    <PageTitleBase background={background}>
      <ContentWrapper>
        <h1>{title}</h1>
      </ContentWrapper>
    </PageTitleBase>
  );
}

export default PageTitle;
