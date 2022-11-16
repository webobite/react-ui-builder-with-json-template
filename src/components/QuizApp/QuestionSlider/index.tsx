import React, { useState } from 'react'
import { layoutFinderByTemplateIdentifier } from '../../../uiEngine/helper';
import { GET_ALL_COMPONENTS } from '../../../utils/componentConfigs';
import ControlOption from '../../ControlOption/ControlOption';
import QuizContentScreen from '../QuizContentScreen';
import ButtonSideControl from './ButtonSlideControl';
import './index.css'

interface IQuestionSlider {
  getComponentList: any;
  layoutConfigs: any[];
  componentsData: any[];
}

const QuestionSlider = (props: IQuestionSlider) => {
  const {
    getComponentList,
    layoutConfigs,
    componentsData
  } = props;

  const [slideIndex, setSlideIndex] = useState(1);
  const nextSlide = () => {
    if(slideIndex !== componentsData.length){
        setSlideIndex(slideIndex + 1)
    } 
    else if (slideIndex === componentsData.length){
        setSlideIndex(1)
    }
}

const prevSlide = () => {
  if(slideIndex !== 1){
      setSlideIndex(slideIndex - 1)
  }
  else if (slideIndex === 1){
      setSlideIndex(componentsData.length)
  }
}


  return (
    <div className="container-slider">
      {
        componentsData.map((questionData, index) => {
          return (
            <div key={index} className={slideIndex === index + 1 ? "slide active" : "slide not-active"}>
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
      <ControlOption
        buttonDetails={[
          {
            color: 'secondary',
            label: 'Prev',
            onClick: prevSlide,
            size: 'small',
            variant: 'contained'
          },
          {
            color: 'primary',
            label: 'Next',
            onClick: nextSlide,
            size: 'small',
            variant: 'outlined'
          }
        ]}
      />
    </div>
  )
}

export default QuestionSlider