import clsx from 'clsx';
import React from 'react';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

function Container({ className, children }: Props) {
  return (
    <div
      className={clsx('min-w-[1128px] max-w-[1440px] px-20 mx-auto', className)}
    >
      {children}
    </div>
  );
}

export default Container;
