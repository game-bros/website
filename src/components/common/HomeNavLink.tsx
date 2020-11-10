import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type LinkProps = {
  /** the location to link to */
  readonly to: string;
}

const HomeNavLinkBase = styled.div`
  flex: 1;
  padding: 1em 0.5em;
  text-align: center;
  display: inline-block;
  box-sizing: border-box;
  font-size: 1.5em;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 0px 2px rgba(200, 200, 200, 0.15);

  @media only screen and (max-width: 600px) {
    font-size: 1.3em;
    padding: 0.5em 0.5em;
  }

  a {
    padding: 10px;
    color: black;
    font-weight: 700;
    transition: color 0.3s;
    position: relative;
    display: inline-block;
    outline: none;
    text-decoration: none;
  }

  a::before,
  a::after {
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background: #fff;
    content: '';
    opacity: 0;
    transition: opacity 0.3s, transform 0.3s;
    transform: translateY(-10px);
  }

  a::before {
    top: 0;
    transform: translateY(-10px);
  }

  a::after {
    bottom: 0;
    transform: translateY(10px);
  }

  a:hover,
  a:focus {
    color: #fff;
    outline: none;
  }

  a:hover::before,
  a:focus::before,
  a:hover::after,
  a:focus::after {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const HomeNavLink: React.FC<LinkProps> = ({ to, children }) => {
  return (
    <HomeNavLinkBase>
      <Link to={to}>{children}</Link>
    </HomeNavLinkBase>
  );
};

export default HomeNavLink;
