import { Helmet } from "react-helmet"

const Credits = () => {
  return (
    <>
      <Helmet>
        <title>Daddj | Credits</title>
      </Helmet>
      <div className="content">
        <div className="daddj-texts">
          <h2>Public API</h2>
          <a href="https://icanhazdadjoke.com/" className="daddj-link">
            <div className="daddj-img-link">
              <img src="/credits/icanhazdadjoke.svg" alt="[img]" className="daddj-img" />
              <p>icanhazdadjoke</p>
            </div>
          </a>
        </div>
        <div className="daddj-texts">
          <h2>Frameworks</h2>
          <a href="https://reactjs.org/" className="daddj-link">
            <div className="daddj-img-link">
              <img src="/credits/react.svg" alt="[img]" className="daddj-img" />
              <p>React</p>
            </div>
          </a>
          <a href="https://tailwindcss.com/" className="daddj-link">
            <div className="daddj-img-link">
              <img src="/credits/tailwindcss.svg" alt="[img]" className="daddj-img" />
              <p>TailwindCSS</p>
            </div>
          </a>
        </div>
        <div className="daddj-texts">
          <h2>GitHub Repository</h2>
          <a href="https://github.com/dc-darren/daddj" className="daddj-link">
            <div className="daddj-img-link">
              <img src="/credits/github.svg" alt="[img]" className="daddj-img" />
              <p>dc-darren/daddj</p>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

export default Credits