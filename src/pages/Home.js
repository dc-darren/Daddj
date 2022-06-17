import { Helmet } from "react-helmet"

const Home = () => {
  return (
    <>
    <Helmet>
      <title>Daddj | Home</title>
    </Helmet>
      <div className="content justify-center items-center">
        <div className="text-center">
          <img src="logo192.png" alt="Daddj" className="w-40 mx-auto" />
          <h1 className="font-semibold text-5xl text-daddj-700 mt-6">Daddj</h1>
          <h4 className="font-normal text-xl text-daddj-500 mt-1.5">Project is still in development...</h4>
        </div>
      </div>
    </>
  )
}

export default Home