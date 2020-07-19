import React from 'react';
import ReactDOM from 'react-dom';
import SiteBlocker from './components/SiteBlocker/index.tsx';

const containerElement = document.createElement('div');
document.getElementsByTagName('body')[0].prepend(containerElement);

ReactDOM.render(<SiteBlocker />, containerElement);
