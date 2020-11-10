import React from 'react';
import styled from 'styled-components';
import ContentWrapper from '../components/common/ContentWrapper';
import HomeNavLink from '../components/common/HomeNavLink';

const HomeBg = styled.div`
  position: fixed;
  min-height: 100%;
  min-width: 100%;
  background-color: blue;
  z-index: -1;
  top: 0;
`;

const HomeMainContent = styled.div`
  margin-top: 220px;

  .site-logo {
    max-width: 100%;
  }

  nav {
    display: flex;

    @media only screen and (max-width: 450px) {
      flex-direction: column;
    }
  }
`;

const Home = () => {
  return (
    <div>
      <HomeBg></HomeBg>
      <ContentWrapper width="600px">
        <HomeMainContent>
          <img className="site-logo" src="/img/gamebros-logo.svg" alt="GameBros" />
          <nav>
            <HomeNavLink to="/games">Games</HomeNavLink>
            <HomeNavLink to="/bros">Bros</HomeNavLink>
            <HomeNavLink to="/blog">Blog</HomeNavLink>
          </nav>
        </HomeMainContent>
      </ContentWrapper>
    </div>
  );
};

export default Home;
