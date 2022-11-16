import React from 'react'
import { layoutFinderByTemplateIdentifier } from '../../../uiEngine/helper';
import { GET_ALL_COMPONENTS } from '../../../utils/componentConfigs';
import ControlOption from '../../ControlOption/ControlOption';
import QuizContentScreen from '../QuizContentScreen';

interface IQuestionSlider {
  getComponentList: any;
  layoutConfigs: any[];
  componentsData: any[];
}

const QuestionListView = (props: IQuestionSlider) => {
  const {
    getComponentList,
    layoutConfigs,
    componentsData
  } = props;

  const renderQuestionsInListFormat = () => {
    return (
      <div className="question-list">
        {
          componentsData.map((questionData, index) => {            
            return (
              <div key={index}>
                <QuizContentScreen 
                  componentProperties={questionData}
                  getComponent={getComponentList}
                  uiJSON={
                    layoutFinderByTemplateIdentifier(layoutConfigs, questionData[0].templateIdentifier)
                  } 
                />
              </div>
            )
          })
        }
      </div>
    )
  }

  return (
    <>
      {renderQuestionsInListFormat()}
      <ControlOption
        buttonDetails={[
          {
            color: 'primary',
            label: 'Submit',
            onClick: ()=> console.log("final submit"),
            size: 'small',
            variant: 'contained'
          }
        ]}
      />
    </>
  )
}

export default QuestionListView