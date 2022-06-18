import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <div className="w-full bg-daddj-700 flex justify-between items-center rounded-lg px-8 py-5">
      <Link to="/"><h4 className="text-neutral-50 hover-up">Daddj</h4></Link>
      <div className="flex items-center gap-5 text-sm">
        <Link to="/about"><p className="text-neutral-50 hover-up">About</p></Link>
        <Link to="/credits"><p className="text-neutral-50 hover-up">Credits</p></Link>
        <form className="relative text-sm self-stretch">
          <FiSearch className="absolute text-daddj-900 pointer-events-none top-1/2 left-5 -translate-y-1/2" />
          <input type="text" placeholder="Search" className="h-10 text-daddj-700 placeholder-daddj-700 pl-10 pr-5  rounded-md" />
        </form>
      </div>
    </div>
    </>
  )
}

export default Navbar