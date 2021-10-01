import React from 'react'
import "../../App.css"
import "./newPoll.css"
import { SAVE_POLL } from "../../utils/mutations"

function NewPoll() {

    return (
        <>
            <section>
                <div>
                    <h1 classList="whiteText" style={{ fontSize: "50px", fontFamily: "'Architects Daughter', cursive" }}>Create New Poll</h1>
                </div>
                <hr></hr>
                <h3 style={{ fontSize: "30px", fontFamily: "'Architects Daughter', cursive" }}>Poll Name</h3>
                <form>
                    <input type="text" placeholder="new poll name"></input>
                    <input value="Save" type="submit" onClick={SAVE_POLL}></input>
                </form>
            </section>
        </>
    )
}
export default NewPoll