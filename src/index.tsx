import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GET_ALL_COMPONENTS } from './utils/componentConfigs';
import { componentProps, uiJson } from './utils';
import Canvas from './uiEngine';
import Layout from './components/Layout/Layout';
// import Canvas from './uiEngine/Canvas';

const root = createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* <Canvas componentProps={componentProps} getComponent={GET_ALL_COMPONENTS} layoutConfig={uiJson} /> */}
    <Layout />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
