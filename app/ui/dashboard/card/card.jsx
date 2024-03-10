import { MdSupervisedUserCircle } from "react-icons/md";

const Card = () => {
  return (
    <div className="bg-bgsoft p-[20px] rounded-[10px] flex gap-[20px] cursor-pointer w-[100%] hover:bg-[#2e374a]">
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col gap-[20px]">
        <span className="">Total Users</span>
        <span className="text-[24px] font-bold">10.555</span>
        <span className="text-[14px] font-normal"><span className="text-lime-400">12%</span> more than previous week</span>
      </div>
    </div>
  )
}

export default Card;