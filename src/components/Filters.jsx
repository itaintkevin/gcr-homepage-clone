import { BsCalendar } from 'react-icons/bs'
import { BiTask } from 'react-icons/bi'

export default function Filters() {
  return (
    <div className="flex w-screen text-sm text-[#4374E0] px-7 py-7">
        <div className='flex items-center mr-3'>
            <div className='mr-1'><BiTask className='h-6 w-6 sm:h-5 sm:w-5 text-gray-600 sm:text-[#4374E0]'/></div>
            <div className='hidden sm:block'>To-do</div>
        </div>
        <div className='flex items-center ml-3'>
            <div className='mr-1'><BsCalendar className='h-5 w-5 sm:h-4 sm:w-4 text-gray-600 sm:text-[#4374E0]'/></div>
            <div className='hidden sm:block'>Calendar</div>
        </div>
    </div>
  )
}
