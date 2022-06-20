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
        <div className="flex justify-between"> {/* Header */}
          <h2>Found 99 Results for "keyword"</h2>
          <div id="daddj-pagination">
            <div><FiChevronLeft /></div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div className="dots pointer-events-none">...</div>
            <div>5</div>
            <div><FiChevronRight /></div>
          </div>
        </div>
        <div className="flex flex-col gap-5 py-5"> {/* Search Results */}
          <div className="flex justify-between items-center gap-5">
            <h6 className="text-daddj-700">"This keyword is a joke"</h6>
            <SecondaryButton href="/">
              <FiPlay />
              <p>Show on Screen</p>
            </SecondaryButton>
          </div>
          <hr />
          <div className="flex justify-between items-center gap-5">
            <h6 className="text-daddj-700">"This keyword is a joke"</h6>
            <SecondaryButton href="/">
              <FiPlay />
              <p>Show on Screen</p>
            </SecondaryButton>
          </div>
          <hr />
          <div className="flex justify-between items-center gap-5">
            <h6 className="text-daddj-700">"This keyword is a joke"</h6>
            <SecondaryButton href="/">
              <FiPlay />
              <p>Show on Screen</p>
            </SecondaryButton>
          </div>
          <hr />
          <div className="flex justify-between items-center gap-5">
            <h6 className="text-daddj-700">"This keyword is a joke"</h6>
            <SecondaryButton href="/">
              <FiPlay />
              <p>Show on Screen</p>
            </SecondaryButton>
          </div>
          <hr />
          <div className="flex justify-between items-center gap-5">
            <h6 className="text-daddj-700">"This keyword is a joke"</h6>
            <SecondaryButton href="/">
              <FiPlay />
              <p>Show on Screen</p>
            </SecondaryButton>
          </div>
          <hr />
          <div className="flex justify-between items-center gap-5">
            <h6 className="text-daddj-700">"This keyword is a joke"</h6>
            <SecondaryButton href="/">
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