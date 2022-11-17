import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

function EditGame() {
  
    const params = useParams()

    const[tittle, setTittle]=useState('')
    const[genre, setGenre]=useState('')
    const[classification, setClassification]=useState('')

    const refresh = useNavigate()

    useEffect(() => {
        axios.post('/api/game/getdatagame', {idgame: params.idgame}).then(res => {
            console.log(res.data[0])
            const dataGame = res.data[0]
            setTittle(dataGame.tittle)
            setGenre(dataGame.genre)
            setClassification(dataGame.classification)
        })
    }, [])

    function editgame(){
        const updateGame = {
            tittle: tittle,
            genre: genre,
            classification: classification,
            idgame: params.idgame
        }

        axios.post('/api/game/updategame', updateGame)
        .then(res => {
            console.log(res.data)
            //alert(res.data)
            Swal.fire('Clear!', 'The game has been updated!')
            refresh('/')
        })
        .then(err => {console.log(err)})
    }

    return (
        <div className='container'>
            <div className='row'>
                <h2 className='mt-4'>Edit Game</h2>
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

                    <button onClick={editgame} className='btn btn-success'>Edit Game</button>
                </div>
            </div>
        </div>
  )
}

export default EditGame