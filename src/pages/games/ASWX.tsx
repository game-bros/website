import React from 'react';
import Game from '../../components/games/Game';

const ASWX = () => {
  return (
    <Game title="ASCII Star Wars Xtreme"
          titleBackground="/img/games/aswx/aswx3.png"
          screenshots={[
            '/img/games/aswx/aswx1.png',
            '/img/games/aswx/aswx2.png',
            '/img/games/aswx/aswx3.png',
            '/img/games/aswx/aswx4.png'
          ]}
          video="http://www.youtube.com/embed/LDeufC5mqTo?wmode=transparent"
          download="/download/ASWX.zip">
      <p>Choose your favourite ASCII character as your spaceship and become a lengendary spacepilot!</p>
      <p>In AswX your mission is to destroy your enemies while avoiding of getting hit yourself. There are over a hundred of different looking ships and a number of cool weapons and upgrades in the game. You can play AswX alone or with up to 4 players at once.</p>
    </Game>
  );
}

export default ASWX;
