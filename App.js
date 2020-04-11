import React, {Fragment} from 'react';

import useWordGame from './hooks/useWordGame';

function App() {
    const {
        textBoxRef, 
        text, 
        handleChange, 
        gameActive, 
        timer, 
        startGame, 
        wordCount
    } = useWordGame(15);

    return (
        <Fragment>
            <h1>How fast do you type?</h1>
            <textarea ref={textBoxRef} value={text} onChange={handleChange} disabled={!gameActive}/>
            <h4>Time Remaining: {timer}</h4>
            <button onClick={startGame} disabled={gameActive}>Start</button>
            <h1>Word Count: {wordCount}</h1>
        </Fragment>
    )
}

export default App;