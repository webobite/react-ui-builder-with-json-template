import React from 'react';
import { componentProps, uiJson } from './utils';
import Canvas from './uiEngine';
import { GET_ALL_COMPONENTS } from './utils/componentConfigs';

function App() {
  return (
    <Canvas componentProps={componentProps} getComponent={GET_ALL_COMPONENTS} layoutConfig={uiJson} />
  );
}

export default App;
