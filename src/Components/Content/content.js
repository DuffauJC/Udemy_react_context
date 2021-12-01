import React,{useContext} from 'react'
import Btntoggle from '../BtnToggle/btntoggle'
import './content.css'
import {ThemeContext} from '../../Context/themecontext'

const Content = () => {

    const { theme } = useContext(ThemeContext)
    console.log(theme)


    return (
        <div className="container">
            <Btntoggle/>
            <h1>Lorem ipsum</h1>
            <p className="context-txt">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam tempore maiores aliquid, vitae sint distinctio possimus dignissimos dolorem id? Voluptatum eum, officiis cumque quidem voluptas aut eveniet sequi omnis exercitationem?
            </p>
        </div>
    )
}

export default Content
