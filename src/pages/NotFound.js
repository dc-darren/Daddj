import { Helmet } from "react-helmet"
import { FiShuffle } from "react-icons/fi"
import PrimaryButton from "../components/Button/Primary"

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Daddj | 404 Not Found</title>
      </Helmet>
      <div className="content justify-center items-center">
        <div className="text-center"> {/* Header */}
          <h1 className="text-7xl sm:text-8xl lg:text-9xl">404</h1>
          <h3 className="text-daddj-600 -mt-1">Page Not Found</h3>
        </div>
        <div className="flex flex-col items-center gap-2 sm:gap-4 lg:gap-5"> {/* Content */}
          <p className="text-center">The page you're looking for doesn't exist. Get a joke instead :)</p>
          <PrimaryButton href="/">
            <FiShuffle />
            <p>Get a Joke</p>
          </PrimaryButton>
        </div>
      </div>
    </>
  )
}

export default NotFound