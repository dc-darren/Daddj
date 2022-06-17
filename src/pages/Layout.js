import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <>
      <div className="w-screen bg-daddj-100">
        <div className="max-w-screen-2xl h-screen w-full flex flex-col gap-10 p-10 mx-auto">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Home