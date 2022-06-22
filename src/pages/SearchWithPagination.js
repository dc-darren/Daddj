import { createElement, useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { useSearchParams } from "react-router-dom"
import { FiChevronLeft, FiChevronRight, FiPlay } from "react-icons/fi"
import Button from "../components/Button"
import fetchData from "../fetchData"

const Search_ = () => {
  const apiUrl = "https://icanhazdadjoke.com/search"
  const [searchParams, setsearchParams] = useSearchParams()
  const [data, setdata] = useState({})
  const [keyword, setkeyword] = useState(searchParams.get('s'))
  const [jokes, setjokes] = useState([])
  const [page, setpage] = useState(1)

  let jokeIndex = 0

  const quoted = (str) => {
    return str.startsWith('"') && str.endsWith('"') ? true : false
  }

  const getJokes = async () => {
    await fetchData(`${apiUrl}?${new URLSearchParams({
      term: keyword,
      limit: 20,
      page: page,
    })}`)
    .then(result => {
      if (result.status === 200) {
        setdata(result)
      }
    })
  }

  useEffect(() => {
    setkeyword(searchParams.get('s'))
    setjokes([])
    setpage(1)
  }, [searchParams])

  useEffect(() => {
    getJokes()
  }, [keyword, page])

  useEffect(() => {
    setjokes(data.results)
  }, [data, jokes])
  
  return (
    <>
      <Helmet>
        <title>Daddj | Search Results</title>
      </Helmet>
      <div className="content">
        <div className="flex flex-col sm:flex-row justify-between gap-5"> {/* Header */}
          <h2>Found {data ? data.total_jokes : 0} results {keyword !== '' ? `for "${keyword}"` : ''}</h2>
          <div id="daddj-pagination">
            {data ? (
              <>
                <button className={data.previous_page === page ? 'disabled' : ''} onClick={() => setpage(data.previous_page)}><p><FiChevronLeft /></p></button>
                <button className="active"><p>{data.current_page}</p></button>
                <button className={data.next_page === page ? 'disabled' : ''} onClick={() => setpage(data.next_page)}><p><FiChevronRight /></p></button>
              </>
            ) : ''}
          </div>
        </div>
        <div className="flex flex-col py-3 sm:py-4 lg:py-5"> {/* Search Results */}
          {jokes ? jokes.map(joke => {
            jokeIndex++
            return(
              <div key={joke.id}>
                <div className="flex flex-col sm:flex-row justify-between items-center gap-[10px]">
                  <h6 className="text-center sm:text-left text-daddj-700">{quoted(joke.joke) ? joke.joke : `"${joke.joke}"`}</h6>
                  <Button href={`/?j=${joke.id}`} variant="secondary" className="min-w-[180px] lg:min-w-[200px]">
                    <FiPlay />
                    <p>Show on Screen</p>
                  </Button>
                </div>
                {jokeIndex !== jokes.length ? <hr className="my-3 sm:my-4 lg:my-5" /> : ''}
              </div>
            )
          }) : null}
        </div>
      </div>
    </>
  )
}

export default Search_