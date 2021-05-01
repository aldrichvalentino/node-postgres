import * as React from 'react';

import './styles.css';

type HeadingProps = {
  children: string | JSX.Element | JSX.Element[],
};

const Heading = ({ children }: HeadingProps): JSX.Element => {
  return (
    <h1 className="custom-heading">
      {children}
    </h1>
  )
};

export default Heading;
