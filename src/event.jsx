import React from 'react'

const Event = () => {

    document.addEventListener('click', (e) => {
        console.log("---document click---");
    })

    return (
        <div>Event</div>
    )
}

export default Event