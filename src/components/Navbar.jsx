import { AiOutlinePlus } from 'react-icons/ai'
import { CgMenu } from 'react-icons/cg'
import { TbGridDots } from 'react-icons/tb'
import Sidebar from './Sidebar'
import { useState } from 'react'

export default function Navbar() {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <>
    <div onClick={handleNav} className='h-min w-screen flex justify-between items-center px-5 py-4 border-b border-b-1 shadow-xs shadow-gray-400'>
        <div className='flex items-center'>
            <button onClick={handleNav} className='mr-2'>
              <CgMenu className='h-5 w-5'/>
            </button>
            <div className='flex text-[22px] ml-1'>
              <div className='mr-1 font-poppins'>
                <span className='text-blue-600'>G</span><span className='text-red-600'>o</span><span className='text-yellow-600'>o</span><span className='text-blue-600'>g</span><span className='text-green-600'>l</span><span className='text-red-600'>e</span>
              </div>
              <div className='text-gray-500'>Classroom </div>
            </div>
        </div>
        <div className='flex items-center'>
            <div className='px-7'><AiOutlinePlus className='h-6 w-6'/></div>
            <div className='hidden sm:block pr-5'><TbGridDots className='h-6 w-6'/></div>
            <img className="hidden sm:block  rounded-full" src="https://lh3.googleusercontent.com/ogw/AOh-ky3Df2cesuggpzEtRSHtqHzwgJ0ZaT3AdmZ4YUZ6=s32-c-mo" alt="User Logo"/>
        </div>
    </div>
    <div className={
          nav 
            ? "z-10" 
            : "hidden"
        }>
            <Sidebar />
    </div>
    </>
  )
}
