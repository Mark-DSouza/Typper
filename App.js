import React, {Fragment, useState, useEffect, useRef} from 'react'

function App() {
    const STARTING_TIME = 15;

    const [text, setText] = useState("");
    const [timer, setTimer] = useState(STARTING_TIME);
    const [gameActive, setGameActive] = useState(false);
    const [wordCount, setWordCount] = useState(0);

    const textBoxRef =  useRef(null);

    
    function handleChange(event) {
        setText(event.target.value);
    }

    function startGame() {
        setGameActive(prevGameActive => !prevGameActive);
        setText("");
        setTimer(STARTING_TIME);
        textBoxRef.current.disabled = false;
        textBoxRef.current.focus();
    }

    function endGame() {
        setGameActive(false);
        setWordCount(calculateWordCount(text));
    }

    function calculateWordCount(text) {
        const wordsArray = text.trim().split(" ");
        return wordsArray.filter(word => word !== "").length;
    }

    useEffect(() => {
        if (timer > 0 && gameActive) {
            setTimeout(() => {
                setTimer(prevTimer => prevTimer - 1)
            }, 1000)
        }

        else if (timer === 0) {
            endGame();
        }
    }, [timer, gameActive]);

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