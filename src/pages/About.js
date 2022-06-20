import { Helmet } from "react-helmet"

const About = () => {
  return (
    <>
      <Helmet>
        <title>Daddj | About</title>
      </Helmet>
      <div className="content">
        <div className="daddj-texts">
          <h1>What is Daddj?</h1>
          <p>Daddj <span className="font-semibold">/'dadē/</span> is the place to look up for dad jokes, fetched from the Public API <a href="https://icanhazdadjoke.com/" className="daddj-link">icanhazdadjoke</a>. Daddj is made for learning and entertainment purpose. Have fun :)</p>
        </div>
        <div className="daddj-texts">
          <h2>Features</h2>
          <ul className="list-disc ml-3">
            <li>Get a random dad joke</li>
            <li>Search for dad jokes by a keyword</li>
            <li>Obtain the image version of a specific dad joke</li>
            <li>Copy the link to a specific dad joke</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default About