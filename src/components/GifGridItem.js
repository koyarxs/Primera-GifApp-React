import React from 'react'

export const GifGridItem = ({ title, url }) => {

    return (
        <div className="carta animate__animated animate__lightSpeedInLeft">
            <img src={ url } alt={ title } />
            <p> {title} </p>
        </div>
    )
}
