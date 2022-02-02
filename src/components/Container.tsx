import React from 'react';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

function Container({ className, children }: Props) {
  return <div className={className}>{children}</div>;
}

export default Container;
