import Image from "next/image"
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md"

const Rightbar = () => {
  return (
    <div>
      <div className="relative bg-gradient-to-t from-[#182237] to-[#253352] p-[20px] rounded-[10px] mb-[20px]">
        <div className="absolute bottom-0 right-0 w-[50%] h-[50%]">
          <Image src={'/astronaut.png'} alt="" fill className="object-contain opacity-20" />
        </div>
        <div className="flex flex-col gap-[24px]">
          <span className="font-bold">🔥Available now</span>
          <h3>How to use the new version of the admin dashboard?</h3>
          <span className="text-tsoft text-[12px]">Takes 4 minutes to learn</span>
          <p className="text-tsoft text-[14px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, hic reprehenderit. Cumque eum commodi nemo ullam.
          </p>
          <button className="p-[10px] flex items-center gap-[10px] bg-[#5d57c9] text-white border-none rounded-[5px] cursor-pointer w-max">
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>

      </div>
      <div className="relative bg-gradient-to-t from-[#182237] to-[#253352] p-[20px] rounded-[10px] mb-[20px]">

        <div className="flex flex-col gap-[24px]">
          <span className="font-bold">🚀Coming soon!</span>
          <h3>How to use the new version of the admin dashboard?</h3>
          <span className="text-tsoft text-[12px]">Takes 4 minutes to learn</span>
          <p className="text-tsoft text-[14px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, hic reprehenderit. Cumque eum commodi nemo ullam.
          </p>
          <button className="p-[10px] flex items-center gap-[10px] bg-[#5d57c9] text-white border-none rounded-[5px] cursor-pointer w-max">
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>

      </div>

    </div>
  )
}

export default Rightbar