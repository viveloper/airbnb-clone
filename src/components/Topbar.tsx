import React from 'react';
import { Icon } from '@iconify/react';
import Container from './Container';

function Topbar() {
  return (
    <header className="sticky">
      <Container>
        <div className="p-8">
          <button className="flex items-center justify-center bg-gray-100 w-full h-12 rounded-full">
            <span className="text-red-500 text-xl mr-2">
              <Icon icon="bx:bx-search" />
            </span>
            <span className="font-semibold text-sm">어디로 여행가세요?</span>
          </button>
        </div>
      </Container>
    </header>
  );
}

export default Topbar;
