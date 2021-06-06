import React from 'react'
import '../assets/styles/components/Spinner.css'

export default function Spinner({loading}) {
    if({loading}){

    return (
        <div>
            <div className="lds-ripple"><div></div><div></div></div>
        </div>
    )}else{
        return(
            <div>
                Hola2
            </div>
        )
    }

}
