import { Helmet } from "react-helmet"
import { FiChevronLeft, FiChevronRight, FiPlay } from "react-icons/fi"
import SecondaryButton from "../components/Button/Secondary"

const Search = () => {
  return (
    <>
      <Helmet>
        <title>Daddj | Search Results</title>
      </Helmet>
      <div className="content">
        <div className="flex flex-col sm:flex-row justify-between gap-5"> {/* Header */}
          <h2>Found 99 Results for "keyword"</h2>
          <div id="daddj-pagination">
            <div><p><FiChevronLeft /></p></div>
            <div><p>1</p></div>
            <div><p>2</p></div>
            <div><p>3</p></div>
            <div className="dots pointer-events-none">...</div>
            <div><p>5</p></div>
            <div><p><FiChevronRight /></p></div>
          </div>
        </div>
        <div className="flex flex-col gap-5 py-5"> {/* Search Results */}
          <div className="flex justify-between items-center gap-5">
            <h6 className="text-daddj-700">"This keyword is a joke"</h6>
            <SecondaryButton href="/" className="w-[180px] lg:w-[200px]">
              <FiPlay />
              <p>Show on Screen</p>
            </SecondaryButton>
          </div>
          <hr />
          <div className="flex justify-between items-center gap-5">
            <h6 className="text-daddj-700">"This keyword is a joke"</h6>
            <SecondaryButton href="/" className="w-[180px] lg:w-[200px]">
              <FiPlay />
              <p>Show on Screen</p>
            </SecondaryButton>
          </div>
          <hr />
          <div className="flex justify-between items-center gap-5">
            <h6 className="text-daddj-700">"This keyword is a joke"</h6>
            <SecondaryButton href="/" className="w-[180px] lg:w-[200px]">
              <FiPlay />
              <p>Show on Screen</p>
            </SecondaryButton>
          </div>
          <hr />
          <div className="flex justify-between items-center gap-5">
            <h6 className="text-daddj-700">"This keyword is a joke"</h6>
            <SecondaryButton href="/" className="w-[180px] lg:w-[200px]">
              <FiPlay />
              <p>Show on Screen</p>
            </SecondaryButton>
          </div>
          <hr />
          <div className="flex justify-between items-center gap-5">
            <h6 className="text-daddj-700">"This keyword is a joke"</h6>
            <SecondaryButton href="/" className="w-[180px] lg:w-[200px]">
              <FiPlay />
              <p>Show on Screen</p>
            </SecondaryButton>
          </div>
          <hr />
          <div className="flex justify-between items-center gap-5">
            <h6 className="text-daddj-700">"This keyword is a joke"</h6>
            <SecondaryButton href="/" className="w-[180px] lg:w-[200px]">
              <FiPlay />
              <p>Show on Screen</p>
            </SecondaryButton>
          </div>
        </div>
      </div>
    </>
  )
}

export default Search