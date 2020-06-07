import React from "react"
import { navLinks } from '../config'

const Menu = () => {
    return (
        <ol>
            {
                navLinks.map((data, index) => {
                    return (
                        <li key={index}>{data.name}</li>
                    )
                })
            }
        </ol>
    )
}

export default Menu