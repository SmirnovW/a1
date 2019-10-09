import * as React from 'react';
import { Link } from 'react-router-dom';

export const Logo = React.memo(() => {
  return (
    <Link to="/cars">
      <img
        width="180"
        height="36"
        src="/images/logo.png"
        alt="Auto1"
        data-testid="logo"
      />
    </Link>
  );
});
