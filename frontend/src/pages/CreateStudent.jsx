import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { useNavigate, useParams } from 'react-router-dom';

const CreateStudent = () => {
    const [name, setName] = useState('')
    const [sex, setSex] = useState('')
    const [studentID, setStudentID] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    
    const handleCreateStudent = () => {
        const birthdateObj = new Date(birthdate);
        const minDate = new Date('1924-01-01');
        if (!birthdate || birthdateObj > new Date() || birthdateObj < minDate) {
            alert('Please enter a valid birthdate.');
            return;
        }

        const data = {
            name,
            sex,
            studentID,
            birthdate
        };
        setLoading(true)
        axios
            .post('http://localhost:3000/students/', data)
            .then(() => {
                setLoading(false)
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            });    
    };

    const getCurrentDate = () => {
        const today = new Date();
        return today.toISOString().split('T')[0];
    };

    return (
        <div className='p-4'>
            <BackButton/>
            <h1 className='text-3xl my-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500'>Add Student</h1>
            {loading ? <Spinner/> : ''}
            <div className='flex flex-col border-2 border-gray-500 rounded-xl w-[600px] p-4 mx-auto bg-lime-50'>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Name</label>
                    <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='border-2 border-gray-500 px-4 py-2 w-full rounded-xl'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Sex</label>
                    <select 
                    value={sex}
                    onChange={(e) => setSex(e.target.value)}
                    className='border-2 border-gray-500 px-4 py-2 w-full rounded-xl'
                    >
                        <option value="">Select Sex</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>StudentID</label>
                    <input 
                    type="number" 
                    value={studentID}
                    onChange={(e) => setStudentID(e.target.value)}
                    className='border-2 border-gray-500 px-4 py-2 w-full rounded-xl'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Date of birth</label>
                    <input 
                    type="date" 
                    value={birthdate}
                    onChange={(e) => setBirthdate(e.target.value)}
                    className='border-2 border-gray-500 px-4 py-2 w-full rounded-xl'
                    />
                </div>
                <button className='p-2 bg-red-300 hover:bg-red-400 m-8 rounded-xl' onClick={handleCreateStudent} >
                    Add student
                </button>
            </div>
        </div>
    )
}

export default CreateStudent;