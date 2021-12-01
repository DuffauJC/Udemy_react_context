import React, { useContext } from 'react'
import { ThemeContext } from '../../Context/themecontext'
import "./btntoggle.css"


const Btntoggle = () => {

const {toggleTheme,theme}=useContext(ThemeContext)

    return (
        <button
            onClick={toggleTheme}
            className={theme ? "btn-toggle":"btn-toggle dark-btn"}>
            {theme ? "LIGHT" :"DARK"}
        </button>
    )
}

export default Btntoggle
