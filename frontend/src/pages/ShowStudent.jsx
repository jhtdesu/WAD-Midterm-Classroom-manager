import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'

const ShowStudent = () => {
    const [student, setStudent] = useState({})
    const [loading, setLoading] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        setLoading(true)
        axios
            .get(`http://localhost:3000/students/${id}`)
            .then((response) => {
                setStudent(response.data)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })
    }, [id]);

  return (
    <div className='p-4'>
        <BackButton/>
        <h1 className='text-3xl my-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500'>Show Student</h1>
        {
            loading ? (
                <Spinner/>
            ) : (
                <div className='flex justify-center'>
                    <div className='flex flex-col border-2 border-gray-500 rounded-xl w-fit p-4 bg-lime-50'>
                        <div className='my-4'>
                            <span className='text-xl mr-4 text-gray-500'>ID:</span>
                            <span className='text-xl'>{student._id}</span>
                        </div>
                        <div className='my-4'>
                            <span className='text-xl mr-4 text-gray-500'>NAME:</span>
                            <span className='text-xl'>{student.name}</span>
                        </div>
                        <div className='my-4'>
                            <span className='text-xl mr-4 text-gray-500'>SEX:</span>
                            <span className='text-xl'>{student.sex}</span>
                        </div>
                        <div className='my-4'>
                            <span className='text-xl mr-4 text-gray-500'>STUDENTID:</span>
                            <span className='text-xl'>{student.studentID}</span>
                        </div>
                        <div className='my-4'>
                            <span className='text-xl mr-4 text-gray-500'>BIRTHDATE:</span>
                            <span className='text-xl'>{student.birthdate}</span>
                        </div>
                    </div>
                </div>
            )}
    </div>
  )
}

export default ShowStudent