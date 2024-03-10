
//import { addProduct } from "@/app/lib/actions";

const AddProductPage = () => {
    return (
        <div className="bg-bgsoft p-[20px] rounded-[10px] mt-[20px]">
            <form action="" className="flex flex-wrap justify-between">
                <input className="p-[30px] bg-bg border border-[2px] border-solid rounded-[5px] mb-[30px] border-[#2e374a] w-[45%]" type="text" placeholder="title" name="title" required />
                <select name="cat" id="cat" className="p-[30px] bg-bg border border-[2px] border-solid rounded-[5px] mb-[30px] border-[#2e374a] w-[45%]">
                    <option value="general">Choose a Category</option>
                    <option value="kitchen">Kitchen</option>
                    <option value="phone">Phone</option>
                    <option value="computer">Computer</option>
                </select>
                <input className="p-[30px] bg-bg border border-[2px] border-solid rounded-[5px] mb-[30px] border-[#2e374a] w-[45%]" type="number" placeholder="price" name="price" required />
                <input className="p-[30px] bg-bg border border-[2px] border-solid rounded-[5px] mb-[30px] border-[#2e374a] w-[45%]" type="number" placeholder="stock" name="stock" required />
                <input className="p-[30px] bg-bg border border-[2px] border-solid rounded-[5px] mb-[30px] border-[#2e374a] w-[45%]" type="text" placeholder="color" name="color" />
                <input className="p-[30px] bg-bg border border-[2px] border-solid rounded-[5px] mb-[30px] border-[#2e374a] w-[45%]" type="text" placeholder="size" name="size" />
                <textarea
                    className="p-[30px] bg-bg border border-[2px] border-solid rounded-[5px] mb-[30px] border-[#2e374a] w-[100%]"
                    required
                    name="desc"
                    id="desc"
                    rows="16"
                    placeholder="Description"
                ></textarea>
                <button type="submit" className="w-[100%] p-[30px] bg-teal-500 text-t border-none rounded-[5px] cursor-pointer">Submit</button>
            </form>
        </div>
    );
};


export default AddProductPage