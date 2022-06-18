const Primary = ({ children, className }) => {
  return (
    <>
      <button className={`daddj-btn bg-daddj-700 hover:bg-daddj-800 text-neutral-50 ${className ?? ''}`}>
        {children}
      </button>
    </>
  )
}

export default Primary