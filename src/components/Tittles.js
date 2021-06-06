import React from 'react'
import '../assets/styles/components/Tittles.css'
import imgTittle from '../assets/styles/static/tittle.png'

export default function Tittles() {
    return (
        <div className = 'tittles'>
            <h2>Weather App</h2>
            <img className = 'img-tittle' src = {imgTittle}/>
        </div>
    )
}
