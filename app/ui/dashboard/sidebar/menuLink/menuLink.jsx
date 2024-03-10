"use client"

import Link from "next/link"
import { usePathname } from "next/navigation";

const MenuLink = ({item})  => {
    const pathname = usePathname();

    return (
      <Link href={item.path} className={`my-2 p-5 flex items-center font-normal gap-3 hover:bg-[#2e374a] rounded-md transition-all ease-in-out ${pathname === item.path ? "bg-[#2e374a]" : "" }`}>
        {item.icon}
        {item.title}
      </Link>
    )
  }
  
  export default MenuLink;