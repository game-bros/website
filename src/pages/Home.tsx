import React from 'react';
import styled from 'styled-components';
import ContentWrapper from '../components/common/ContentWrapper';
import HomeNavLink from '../components/common/HomeNavLink';

const HomeBg = styled.div`
  position: fixed;
  min-height: 100%;
  min-width: 100%;
  background-color: ${props => props.theme.colors.blue};
  z-index: -1;
  top: 0;
`;

const HomeBase = styled.div`
  margin-top: 220px;

  .site-logo {
    max-width: 100%;
  }

  nav {
    display: flex;
    flex-direction: column;

    @media only screen and ${props => props.theme.mediaQueries.tablet} {
      flex-direction: row;
    }
  }
`;

const Home = () => {
  return (
    <HomeBase>
      <HomeBg></HomeBg>
      <ContentWrapper width="600px">
        <img className="site-logo" src="/img/gamebros-logo.svg" alt="GameBros" />
        <nav>
          <HomeNavLink to="/games">Games</HomeNavLink>
          <HomeNavLink to="/bros">Bros</HomeNavLink>
          {/* <HomeNavLink to="/blog">Blog</HomeNavLink> */}
        </nav>
      </ContentWrapper>
    </HomeBase>
  );
};

export default Home;
