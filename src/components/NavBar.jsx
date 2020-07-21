import React from 'react';
import { Nav, Anchor } from 'grommet';

const NavBar = () => (
  <Nav>
    <Anchor
      href="/"
      icon={<i className="fa fa-home fa-2x" aria-hidden="true"></i>}
    />
  </Nav>
)

export default NavBar;