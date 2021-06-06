import React from 'react';
import '../assets/styles/components/InfoTemp.css';
 
export default function InfoTemp({temp, tempMax, tempMin, img, description}) {
    return (
        <div className = 'info-box'>
            <div className = 'info-temp'>
                   {temp}°C
            </div>
            <div className = 'info-temp-max-min'>
                <div className = 'max'>{tempMax}°</div> / <div className = 'min'>{tempMin}°</div> 
            </div>
            <hr />
            <div className = 'info-img'>
                 <img src={img} />
            </div>
            <div className = 'descrip'>
                "{description}"
            </div>
        </div>
    )
}
