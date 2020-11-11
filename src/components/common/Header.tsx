import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ContentWrapper from './ContentWrapper';
import HeaderLink from './HeaderLink';

const HeaderBase = styled.div`
  .fixed, .placeholder {
    height: 70px;
  }

  .wrapper {
    position: relative;
  }

  .fixed {
    position: fixed;
    font-size: 1.3em;
    padding: 10px 0;
    background-color: whitesmoke;
    box-sizing: border-box;
    width: 100vw;
    box-shadow: 1px 1px 4px rgba(0,0,0,0.3);
    z-index: 1000;

    .site-logo,
    .site-logo-small {
      height: 50px;
    }

    .site-logo-small {
      display: none;
    }

    @media only screen and (max-width: 600px) {
      font-size: 1em;

      .site-logo-small {
        display: block;
      }

      .site-logo {
        display: none;
      }
    }

    a {
      line-height: 0 ;
    }

    nav {
      align-self: flex-end;
      display: flex;
      align-items: center;
      position: relative;
    }

    nav ul {
      margin: 0;
      flex: 1;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 0;
    }

    nav li {
      list-style-type: none;
      padding: 0 10px;
    }

    nav li:last-child {
      padding-right: 0;
    }
  }
`;

const Header = () => {
  return (
    <HeaderBase>
      <div className="fixed">
        <ContentWrapper className="wrapper">
          <nav>
            <Link to="/">
              <img className="site-logo" src="/img/gamebros-logo.svg" alt="GameBros" />
              <img className="site-logo-small" src="/img/gamebros-logo-small.svg" alt="GameBros" />
            </Link>

            <ul>
              <li><HeaderLink to="/games">Games</HeaderLink></li>
              <li><HeaderLink to="/bros">Bros</HeaderLink></li>
              <li><HeaderLink to="/blog">Blog</HeaderLink></li>
            </ul>
          </nav>
        </ContentWrapper>
      </div>
      <div className="placeholder"></div>
    </HeaderBase>
  );
}

export default Header;
