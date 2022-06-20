import { Link } from "react-router-dom"

const Secondary = ({ children, className, href }) => {
  const classNames = `daddj-btn border border-daddj-700 hover:bg-daddj-200 text-daddj-700 ${className ?? ''}`

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

export default Secondary