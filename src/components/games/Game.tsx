import { faWindows } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import ContentWrapper from '../common/ContentWrapper';
import Page from '../common/Page';
import Screenshot from '../common/Screenshot';

const GameBase = styled.div`
  position: relative;

  main {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .description {
    flex: 5;
    padding-right: 30px;
    box-sizing: border-box;
  }

  .info {
    margin-top: 20px;
    flex: 3;

    .video-container iframe {
      height: 220px;
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
    background-color: black;

    .wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      margin: 0 -10px;
    }
  }

  .screenshot {
    flex: 1;
    margin: 10px;
    min-width: 180px;
    border: solid 1px rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
  }

  @media only screen and (max-width: 600px) {
    main,
    .screenshots {
      flex-direction: column;
    }

    .description {
      padding-right: 0;
    }
  }
`;

type GameProps = {
  /** page header text */
  readonly title: string;
  /** background of the page header. Can be a path to an image or a color */
  readonly titleBackground: string;
  /** optional. Path to downloadable file */
  readonly download?: string;
  /** optional. Url to embedded video */
  readonly video?: string;
  /** array where each item is a path to screenshot */
  readonly screenshots: string[]
}

const Game: React.FC<GameProps> = ({ children, title, titleBackground, video, download, screenshots }) => {
  return (
    <Page title={title} titleBackground={titleBackground}>
      <GameBase>
        <ContentWrapper>
          <main>
            <article className="description">
              {children}
            </article>

            <aside className="info">
              {video && <div className="video-container">
                <iframe title="ASWX gameplay video"
                        width="100%"
                        height="100%"
                        src={video} />
              </div>}
              {download && <a href={download} className="download">
                Download <span><FontAwesomeIcon icon={faWindows} /></span>
              </a>}
            </aside>
            <div className="break"></div>
          </main>
        </ContentWrapper>

        <section className="screenshots">
          <ContentWrapper>
            <div className="wrapper">
              {screenshots.map(screenshot => (
                <div key={screenshot} className="screenshot" >
                  <Screenshot image={screenshot} />
                </div>
              ))}
            </div>
          </ContentWrapper>
        </section>
      </GameBase>
    </Page>
  );
}

export default Game;
