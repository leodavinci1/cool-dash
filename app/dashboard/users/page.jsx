import Search from "@/ui/users/search/search"
import Pagination from "@/ui/dashboard/pagination/pagination"
import Image from "next/image"
import Link from "next/link"

const UsersPage = () => {
  return (
    <div className="bg-bgsoft p-[20px] rounded-[10px] mt-[20px]">
      <div className="flex items-center justify-between">
        <Search placeholder="Search for an user..." />
        <Link href={"/dashboard/users/add"}>
          <button className="p-[10px] bg-[#5d57c9] text-t border-none rounded-[5px] cursor-pointer"> Add New </button>
        </Link>
      </div>
      <table className="w-[100%]">
        <thead>
          <tr>
            <td className="p-[10px]">Name</td>
            <td className="p-[10px]">Email</td>
            <td className="p-[10px]">Created At</td>
            <td className="p-[10px]">Role</td>
            <td className="p-[10px]">Status</td>
            <td className="p-[10px]">Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-[10px]">
              <div className="flex items-center gap-[10px]">
                <Image src="/noavatar.png" width={40} height={40} className="rounded-full object-cover" />
              </div>
            </td>
            <td className="p-[10px]">john@gmail.com</td>
            <td className="p-[10px]">13.01.2022</td>
            <td className="p-[10px]">Admin</td>
            <td className="p-[10px]">active</td>
            <td className="p-[10px]">
              <div className="flex gap-[10px]">
                <Link href="/">
                  <button className="text-[12px] border-none py-[5px] px-[10px] cursor-pointer rounded-[5px] text-t bg-teal-500">View</button>
                </Link>
                <button className="text-[12px] border-none py-[5px] px-[10px] cursor-pointer rounded-[5px] text-t bg-red-800">Delete</button>
              </div>

            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default UsersPage