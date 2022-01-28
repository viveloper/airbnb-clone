import clsx from 'clsx';
import React from 'react';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

function Container({ className, children }: Props) {
  return <div className={clsx('lg:px-20 md:px-10', className)}>{children}</div>;
}

export default Container;
