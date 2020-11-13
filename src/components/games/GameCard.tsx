import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const GameCardBase = styled(Link)<GameCardBaseProps>`
  position: relative;
  color: white;
  min-height: 200px;
  background-image: url('${props => props.image}');
  background-position: center top;
  display: block;

  .title {
    letter-spacing: 2px;
    margin: 0;
    text-transform: uppercase;
    padding: 5px 10px;
    text-align: center;
    position: absolute;
    bottom: 15px;
    left: 25px;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  }

  .tags {
    position: absolute;
    top: 5px;
    right: 10px;
  }

  .tag {
    margin-left: 10px;
    display: inline-block;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.7em;
    background-color: rgb(209 92 92);
    font-weight: 600;
    padding: 0 5px;
    text-shadow: 1px 1px 4px rgba(0 ,0, 0, 0.5);
  }
`;

type GameCardBaseProps = {
  readonly image: string;
}

type GameCardProps = {
  /** header text */
  readonly title: string;
  /** the location to link to */
  readonly to: string;
  /** path to an image that represents the game */
  readonly image: string;
}

const GameCard: React.FC<GameCardProps> = ({ title, to, image }) => {
  return (
    <GameCardBase to={to} image={image}>
        <h2 className="title">{title}</h2>
    </GameCardBase>
  );
}

export default GameCard;
