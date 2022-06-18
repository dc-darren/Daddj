const Secondary = ({ children, className }) => {
  return (
    <>
      <button className={`daddj-btn border border-daddj-700 hover:bg-daddj-200 text-daddj-700 ${className ?? ''}`}>
        {children}
      </button>
    </>
  )
}

export default Secondary