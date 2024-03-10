"use client"

import { usePathname } from "next/navigation"
import { MdNotifications, MdOutlineChat, MdOutlineTab, MdPublic, MdSearch } from "react-icons/md"

const Navbar = ()  => {
    const pathname = usePathname();

    return (
      <div className="flex justify-between items-center p-[20px] rounded-xl bg-bgsoft">
          <div className="capitalize font-bold text-tsoft"> {pathname.split("/").pop()}</div>
          <div className="flex items-center gap-[20px]">
            <div className="flex items-center gap-[10px] bg-[#2e374a] rounded-[10px] p-[10px]">
              <MdSearch />
              <input type="text" placeholder="Search..." className="bg-transparent rounded-none text-t"/>
            </div>
            <div className="flex gap-[20px]">
      	      
              <MdOutlineChat size={20} />
              <MdNotifications size={20} />
              <MdPublic size={20} />
            </div>
          </div>
      </div>
    )
  }
  
  export default Navbar