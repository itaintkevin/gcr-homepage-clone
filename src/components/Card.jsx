import details from '../data/CardDetails'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { RiFolderUserLine } from 'react-icons/ri'
import { IoMdFolderOpen } from'react-icons/io'
import Sidebar from './Sidebar'
// import { useState } from 'react'

export default function Card() {

    // const [nav, setNav] = useState(false);

    // const handleNav = () => {
    //   setNav(!nav)
    // }

  return (
    <>
    <div className='flex flex-wrap pl-7 pr-5'>
        { details.map((detail) => {
            return(
                <div className='relative h-[294px] w-[300px] border border-1 border-gray-300 text-white mr-6 mb-4 rounded-lg hover:shadow-md'>
                    <div className='relative flex flex-col justify-center h-[100px] rounded-t-lg'>
                        <img className="z-0 absolute rounded-t-lg top-0 left-0" src={detail.url} alt="Background"/>
                        <div className='flex justify-between text-2xl pl-5'>
                            <div className='z-10 hover:underline'>{detail.subjectName}</div>
                            <div className='z-10 pr-6'><BsThreeDotsVertical/></div>
                        </div>
                        <div className='text-sm z-10 pl-5  hover:underline'>{detail.section}</div>
                        <div className='text-xs z-10 pl-5 pb-2  hover:underline'>{detail.faculty}</div>
                    </div>
                    <div className='h-[137px]'>
                        <div className='text-xs text-zinc-500 font-semibold pl-5 pt-3'>{detail.dueDate}</div>
                        <div>
                        {
                        detail.assignments.map(assignment => {
                          return(                  
                            <div className='text-black text-xs pt-1 pl-5'>{assignment}</div>
                          );
                        })
                        }
                        </div>
                    </div>
                    <div className='h-[57px] flex items-center justify-end text-black border-t mr-1'>
                        <div className='hover:bg-gray-100 rounded-full'><RiFolderUserLine className='h-6 w-6 mx-3 my-3'/></div>
                        <div className='hover:bg-gray-100 rounded-full'><IoMdFolderOpen className='h-6 w-6 mx-3 my-3'/></div>
                    </div>
                    <div className='absolute top-14 right-4'>
                        <img className="rounded-full" src="https://lh3.googleusercontent.com/a/default-user=s75-c" alt="user"/>
                    </div>
                </div>
            );
        })}
    </div>
    {/* <div className={
          nav 
            ? "z-10" 
            : "hidden"
        }>
            <Sidebar />
    </div> */}
  </>
  );
}
