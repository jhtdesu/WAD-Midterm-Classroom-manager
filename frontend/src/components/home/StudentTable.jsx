
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const StudentTable = ({ students }) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
    <thead>
        <tr>
            <th className='border border-slate-600 rounded-md bg-lime-100'>No</th>
            <th className='border border-slate-600 rounded-md bg-lime-100'>Name</th>
            <th className='border border-slate-600 rounded-md bg-lime-100'>Sex</th>
            <th className='border border-slate-600 rounded-md bg-lime-100'>Student ID</th>
            <th className='border border-slate-600 rounded-md bg-lime-100'>Birthdate</th>
            <th className='border border-slate-600 rounded-md bg-lime-100'>Buttons</th>
        </tr>
    </thead>
    <tbody>
        {students.map((student, index) => (
            <tr key={student._id} className='h-8'>
                <td className='border border-slate-600 rounded-md text-center'>{index + 1}</td>
                <td className='border border-slate-600 rounded-md text-center'>{student.name}</td>
                <td className='border border-slate-600 rounded-md text-center'>{student.sex}</td>
                <td className='border border-slate-600 rounded-md text-center'>{student.studentID}</td>
                <td className='border border-slate-600 rounded-md text-center'>{student.birthdate}</td>
                <td className='border border-slate-600 rounded-md'>
                    <div className='flex justify-center gap-x-4'>
                        <Link to={`/students/details/${student._id}`}>
                            <BsInfoCircle className='text-green-800 text-2xl' />
                        </Link>
                        <Link to={`/students/edit/${student._id}`}>
                            <AiOutlineEdit className='text-yellow-800 text-2xl' />
                        </Link>
                        <Link to={`/students/delete/${student._id}`}>
                            <MdOutlineDelete className='text-red-800 text-2xl' />
                        </Link>
                    </div>
                </td>
            </tr>
        ))}
    </tbody>
</table>
  )
}

export default StudentTable