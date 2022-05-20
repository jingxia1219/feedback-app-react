function Header(props){
    const headerSyles = {backgroundColor:props.bgColor,color:props.textColor}
    return (
        <header style={headerSyles}>
          <div className='container'>
              <h2>
                  {props.text}
              </h2>
          </div>
          </header>  
    )
}


export default Header;