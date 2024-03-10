// import { updateUser } from "@/app/lib/actions";
// import { fetchUser } from "@/app/lib/data";
import Image from "next/image";

const SingleProductPage = async ({ params }) => {

    // const { id } = params;
    // const user = await fetchUser(id);
    const user = {
        id: '',
        username: '',
        email: '',
        phone: '',
        address: '',
        isAdmin: false,
        isActive: false,
        img: null,
    }

    return (
        <div className="flex gap-[50px] mt-[20px]">
            <div className="flex-[1] bg-bgsoft p-[20px] rounded-[10px] font-bold text-tsoft h-max">
                <div className="w-[100%] h-[300px] relative rounded-[10px] overflow-hidden mb-[20px]">
                    <Image src={user.img || "/noavatar.png"} alt="" fill />
                </div>
                {user.username}
            </div>
            <div className="flex-[3] bg-bgsoft p-[20px] rounded-[10px]">
                <form action="/" className="flex flex-col">
                    <label className="text-[12px]">Title</label>
                    <input className="p-[20px] border border-[2px] border-[#2e374a] border-solid rounded-[5px] bg-bg text-t my-[10px]" type="text" name="title" placeholder={user.username} />
                    <label className="text-[12px]">Price</label>
                    <input className="p-[20px] border border-[2px] border-[#2e374a] border-solid rounded-[5px] bg-bg text-t my-[10px]" type="number" name="price" placeholder={user.email} />
                    <label className="text-[12px]">Stock</label>
                    <input className="p-[20px] border border-[2px] border-[#2e374a] border-solid rounded-[5px] bg-bg text-t my-[10px]" type="number" name="stock" />
                    <label className="text-[12px]">Color</label>
                    <input className="p-[20px] border border-[2px] border-[#2e374a] border-solid rounded-[5px] bg-bg text-t my-[10px]" type="text" name="color" placeholder={user.phone} />
                    <label className="text-[12px]">Size</label>
                    <input className="p-[20px] border border-[2px] border-[#2e374a] border-solid rounded-[5px] bg-bg text-t my-[10px]" type="text" name="size" placeholder={user.address} />
                    <label className="text-[12px]">Category</label>
                    <select className="p-[20px] border border-[2px] border-[#2e374a] border-solid rounded-[5px] bg-bg text-t my-[10px]" name="cat" id="cat">
                        <option value="kitchen" selected={user.isAdmin}>Kitchen</option>
                        <option value="computers" selected={!user.isAdmin}>Computers</option>
                    </select>
                    <label className="text-[12px]">Description</label>
                    <textarea className="p-[20px] border border-[2px] border-[#2e374a] border-solid rounded-[5px] bg-bg text-t my-[10px]" name="desc" id="desc" />


                    <button className="w-[100%] p-[20px] bg-teal-500 text-t border-none rounded-[5px] cursor-pointer mt-[20px]">Update</button>
                </form>
            </div>
        </div>
    );
};

export default SingleProductPage;