import Player from './components/Player';
import GameBoard from './components/GameBoard';
import { useState } from 'react';
import Log from './components/Log';

//helper function
function derivedActivePlayer(gameTurns){
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = '0';
  }
  return currentPlayer;
}


function App() {

  // const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([])
  //Lifting state up, child componentlerin ikisininde ihtiyacı oluyorsa en yakın ataya taşıyorsun state'i.

  const activePlayer = derivedActivePlayer(gameTurns);

     

  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns(prevTurns => {
      const currentPlayer = derivedActivePlayer(prevTurns);
      
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
      ...prevTurns,
      ];

      return updatedTurns;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player
            initialName='Player 1'
            symbol='X'
            isActive={activePlayer === 'X'} />
          <Player
            initialName='Player 2'
            symbol='O'
            isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
          turns={gameTurns} />

      </div>

      <Log turns={gameTurns}/>
    </main>
  )
}

export default App;
