import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import PageOne from './pages/PageOne'
import PageTwo from './pages/PageTwo'
import PageThree from './pages/PageThree'
import PageFour from './pages/PageFour'

import NavBar  from './NavBar'




const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <div>
                <NavBar />
                    <Route path="/" exact component={PageOne} />
                    <Route path="/pagetwo" exact component={PageTwo} />
                    <Route path="/pagethree" exact component={PageThree} />
                    <Route path="/pagefour" exact component={PageFour} />
                    
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;