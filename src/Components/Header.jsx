import React from 'react'
import styled from 'styled-components';
import logo from '../Common/Images/logo.jpg'

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  padding: 15px 0;
  img{
    
  }
`

const Header = () => {
  return (
    <Navbar>
      <img src={logo} alt='logo' />
    </Navbar>
  )
}

export default Header