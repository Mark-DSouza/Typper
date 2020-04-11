import {useState, useEffect, useRef} from 'react';

function useWordGame(startingTime = 10) {
    // Duration of the game

    // State variable declaration
    const [text, setText] = useState("");
    const [timer, setTimer] = useState(startingTime);
    const [gameActive, setGameActive] = useState(false);
    const [wordCount, setWordCount] = useState(0);

    // Reference hook declaration
    const textBoxRef =  useRef(null);

    // Function to handle changes in textarea(control form)
    function handleChange(event) {
        setText(event.target.value);
    }

    // Start Game when start button is clicked
    function startGame() {
        setGameActive(prevGameActive => !prevGameActive);
        setText("");
        setTimer(startingTime);
        textBoxRef.current.disabled = false;
        textBoxRef.current.focus();
    }

    // End game
    function endGame() {
        setGameActive(false);
        setWordCount(calculateWordCount(text));
    }

    // Word Calculator
    function calculateWordCount(text) {
        const wordsArray = text.trim().split(" ");
        return wordsArray.filter(word => word !== "").length;
    }

    // Hook to Countdown the timer and end game
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


    return {
        textBoxRef, 
        text, 
        handleChange, 
        gameActive, 
        timer, 
        startGame, 
        wordCount
    };
}

export default useWordGame;