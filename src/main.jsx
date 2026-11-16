import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'

const root = createRoot(document.getElementById('root'))
root.render(
  <Page />
)

function Page() {
    return(
        <>
        <Header />
        <MainContent/>
        <Footer />
        </>
    )
}
function Header() {
    return(
        <header>
        <img src="./src/assets/react.svg" width="40px" alt="React logo" />
    </header>
    )
}
function MainContent() {
    return(
        <main>
        <h1>Fun facts about React!</h1>
        <ul>
            <li>Was first release in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 200K stars on GitHub</li>
            <li>Is maintained by Meta</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </main>
    )
}
function Footer() {
    return(
         <footer>
            <small>© 2024 IceSky development. All rights reserved.</small>
        </footer>
    )
}
