import React, {Fragment, useState} from 'react'

function App() {
    const [text, setText] = useState("");

    function handleChange(event) {
        setText(event.target.value);
    }
    
    return (
        <Fragment>
            <h1>How fast do you type?</h1>
            <textarea value={text} onChange={handleChange}/>
            <h4>Time Remaining: ???</h4>
            <button>Start</button>
            <h1>Word Count: ???</h1>
        </Fragment>
    )
}

export default App;