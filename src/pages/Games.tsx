import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ContentWrapper from '../components/common/ContentWrapper';
import Page from '../components/common/Page';
import GameCard from '../components/games/GameCard';
import client from '../ContentfulClient';
import { IGameFields } from '../schema/generated/contentful';

const GameContainer = styled(ContentWrapper)`
  a {
    margin-top: 10px;
  }
`;

type Game = {
  /** Name of the game */
  readonly title: string;
  /** game cover image url */
  readonly image: string;
  /** path to game page */
  readonly to: string;
}

const Games = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const fetchGames = async () => {
      const response = await client.getEntries<IGameFields>({
        content_type: 'game'
      });

      setGames(response.items.map(game => ({
        title: game.fields.shortTitle,
        image: game.fields.coverImage.fields.file.url,
        to: ''
      })));
    };

    fetchGames();
  }, []);

  return (
    <Page title="Games" titleBackground="rgb(94, 92, 209)">
      <GameContainer>
        {games.map(game => (
          <GameCard key={game.title} title={game.title}
            image={game.image}
            to={game.to} />
        ))}
      </GameContainer>
    </Page>
  );
}

export default Games;
