import { Link } from "react-router-dom"

const Button = ({ children, className, href, onClick, variant = 'secondary' }) => {
  const primaryClassName = "daddj-btn bg-daddj-700 hover:bg-daddj-800 text-neutral-50"
  const secondaryClassName = "daddj-btn border border-daddj-700 hover:bg-daddj-200 text-daddj-700"
  const classNames = `${variant === 'primary' ? primaryClassName : secondaryClassName} ${className ?? ''}`

  if (href) {
    if (href.startsWith('https://')) {
      return (
        <>
          <a href={href} className={classNames}>
            {children}
          </a>
        </>
      )
    }
    else {
      return (
        <>
          <Link to={href} className={classNames}>
            {children}
          </Link>
        </>
      )
    }
  }
  return (
    <>
      <button onClick={onClick} className={classNames}>
        {children}
      </button>
    </>
  )
}

export default Button