import React from 'react'

const Event = () => {

    document.addEventListener('click', (e) => {
        console.log("---document click---");
    })

    return (
        <div>Learnign events</div>
    )
}

export default Event