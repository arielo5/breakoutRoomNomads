import React, { useState } from 'react'
import NewPoll from "../newPoll/newPoll"

export default function Dashboard() {
    const [showPoll, setShowPoll] = useState(false);
    return (
        <div id="buttonContainer">
            <button id="createNewPoll" onClick={() => setShowPoll(!showPoll)}><span id='buttonText'>Create Poll</span></button>
            {showPoll ? <NewPoll /> : <></>}
        </div>
    )
}