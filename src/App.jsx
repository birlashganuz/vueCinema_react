import React from 'react'
import Nav from './Components/Nav'
import Main from './Components/Main'
import Footer from './Components/Footer'

const App = () => {

  return (
    <>
      <header className="header">
        {
          <Nav />
        }
      </header>

      <main>
        <Main />
      </main>

      <footer>
        <Footer />
      </footer>
    </>

  )

}

export default App