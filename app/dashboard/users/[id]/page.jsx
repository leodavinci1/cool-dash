// import { updateUser } from "@/app/lib/actions";
// import { fetchUser } from "@/app/lib/data";
import Image from "next/image";

const SingleUserPage = async ({ params }) => {

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
                    <input className="p-[20px] border border-[2px] border-[#2e374a] border-solid rounded-[5px] bg-bg text-t my-[10px]" type="hidden" name="id" value={user.id} />
                    <label className="text-[12px]">Username</label>
                    <input className="p-[20px] border border-[2px] border-[#2e374a] border-solid rounded-[5px] bg-bg text-t my-[10px]" type="text" name="username" placeholder={user.username} />
                    <label className="text-[12px]">Email</label>
                    <input className="p-[20px] border border-[2px] border-[#2e374a] border-solid rounded-[5px] bg-bg text-t my-[10px]" type="email" name="email" placeholder={user.email} />
                    <label className="text-[12px]">Password</label>
                    <input className="p-[20px] border border-[2px] border-[#2e374a] border-solid rounded-[5px] bg-bg text-t my-[10px]" type="password" name="password" />
                    <label className="text-[12px]">Phone</label>
                    <input className="p-[20px] border border-[2px] border-[#2e374a] border-solid rounded-[5px] bg-bg text-t my-[10px]" type="text" name="phone" placeholder={user.phone} />
                    <label className="text-[12px]">Address</label>
                    <textarea className="p-[20px] border border-[2px] border-[#2e374a] border-solid rounded-[5px] bg-bg text-t my-[10px]" type="text" name="address" placeholder={user.address} />
                    <label className="text-[12px]">Is Admin?</label>
                    <select className="p-[20px] border border-[2px] border-[#2e374a] border-solid rounded-[5px] bg-bg text-t my-[10px]" name="isAdmin" id="isAdmin">
                        <option value={true} selected={user.isAdmin}>Yes</option>
                        <option value={false} selected={!user.isAdmin}>No</option>
                    </select>
                    <label className="text-[12px]">Is Active?</label>
                    <select className="p-[20px] border border-[2px] border-[#2e374a] border-solid rounded-[5px] bg-bg text-t my-[10px]" name="isActive" id="isActive">
                        <option value={true} selected={user.isActive}>Yes</option>
                        <option value={false} selected={!user.isActive}>No</option>
                    </select>
                    <button className="w-[100%] p-[20px] bg-teal-500 text-t border-none rounded-[5px] cursor-pointer mt-[20px]">Update</button>
                </form>
            </div>
        </div>
    );
};

export default SingleUserPage;