import { Link } from 'react-router-dom';
import { AiOutlineNumber } from "react-icons/ai";
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDelete } from 'react-icons/md';
import { IoIosInformationCircleOutline } from "react-icons/io";
const StudentCard = ({ students }) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {students.map((item) => (
        <div key={item._id} className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl bg-lime-50 hover:bg-lime-100'>
          <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg shadow-lg'>
            {item.sex}
          </h2>
          <h4 className='my-4 text-gray-500'>
            {item.birthdate}
          </h4>
          <div className='flex justify-start items-center gap-x-2'>
             <BiUserCircle className='text-red-300 text-2xl'/>
             <h2 className='my-1'> {item.name} </h2>
          </div>
          <div className='flex justify-start items-center gap-x-2'>
            <AiOutlineNumber className='text-red-300 text-2xl'/>
            <h2 className='my-1'>{item.studentID}</h2>
          </div>
          <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
            <Link to={`/students/details/${item._id}`}>
              <IoIosInformationCircleOutline className='text-2xl text-green-800 hover:text-black'/>
            </Link>
            <Link to={`/students/edit/${item._id}`}>
              {<AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black'/>}
            </Link>
            <Link to={`/students/delete/${item._id}`}>
              <MdOutlineDelete className='text-2xl -text-red-600 hover:text-black'/>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default StudentCard