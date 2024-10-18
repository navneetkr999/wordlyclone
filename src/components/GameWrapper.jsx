import React from 'react'
import GameRow from './GameRow'

const GameWrapper = () => {
    return (
        <>
            {Array(6).fill().map((_, index) => (
                <GameRow key={index} /> // Render GameRow 6 times
            ))}
        </>
    )
}

export default GameWrapper
