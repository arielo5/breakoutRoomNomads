import React from 'react'

export default function Title() {
    return (
        <section className="hero titlebg">
        <div className="columns">
            <div className="column is-3"></div>
        <div className="hero-body column">
          <p className="title titlebg titletext" id="pollTitle">
            What should we have for dinner tonight?
          </p>
          <p className="subtitle titlebg titletext">
            <i className="subtitle-text" id="username">By: Karl Baker</i>
            <br />
            <i className="createdate" id="createDate">Created: 09/17/21 - 10:38AM</i>
          </p>
        </div>
        <div className="column is-3"></div>
        </div>
      </section>
    )
}