import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import { MdFileDownload } from "react-icons/md";
import Spinner from '../components/Spinner';
import StudentTable from '../components/home/StudentTable';
import StudentCard from '../components/home/StudentCard';

const Home = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState('card');

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:3000/students')
            .then((res) => {
                setStudents(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    const downloadCSV = () => {
        const headers = ['No', 'Name', 'Sex', 'Student ID', 'Birthdate'];
        const rows = students.map((student, index) => [
            index + 1,
            student.name,
            student.sex,
            student.studentID,
            student.birthdate,
        ]);

        let csvContent = 'data:text/csv;charset=utf-8,';
        csvContent += headers.join(',') + '\n';
        rows.forEach((rowArray) => {
            let row = rowArray.join(',');
            csvContent += row + '\n';
        });

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', 'students.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className='p-4'>
            <div className='flex justify-center items-center gap-x-4'>
                <button className='bg-red-300 hover:bg-red-400 px-4 py-1 rounded-lg' onClick={() => setShowType('table')}>
                    Table
                </button>
                <button className='bg-red-300 hover:bg-red-400 px-4 py-1 rounded-lg' onClick={() => setShowType('card')}>
                    Card
                </button>
            </div>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl my-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500'>Students list</h1>
                <div className='flex items-center'>
                    <Link to='/students/create'>
                        <MdOutlineAddBox className='text-red-400 hover:text-red-500 text-4xl' />
                    </Link>
                    <button onClick={downloadCSV}>
                        <MdFileDownload className='text-red-400 hover:text-red-500 text-4xl' />
                    </button>
                </div>
            </div>
            {loading ? (
                <Spinner />
            ) : showType === 'table' ? ( 
                <StudentTable students={students}/> 
            ) : ( 
                <StudentCard students={students}/>
            )}
        </div>
    );
};

export default Home;
