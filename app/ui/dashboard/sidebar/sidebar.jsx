import { MdDashboard, MdSupervisedUserCircle, MdShoppingBag, MdAttachMoney, MdWork, MdAnalytics, MdPeople, MdOutlineSettings, MdHelpCenter, MdLogout } from "react-icons/md";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />
      }
    ]
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />
      },
    ]
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ]
  }
]

const Sidebar = ()  => {
  
    return (
      <div className="sticky top-10">
        <div className="flex items-center gap-4 mb-2">
          <Image className="rounded-full object-cover" src="/noavatar.png" alt="User" width="50" height="50"/>
          <div className="flex flex-col	">
            <div className="font-bold">John Doe</div>
            <div className="text-xs text-tsoft">Administrator</div>
          </div>
        </div>
        <ul className="list-none">
          {menuItems.map((cat) => (
            <li className="text-tsoft my-2.5 text-sm font-bold" key={cat.title}>
              <span className="">{cat.title}</span>
              {cat.list.map((item) => (
                  <MenuLink item={item} key={item.title}/>
              ))}
            </li>
          ))}
        </ul>
        <button className="p-[20px] my-[5px] mx-0 flex items-center gap-[10px] cursor-pointer rounded-[10px] bg-transparent border-none w-[100%] hover:bg-[#2e374a]">
          <MdLogout />
          Logout
        </button>
        </div>
    )
  }
  
  export default Sidebar