import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Container from './Container';
import Logo from './Logo';

function Topbar() {
  return (
    <header>
      <Container className="flex">
        <div className="flex-1">
          <Link to="/">
            <div className="text-rose-500">
              <Logo
                width="102"
                height="32"
                fill="currentcolor"
                style={{ display: 'block' }}
              />
            </div>
          </Link>
        </div>
        <div className="flex-1"></div>
        <div className="flex-1">User Area</div>
      </Container>
    </header>
  );
}

export default Topbar;
