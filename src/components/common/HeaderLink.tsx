import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderLinkBase = styled(Link)`
  position: relative;
  display: inline-block;
  outline: none;
  color: #333;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  text-shadow: 0 0 1px rgba(0,0,0,0.3);
  font-size: 0.9em;

  &::before,
  &::after {
    display: inline-block;
    opacity: 0;
    transition: transform 0.3s, opacity 0.2s;
  }

  &::before,
  &:focus::before {
    margin-right: 10px;
    content: '[';
    transform: translateX(20px);
  }

  &::after,
  &:focus::after {
    margin-left: 10px;
    content: ']';
    transform: translateX(-20px);
  }

  &:hover::before,
  &:hover::after {
    opacity: 1;
    transform: translateX(0px);
  }
`;

type LinkProps = {
  /** the location to link to */
  readonly to: string;
}

const HeaderLink: React.FC<LinkProps> = ({ to, children }) => {
  return (
    <HeaderLinkBase to={to}>{children}</HeaderLinkBase>
  )
}

export default HeaderLink;
