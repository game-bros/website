import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ContentWrapper from '../components/common/ContentWrapper';
import Page from '../components/common/Page';
import GameCard, { GameCardProps } from '../components/games/GameCard';
import client from '../ContentfulClient';
import { IGameFields } from '../schema/generated/contentful';

const GameContainer = styled(ContentWrapper)`
  a {
    margin-top: 10px;
  }
`;

const Games = () => {
  const [games, setGames] = useState<GameCardProps[]>([]);

  useEffect(() => {
    const fetchGames = async () => {
      const response = await client.getEntries<IGameFields>({
        content_type: 'game'
      });

      setGames(response.items.map(game => ({
        title: game.fields.shortTitle,
        image: game.fields.coverImage.fields.file.url,
        to: '/games/' + game.fields.slug
      })));
    };

    fetchGames();
  }, []);

  return (
    <Page title="Games" titleBackground="rgb(94, 92, 209)">
      <GameContainer>
        {games.map(game => <GameCard key={game.title} {...game} />)}
      </GameContainer>
    </Page>
  );
}

export default Games;
