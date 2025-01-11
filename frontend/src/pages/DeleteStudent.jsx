import React, { useState } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const DeleteStudent = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { id } = useParams()
    const handleDeleteStudent = () => {
        setLoading(true)
        axios
            .delete(`http://localhost:3000/students/${id}`)
            .then(() => {
                setLoading(false)
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })    
    }
  return (
    <div className='p-4'>
        <BackButton/>
        <h1 className='text-3xl my-4'></h1>
        {loading ? <Spinner/> : ''}
        <div className='flex flex-col items-center border-2 border-gray-500 rounded-xl w-[600px] p-8 mx-auto'>
            <h3 className='text-2xl'>Proceed to delete student?</h3>
            <button className='p-4 bg-red-600 hover:bg-red-800 text-white m-8 rounded-xl' onClick={handleDeleteStudent}>
                Delete
            </button>
        </div>
    </div>
  )
}

export default DeleteStudent