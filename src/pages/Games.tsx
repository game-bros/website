import React from 'react';
import styled from 'styled-components';
import ContentWrapper from '../components/common/ContentWrapper';
import Page from '../components/common/Page';
import GameCard from '../components/games/GameCard';

const GameContainer = styled(ContentWrapper)`
  a {
    margin-top: 10px;
  }
`;

const Games = () => {
  return (
    <Page title="Games" titleBackground="rgb(94, 92, 209)">
      <GameContainer>
        <GameCard title="Cool Bombers"
              image="/img/games/coolbombers/cb4.png"
              tags={['Windows']}
              to="/games/coolbombers" />
        <GameCard title="ASWX"
              image="/img/games/aswx/aswx3.png"
              tags={['Windows']}
              to="/games/aswx" />
      </GameContainer>
    </Page>
  );
}

export default Games;
