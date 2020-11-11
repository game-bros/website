import React from 'react';
import Game from '../../components/games/Game';

function CoolBombers() {
  return (
    <Game title="Cool Bombers"
          titleBackground="/img/games/coolbombers/cb4.png"
          screenshots={[
            '/img/games/coolbombers/cb1.png',
            '/img/games/coolbombers/cb2.png',
            '/img/games/coolbombers/cb3.png',
            '/img/games/coolbombers/cb4.png'
          ]}
          video="http://www.youtube.com/embed/S-QRGV63XoM?wmode=transparent"
          download="download/CoolBombers.jar">
      <p>Have you ever wanted to be a treasure hunter? Now is your chance. Be one of the 4 miners in Cool Bombers! Blast your way through the rough landscapes of sand and rock to get your hands on the treasures. But be aware! Mining is dirty business and your rivals are ruthless..</p>
      <p>In between dodging bombs and trying to destroy your enemies the goal is to gather as much treasures as possible. In addition to 9 different weapons and a lot of playable levels, the game has a large variety of adjustements. The graphical look and the mind blowing music will take you back to the golden era of games! ;) Cool Bombers is for 2-4 players. It can be played on a single computer or online through a network connection.</p>
    </Game>
  );
}

export default CoolBombers;
