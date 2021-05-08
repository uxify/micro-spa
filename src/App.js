import React from 'react';

const Header = React.lazy(() => import('header/Header'));

export default () => (
  <div style={{margin: '20px'}}>
    <React.Suspense fallback='Loading header'>
      <Header/>
    </React.Suspense>
  </div>
);