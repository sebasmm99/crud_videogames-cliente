import axios from 'axios'
import React, { useEffect, useState } from 'react'
import GetGame from './GetGame'

function GameList() {
  
    const[datagame, setdatagame]=useState([])

    useEffect(() => {
        axios.get('api/game/gamelist').then(res => {
            console.log(res.data)
            setdatagame(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const gamelist = datagame.map(game => {
        return(
            <div>
                <GetGame game={game}/>
            </div>
        )
    })
  
    return (
        <div>
            <h2>Game List</h2>
            {gamelist}
        </div>
  )
}

export default GameList
