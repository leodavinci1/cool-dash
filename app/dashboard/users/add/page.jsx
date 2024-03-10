
//import { addProduct } from "@/app/lib/actions";

const AddUserPage = () => {
    return (
        <div className="bg-bgsoft p-[20px] rounded-[10px] mt-[20px]">
            <form action="" className="flex flex-wrap justify-between">
                <input className="p-[30px] bg-bg border border-[2px] border-solid rounded-[5px] mb-[30px] border-[#2e374a] w-[45%]" type="text" placeholder="username" name="username" required />

                <input className="p-[30px] bg-bg border border-[2px] border-solid rounded-[5px] mb-[30px] border-[#2e374a] w-[45%]" type="email" placeholder="email" name="email" required />
                <input className="p-[30px] bg-bg border border-[2px] border-solid rounded-[5px] mb-[30px] border-[#2e374a] w-[45%]" type="password" placeholder="password" name="password" required />
                <input className="p-[30px] bg-bg border border-[2px] border-solid rounded-[5px] mb-[30px] border-[#2e374a] w-[45%]" type="phone" placeholder="phone" name="phone" />

                <select name="isAdmin" id="isAdmin" className="p-[30px] bg-bg border border-[2px] border-solid rounded-[5px] mb-[30px] border-[#2e374a] w-[45%]">
                    <option value="false" selected>Is Admin?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <select name="isActive" id="isActive" className="p-[30px] bg-bg border border-[2px] border-solid rounded-[5px] mb-[30px] border-[#2e374a] w-[45%]">
                    <option value="false" selected>Is Active?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <textarea
                    className="p-[30px] bg-bg border border-[2px] border-solid rounded-[5px] mb-[30px] border-[#2e374a] w-[100%]"
                    required
                    name="address"
                    id="address"
                    rows="16"
                    placeholder="Address"
                ></textarea>
                <button type="submit" className="w-[100%] p-[30px] bg-teal-500 text-t border-none rounded-[5px] cursor-pointer">Submit</button>
            </form>
        </div>
    );
};


export default AddUserPage