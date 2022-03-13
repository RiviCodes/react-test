//import React from "react"
//import ReactDOM from "react-dom"

const myPage = (
    <div className="main-section">
        <header>
            <img src="./react-logo.png" className="header-logo" />
            <ul>
                <li>About</li>
                <li>Pricing</li>
                <li>Contact</li>
            </ul>
        </header>
        <h1>Fun facts about React!</h1>
        <ul className="fun-facts">
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars in Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)

ReactDOM.render(myPage, document.getElementById("root"))