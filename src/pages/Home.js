import { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { useSearchParams } from "react-router-dom"
import { FiImage, FiLink, FiShuffle } from "react-icons/fi"
import Button from "../components/Button"
import fetchData from "../fetchData"

const Home = () => {
  // const homepageUrl = "https://dc-darren.github.io/daddj"
  const homepageUrl = "http://localhost:3000/"
  const apiUrl = "https://icanhazdadjoke.com/"
  const [joke, setjoke] = useState({})
  const [jokeUrl, setjokeUrl] = useState("")
  const [apiJokeUrl, setapiJokeUrl] = useState("")
  const [searchParams, setsearchParams] = useSearchParams()

  const quoted = (str) => {
    return str.startsWith('"') && str.endsWith('"') ? true : false
  }

  const getJoke = async (id) => {
    const urlToFetch = `${apiUrl}${id ? `j/${id}` : ''}`
    await fetchData(urlToFetch)
    .then(result => {
      if (result.status === 200) setjoke(result)
    })
  }

  const getJokeLink = () => {
    navigator.clipboard.writeText(jokeUrl);
  }

  useEffect(() => {
    const id = searchParams.get('j')
    getJoke(id)
  }, [])

  useEffect(() => {
    setjokeUrl(`${homepageUrl}?j=${joke.id}`)
    setapiJokeUrl(`${apiUrl}j/${joke.id}`)
  }, [joke])
  
  return (
    <>
      <Helmet>
        <title>Daddj | Home</title>
      </Helmet>
      <div className="content justify-center items-center text-center">
        <h1>{joke.joke ? (quoted(joke.joke) ? joke.joke : `"${joke.joke}"`) : ''}</h1>
        <div className="w-full lg:w-[unset]"> {/* Actions */}
          <div className="flex flex-col lg:flex-row items-center gap-[10px] lg:gap-5">
            <Button variant="primary" onClick={() => getJoke()}>
              <FiShuffle />
              <p>Get a Joke</p>
            </Button>
            <Button variant="secondary" href={`${apiJokeUrl}.png`}>
              <FiImage />
              <p>Obtain Image</p>
            </Button>
            <Button variant="secondary" onClick={() => getJokeLink()}>
              <FiLink />
              <p>Copy Link</p>
            </Button>
          </div>
          <p className="mt-4">Got a better joke? Submit it <a href="https://icanhazdadjoke.com/submit" className="daddj-link">here</a></p>
        </div>
      </div>
    </>
  )
}

export default Home