import React from 'react'

const Header = ({text}) => {
  
  const headerStyles = {
    backgroundColor: 'purple',
    color: 'yellow',
    
  }
    return (
    <h1 style={headerStyles}>
    <h1 className='container'>{text}</h1>

    </h1>

  )
}

export default Header