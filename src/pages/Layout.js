import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const Layout = ({ withoutNavbar }) => {
  return (
    <>
      <div className="w-screen bg-daddj-100">
        <div className="max-w-screen-2xl h-screen w-full flex flex-col gap-4 sm:gap-6 lg:gap-10 p-4 sm:p-6 lg:p-10 mx-auto">
          {withoutNavbar ? '' : <Navbar />}
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout