import React from 'react';
import styled from 'styled-components';
import ContentWrapper from '../components/common/ContentWrapper';
import Page from '../components/common/Page';

const GameContainer = styled(ContentWrapper)`
  .game {
    margin-top: 10px;
  }
`;

function Games() {
  return (
    <Page title="Games" titleBackground="rgb(94, 92, 209)">
      <GameContainer>
        <div className="game">insert game here</div>
        <div className="game">insert another game here</div>
      </GameContainer>
    </Page>
  );
}

export default Games;
