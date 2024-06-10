import React from 'react'
import styled from 'styled-components';
import logo from '../Common/Images/logo.jpg'

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgb(229, 229, 229);
`

const Header = () => {
  return (
    <Navbar>
      <img src={logo} alt='logo' />
    </Navbar>
  )
}

export default Header