import React, { useState } from 'react';
import styled from 'styled-components';

const ScreenshotBase = styled.div`
  .screenshot {
    display: inline-block;
    width: 100%;
    height: 100%;
    cursor: pointer;

    img {
      width: 100%;
    }
  }

  .lightbox {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: 2000;
    margin: 0 auto;
    top: 0;
    left: 0;
    text-align: center;
    vertical-align: center;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    .wrapper {
      max-height: 90vh;
    }

    img {
      max-width: 100%;
      max-height: 100%;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
  }
`;

type ScreenshotProps = {
  /** url to screenshot image file */
  readonly image: string;
  /** screenshot image alt text */
  readonly alt: string;
}

const Screenshot: React.FC<ScreenshotProps> = ({image, alt}) => {
  const [ enlarged, setEnlarge ] = useState(false);

  const toggleEnlarge = (event: React.MouseEvent) => {
    event.preventDefault();
    setEnlarge(!enlarged);
  };

  return (
    <ScreenshotBase onClick={toggleEnlarge}>
      <div className="screenshot">
        <img src={image} alt={alt} />
      </div>

      {enlarged &&
        <div className="lightbox" onClick={toggleEnlarge}>
          <div className="wrapper">
            <img src={image} alt={alt} />
          </div>
        </div>
      }

    </ScreenshotBase>
  );
}

export default Screenshot;
