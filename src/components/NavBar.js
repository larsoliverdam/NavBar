import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="ui  pointing right menu" style={{backgroundColor: 'lightBlue'}}>
            <Link to="/" className="item"  style={{backgroundColor: 'lightGrey'}}>
                Page One
            </Link>
            <div className="right menu">
                <Link to="/pagetwo" className="item" style={{backgroundColor: 'lightGrey'}}>
                    PageTwo
                </Link>
                <div className="right menu">
                <Link to="/pagethree" className="item" style={{backgroundColor: 'lightGrey'}}>
                    PageThree
                </Link>
                <div className="right menu">
                <Link to="/pageFour" className="item" style={{backgroundColor: 'lightGrey'}}>
                    PageFour
                </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar; 