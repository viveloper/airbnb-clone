import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Logo from './Logo';

function Topbar() {
  return (
    <header className="h-20 flex items-center sticky top-0">
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
      <div className="flex-1">
        <button className="w-[300px] h-12 border rounded-full flex items-center shadow hover:shadow-md transition-all">
          <div className="flex-1 text-left px-4 text-sm font-semibold">
            검색 시작하기
          </div>
          <div className="bg-rose-500 w-8 h-8 mr-2 text-white flex items-center justify-center rounded-full">
            <Icon icon="bx:bx-search" />
          </div>
        </button>
      </div>
      <div className="flex-1 flex items-center justify-end">
        <div className="flex items-center mr-2">
          <Link
            className="text-sm font-semibold inline-block w-24 h-[42px] leading-[42px] text-center rounded-full hover:bg-gray-100"
            to="/"
          >
            호스트 되기
          </Link>
          <button className="h-[42px] w-11 rounded-full hover:bg-gray-100 flex items-center justify-center">
            <span>
              <svg
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: 'block',
                  height: '16px',
                  width: '16px',
                  fill: 'currentcolor',
                }}
              >
                <path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"></path>
              </svg>
            </span>
          </button>
        </div>
        <div>
          <button className="border w-20 h-[42px] rounded-full hover:shadow-md transition-all flex items-center justify-center">
            <div>
              <Icon icon="ci:hamburger" width="18" height="18" />
            </div>
            <div className="text-gray-500 ml-3">
              <Icon icon="fa:user-circle" width="30" height="30" />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
