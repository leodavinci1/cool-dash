import Image from "next/image"
import Link from "next/link"
import Pagination from "@/ui/dashboard/pagination/pagination"
import Search from "@/ui/users/search/search"


const ProductsPage = () => {
  return (
    <div className="bg-bgsoft p-[20px] rounded-[10px] mt-[20px]">
      <div className="flex items-center justify-between">
        <Search placeholder="Search for a product..." />
        <Link href={"/dashboard/products/add"}>
          <button className="p-[10px] bg-[#5d57c9] text-t border-none rounded-[5px] cursor-pointer"> Add New </button>
        </Link>
      </div>
      <table className="w-[100%]">
        <thead>
          <tr>
            <td className="p-[10px]">Image</td>
            <td className="p-[10px]">Title</td>
            <td className="p-[10px]">Price</td>
            <td className="p-[10px]">Description</td>
            <td className="p-[10px]">Created at</td>
            <td className="p-[10px]">Stock</td>
            <td className="p-[10px]">Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-[10px]">
              <div className="flex items-center gap-[10px]">
                <Image src="/noproduct.jpg" width={40} height={40} className="rounded-full object-cover" />
              </div>
            </td>
            <td className="p-[10px]">iphone</td>
            <td className="p-[10px]">$999</td>
            <td className="p-[10px]">aisuhfiuahduihasiuhuiasshdfiahiuahdiasdasd</td>
            <td className="p-[10px]">Jan 19 2024</td>
            <td className="p-[10px]">34</td>
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

export default ProductsPage