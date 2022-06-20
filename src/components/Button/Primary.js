import { Link } from "react-router-dom"

const Primary = ({ children, className, href }) => {
  const classNames = `daddj-btn bg-daddj-700 hover:bg-daddj-800 text-neutral-50 ${className ?? ''}`

  if (href) {
    return (
      <>
        <Link to={href} className={classNames}>
          {children}
        </Link>
      </>
    )
  }
  return (
    <>
      <button className={classNames}>
        {children}
      </button>
    </>
  )
}

export default Primary