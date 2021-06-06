import React from 'react';
import '../assets/styles/components/City.css'

export default function City({city, abr}) {
    return (
        <div className = 'info-ubication'>
            {city}, {abr}.
        </div>
    )
}
