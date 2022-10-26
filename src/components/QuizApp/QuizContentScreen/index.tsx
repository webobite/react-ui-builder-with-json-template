import React from 'react'
import Canvas from '../../../uiEngine';
import { componentProps, uiJson } from '../../../utils';
import { GET_ALL_COMPONENTS } from '../../../utils/componentConfigs';

interface IQuizContentScreen {
  componentProperties: any,
  getComponent: any;
  uiJSON: any;
}

const QuizContentScreen = (props: IQuizContentScreen) => {
  const { componentProperties, getComponent, uiJSON } = props;
  return (
    <div className='quiz-content-scrn-wrapper'>
      <Canvas componentProps={componentProperties} getComponent={getComponent} layoutConfig={uiJSON} />
    </div>
  )
}

export default QuizContentScreen;