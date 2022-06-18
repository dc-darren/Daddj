import { Helmet } from "react-helmet"
import { FiImage, FiLink, FiShuffle } from "react-icons/fi"
import PrimaryButton from "../components/Button/Primary"
import SecondaryButton from "../components/Button/Secondary"

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Daddj | Home</title>
      </Helmet>
      <div className="content justify-center items-center text-center">
        <h1>"I was going to get a brain transplant, but I changed my mind"</h1>
        <div> {/* Actions */}
          <div className="flex gap-5">
            <PrimaryButton>
              <FiShuffle />
              <p>Get a Joke</p>
            </PrimaryButton>
            <SecondaryButton>
              <FiImage />
              <p>Obtain Image</p>
            </SecondaryButton>
            <SecondaryButton>
              <FiLink />
              <p>Copy Link</p>
            </SecondaryButton>
          </div>
          <p className="mt-4">Got a better joke? Submit it <a href="https://icanhazdadjoke.com/submit" className="daddj-link">here</a></p>
        </div>
      </div>
    </>
  )
}

export default Home