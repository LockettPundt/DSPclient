import React from 'react';
import { Nav, Anchor } from 'grommet';

const NavBar = () => (
  <Nav>
    <Anchor
      href="/"
      icon={<i className="fa fa-home fa-2x" aria-hidden="true" fa-3x></i>}
    />
  </Nav>
)

export default NavBar;