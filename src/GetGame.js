import React from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function GetGame({game}) {

    const refresh = useNavigate()

    function deletegame(idgame){
        axios.post('/api/game/deletegame', {idgame: idgame}).then(res => {
            console.log(res.data)
            //alert(res.data)
            Swal.fire('Deleted')
            refresh(0)
        }).catch(err => {
            console.log(err)
        })
    }

  return (
    <div>
      <div className='container'>
            <div className='row'>

                <div className='col-sm-6 offset-3'>
                    <ul className='list-group'>
                        <li className='list-group-item'>{game.idgame}</li>
                        <li className='list-group-item'>{game.tittle}</li>
                        <li className='list-group-item'>{game.genre}</li>
                        <li className='list-group-item'>{game.classification}</li>
                    </ul>
                    
                    <Link to={`/editgame/${game.idgame}`}><li className='btn btn-success'>Edit</li></Link>
                    &nbsp;
                    <button className='btn btn-danger' onClick={()=>{deletegame(game.idgame)}}>Delete</button>
                    <hr className='mt-4'/>
                </div>
            </div>
      </div>
    </div>
  )
}

export default GetGame