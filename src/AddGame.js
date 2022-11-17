import React, { useState } from 'react'
import uniqid from 'uniqid'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

function AddGame() {
    
    const[tittle, setTittle]=useState('')
    const[genre, setGenre]=useState('')
    const[classification, setClassification]=useState('')
    
    const refresh = useNavigate
    
    function addGame(){
        var game = {
            tittle: tittle,
            genre: genre,
            classification: classification,
            idgame: uniqid()
        }
        console.log(game)

        axios.post('/api/game/addgame', game)
        .then(res => {
            //alert(res.data)
            Swal.fire('Clear!', 'The game has been created!')
            refresh('/')
        })
        .then(err => {console.log(err)})
    }
  
    return (
    <div className='container'>
        <div className='row'>
            <h2 className='mt-4'>Add Game</h2>
        </div>
        <div className='row'>
            <div className='col-sm-6 offset-3'>
                <div className='mb-3'>
                    <label htmlFor='tittle' className='form-label'>Tittle</label>
                    <input type='text' className='form-control' value={tittle} onChange={(e) => {setTittle(e.target.value)}}></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='genre' className='form-label'>Genre</label>
                    <input type='text' className='form-control' value={genre} onChange={(e) => {setGenre(e.target.value)}}></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='classification' className='form-label'>Classification</label>
                    <input type='text' className='form-control' value={classification} onChange={(e) => {setClassification(e.target.value)}}></input>
                </div>

                <button onClick={addGame} className='btn btn-success'>Save Game</button>
            </div>
        </div>
    </div>
  )
}

export default AddGame