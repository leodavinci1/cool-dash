import Image from "next/image"

const Transactions = () => {
  return (
    <div className="bg-bgsoft p-[20px] rounded-[10px]">
      <h2 className="mb-[20px] text-tsoft font-light">Latest Transactions</h2>
      <table className="w-[100%]">
        <thead>
          <tr>
            <td className="p-[10px]">Name</td>
            <td className="p-[10px]">Status</td>
            <td className="p-[10px]">Date</td>
            <td className="p-[10px]">Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-[10px]">
              <div className="flex items-center gap-[10px]">
                <Image src={'/noavatar.png'} width={40} height={40} className="object-cover rounded-full" />
                John Doe
              </div>

            </td>
            <td className="p-[10px]">
              <span className="rounded-[5px] p-[5px] text-[14px] text-white bg-[#f7cb7375]">Pending</span>
            </td>
            <td className="p-[10px]">
              14.02.20
            </td>
            <td className="p-[10px]">
              $300
            </td>
          </tr>
          <tr>
            <td className="p-[10px]">
              <div className="flex items-center gap-[10px]">
                <Image src={'/noavatar.png'} width={40} height={40} className="object-cover rounded-full" />
                John Doe

              </div>

            </td>
            <td className="p-[10px]">
              <span className="rounded-[5px] p-[5px] text-[14px] text-white bg-[#afd6ee75]">Done</span>
            </td>
            <td className="p-[10px]">
              14.02.20
            </td>
            <td className="p-[10px]">
              $300
            </td>
          </tr>
          <tr>
            <td className="p-[10px]">
              <div className="flex items-center gap-[10px]">
                <Image src={'/noavatar.png'} width={40} height={40} className="object-cover rounded-full" />
                John Doe
              </div>

            </td>
            <td className="p-[10px]">
              <span className="rounded-[5px] p-[5px] text-[14px] text-white bg-[#f7737375]">Cancelled</span>
            </td>
            <td className="p-[10px]">
              14.02.20
            </td>
            <td className="p-[10px]">
              $300
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}

export default Transactions