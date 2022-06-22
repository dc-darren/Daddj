import { useEffect, useState } from "react"
import { FiMenu, FiSearch } from "react-icons/fi"
import { Link, useNavigate, useSearchParams } from "react-router-dom"

const Navbar = () => {
  const [navbarOpen, setnavbarOpen] = useState(true)
  const [searchParams, setsearchParams] = useSearchParams()
  const [keyword, setkeyword] = useState(searchParams.get('s'))
  
  let navigate = useNavigate()

  const onSearchSubmit = (e) => {
    e.preventDefault()
    navigate(`/search?s=${keyword}`)
  }

  useEffect(() => {
    setkeyword(searchParams.get('s'))
  }, [])
  
  return (
    <>
      <div className="w-full bg-daddj-700 flex flex-col sm:flex-row justify-between items-end sm:items-center rounded-lg px-5 sm:px-8 py-4 sm:py-5">
        <div className="w-full sm:w-[unset] flex justify-between items-center">
          <Link to="/"><h4 className="text-neutral-50 hover-up">Daddj</h4></Link>
          <FiMenu className="block sm:hidden text-neutral-50 hover:cursor-pointer ml-auto" onClick={() => setnavbarOpen(!navbarOpen)} />
        </div>
        <div className={`${navbarOpen ? 'hidden' : 'flex flex-col'} w-full sm:w-[unset] sm:flex sm:flex-row items-end sm:items-center gap-5 text-sm mt-5 sm:mt-[unset]`}>
          <Link to="/about"><p className="text-neutral-50 hover-up">About</p></Link>
          <Link to="/credits"><p className="text-neutral-50 hover-up">Credits</p></Link>
          <form onSubmit={onSearchSubmit} className="relative text-sm self-stretch">
            <FiSearch className="absolute text-daddj-900 pointer-events-none top-1/2 left-5 -translate-y-1/2" />
            <input type="text" placeholder="Search" value={keyword} onChange={(e) => setkeyword(e.target.value)} className="w-full sm:w-[unset] h-10 bg-neutral-50 text-daddj-700 placeholder-daddj-700 focus:outline-none rounded-md pl-10 pr-5" />
          </form>
        </div>
      </div>
    </>
  )
}

export default Navbar