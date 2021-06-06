import React from 'react';
import '../assets/styles/components/InfoGen.css';
import winds from '../assets/styles/static/wind.png' ;
import atmospheric from '../assets/styles/static/atmospheric.png';
import seaLevels from '../assets/styles/static/seaLevel.png';
import humidity from '../assets/styles/static/humidity.png';

export default function InfoGen({wind, seaLevel, humi, pressure}) {
    return (
        <div>
            <div className='info-info-center'>
                <ul className='list'>
                    <li>
                        <img src={winds} />     Velocidad del viento: {wind} Km/h.
                    </li>
                    <li>
                        <img src={seaLevels} />    Nivel de mar: {seaLevel} mtrs.?
                    </li>
                    <li>
                        <img src={humidity} />     Humedad: {humi}%.
                    </li>
                    <li>
                        <img src={atmospheric} />     Presión: {pressure} hPa.
                    </li>
                </ul>
            </div>
        </div>
    )
}
