import Sidebar from "@/ui/dashboard/sidebar/sidebar";
import Navbar from "@/ui/dashboard/navbar/navbar";
import Footer from "@/ui/dashboard/footer/footer";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <div className="flex-[1] bg-bgsoft p-4">
        <Sidebar />
      </div>
      <div className="flex-[4] p-4">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default Layout