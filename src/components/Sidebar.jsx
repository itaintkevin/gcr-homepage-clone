import { FiHome, FiSettings } from "react-icons/fi"
import { MdCalendarToday } from "react-icons/md"
import { RiInboxArchiveLine } from "react-icons/ri"
import { BiTask } from "react-icons/bi"
import details from '../data/CardDetails'

export default function Sidebar() {
  return (
    <div className="z-10 fixed top-0 left-0 h-screen w-[300px] bg-white text-sm font-base">
        <div className="hover:bg-[#E3EEFC] border-r rounded-r-full mt-2 flex items-center py-4">
          <div className="mx-7"><FiHome className="h-5 w-5"/></div>
          <div className="">Classes</div>
        </div>
        <div className="hover:bg-[#E3EEFC] border-r rounded-r-full mt-2 flex items-center py-4">
          <div className="mx-7"><MdCalendarToday className="h-5 w-5"/></div>
          <div>Calendar</div>
        </div>
        <div className="border-y mt-2">
          <div className="hover:bg-[#E3EEFC] border-r rounded-r-full py-4 px-4">Enrolled</div>
          <div className="hover:bg-[#E3EEFC] border-r rounded-r-full flex items-center py-4 px-6">
            <div className="mr-5"><BiTask className="h-5 w-5"/></div>
            <div>To-do</div>
          </div>
          <div className="my-5">
          { details.map((detail) => {
            return(
                <div className="hover:bg-[#E3EEFC] border-r rounded-r-full flex items-center w-full my-5">
                  <div className="flex relative w-3/12">
                    <img className="z-0 h-8 w-8 rounded-full ml-5 mr-3" src={detail.url} alt={detail.subjectName}/>
                    <div className="z-10 absolute top-[3px] left-[30px] text-white text-lg">{detail.logo}</div>
                  </div>
                  <div className="w-9/12">
                    <div className="text-lg">{detail.subjectName}</div>
                    <div className="text-sm text-zinc-500">{detail.section}</div>
                  </div>
                </div>
            );
        })}
          </div>
        </div>
        <div className="hover:bg-[#E3EEFC] border-r rounded-r-full mt-2 flex items-center py-4">
          <div className="mx-7"><RiInboxArchiveLine className="h-5 w-5"/></div>
          <div>Archived Classes</div>
        </div>
        <div className="hover:bg-[#E3EEFC] border-r rounded-r-full mt-2 flex items-center py-4">
          <div className="mx-7"><FiSettings className="h-5 w-5"/></div>
          <div>Settings</div>
        </div>
    </div>
  )
}
