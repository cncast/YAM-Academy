
export const InfoCard = ({title = 'Title', text='Text for testing...'}) => {
  return (
    <div className="px-2 py-2 mx-2 my-2 text-center centered-children row shadow" 
      style={{
        backgroundColor: '#40B982', 
        width: '170px', height: '150px',
        color: 'white'
      }}
    >
        <h2 className="col-12">{title}</h2>
        <p className="col-12">{text}</p>
    </div>
  )
}
