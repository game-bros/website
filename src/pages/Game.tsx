import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';
import { faWindows } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import ContentWrapper from '../components/common/ContentWrapper';
import Page from '../components/common/Page';
import Screenshot from '../components/common/Screenshot';
import { getEntryBySlug } from '../ContentfulClient';
import { IGameFields } from '../schema/generated/contentful';
import PageNotFound from './PageNotFound';


const GameBase = styled.div`
  position: relative;

  main {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    flex-direction: column;
  }

  .description {
    flex: 5;
    padding-right: 0;
    box-sizing: border-box;
  }

  .info {
    margin-top: 20px;
    flex: 3;

    .video-container iframe {
      min-height: 220px;
      height: 12vw;
      min-width: 250px;
      box-sizing: border-box;
    }

    .download {
      margin-top: 5px;
      padding: 15px;
      background-color: rgb(209 92 92);
      color: whitesmoke;
      text-decoration: none;
      display: block;
      transition: 0.2s ease-in-out;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 1.3em;
      font-weight: 600;
      text-align: center;

      span {
        margin-left: 10px;
      }

      &:hover,
      &:focus {
        background-color: rgb(181, 81, 81);
      }
    }
  }

  .screenshots {
    margin-top: 30px;
    padding: 20px;

    .wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      margin: 0 -10px;

      > div {
        flex: 1;
        margin: 10px;
        min-width: 180px;
        border: solid 1px rgba(255, 255, 255, 0.1);
        box-sizing: border-box;
      }
    }
  }

  @media only screen and ${props => props.theme.mediaQueries.tablet} {
    main {
      flex-direction: row;
    }

    .description {
      padding-right: 30px;
    }
  }
`;

type GameProps = {
  /** page header text */
  readonly title: string;
  /** url to background image of the page header */
  readonly titleBackground: string;
  /** game description */
  readonly description?: Document;
  /** optional. Url to downloadable file */
  readonly download?: string;
  /** optional. Url to embedded video */
  readonly video?: string;
  /** optional. Array of screenshot urls  */
  readonly screenshots?: ScreenshotProps[]
}

type ScreenshotProps = {
  id: string;
  alt: string;
  url: string;
}

type RouteInfo = {
  slug: string;
}

const Game: React.FC<RouteComponentProps<RouteInfo>> = ({ match }) => {
  const [game, setGame] = useState<GameProps | undefined>({
    title: '',
    titleBackground: ''
  });

  useEffect(() => {
    const fetchGame = async () => {
      const gameEntry: IGameFields | undefined = await getEntryBySlug('game', match.params.slug);

      setGame(gameEntry ? {
        title: gameEntry.title,
        description: gameEntry.description,
        titleBackground: gameEntry.coverImage.fields.file.url,
        video: gameEntry.videoUrl,
        download: gameEntry.download?.fields.file.url,
        screenshots: gameEntry.screenshots?.map(screenshot => ({
          id: screenshot.sys.id,
          alt: screenshot.fields.title,
          url: screenshot.fields.file.url
        }))
      } : undefined);
    };

    fetchGame();
  }, [match.params.slug]);

  return !game ? <PageNotFound></PageNotFound> : (
    <Page title={game.title} titleBackground={game.titleBackground}>
      <GameBase>
        <ContentWrapper>
          <main>
            <article className="description">
              {game.description && documentToReactComponents(game.description)}
            </article>

            <aside className="info">
              {game.video && <div className="video-container">
                <iframe title="Gameplay video"
                        width="100%"
                        height="100%"
                        src={game.video} />
              </div>}
              {game.download && <Link className="download" to={game.download} target="_blank" download>
                Download <span><FontAwesomeIcon icon={faWindows} /></span>
              </Link>}
            </aside>
            <div className="break"></div>
          </main>
        </ContentWrapper>

        {game.screenshots && <section className="screenshots">
          <ContentWrapper>
            <div className="wrapper">
              {game.screenshots?.map(screenshot => (
                <Screenshot key={screenshot.id} image={screenshot.url} alt={screenshot.alt} />
              ))}
            </div>
          </ContentWrapper>
        </section>}
      </GameBase>
    </Page>
  );
}

export default Game;
