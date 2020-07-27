import React, { FunctionComponent } from 'react';

const style = {
  position: 'fixed',
  width: '100%',
  height: '100%',
  background: 'black',
  zIndex: 999999,
} as const;

const SiteBlocker: FunctionComponent = () => (
  <div data-testid="site-blocker" style={style}></div>
);

export default SiteBlocker;
