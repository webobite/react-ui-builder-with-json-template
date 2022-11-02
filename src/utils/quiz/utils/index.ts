import { DETERMINATE_VARIANT, PRIMARY_SELECTION } from "./constants";

export interface IOptionsFormats {
  value: string;
  label: string;
}

export interface IQuestionsFormats {
  id: number;
  question: string;
  options: IOptionsFormats[];
  imagePlaceholder: any;
  selectionType: string;
  templateIdentifier: string;
}

/**
 * Generate questions with requeired json wrt uiEngine input
 * @param questionList : IQuestionsFormats[] (type) list of questions for MCQ questions
 */
export const questionGeneraterWithJSONFormat = (questionList: any[]) => {
  let formatedQuestionList = questionList.map(
    (questionData: IQuestionsFormats, index: number) => {
      if (questionData) {
        console.log({questionData});
        
        let tempJSONScreen = [];
        tempJSONScreen.push({
          templateIdentifier: questionData.templateIdentifier,
        });
        // create progress component
        tempJSONScreen.push(
          getProgressComponentJSON(
            "progress",
            "progress_v1",
            DETERMINATE_VARIANT,
            PRIMARY_SELECTION,
            // TODO: Need to discuss this part during demo
            index * 10
          )
        );
        // create text component
        if (questionData.question) {
          tempJSONScreen.push(
            getTextComponentJSON("text", "text_v1", questionData.question)
          );
        }

        if(questionData.imagePlaceholder) {
          tempJSONScreen.push(
            getImageComponentJson("image_placeholder", "image_placeholder_v1", questionData.imagePlaceholder)
          );
        }
        // create multiple choice component
        if (questionData.options && questionData.selectionType) {
          tempJSONScreen.push(
            getMultipleChoiceComponentJSON(
              "multiple_choice",
              "multiple_choice_v3",
              questionData.options,
              questionData.selectionType
            )
          );
        }

        // create control_option component json
        // tempJSONScreen.push(
        //   getControlOptionComponentJSON("control_option", "control_option_v1")
        // );
        return tempJSONScreen;
      }
    }
  );
  return formatedQuestionList;
};

/**
 * Get Progress component JSON
 * @param wrapperName
 * @param componentName
 * @param variant
 * @param color
 * @returns
 */
export const getProgressComponentJSON = (
  wrapperName: string,
  componentName: string,
  variant: string,
  color: string,
  progressValue: number
) => {
  return {
    name: wrapperName,
    renderer: componentName,
    properties: {
      value: progressValue,
      variant: variant,
      color: color,
    },
  };
};

/**
 *
 * @param wrapperName
 * @param componentName
 * @param content
 * @returns
 */
export const getTextComponentJSON = (
  wrapperName: string,
  componentName: string,
  content: string
) => {
  return {
    name: wrapperName,
    renderer: componentName,
    properties: {
      content: content,
    },
  };
};

/**
 *
 * @param wrapperName
 * @param componentName
 * @returns
 */
export const getControlOptionComponentJSON = (
  wrapperName: string,
  componentName: string
) => {
  return {
    name: wrapperName,
    renderer: componentName,
    properties: {
      buttonDetails: [
        {
          label: "Skip",
          color: "secondary",
          variant: "contained",
          size: "small",
        },
        {
          label: "Next",
          color: "primary",
          variant: "outlined",
          size: "small",
        },
      ],
    },
  };
};

/**
 *
 * @param wrapperName
 * @param componentName
 * @param mcqOptions
 * @param selectionType
 * @returns
 */
export const getMultipleChoiceComponentJSON = (
  wrapperName: string,
  componentName: string,
  mcqOptions: IOptionsFormats[],
  selectionType: string
) => {
  return {
    name: wrapperName,
    renderer: componentName,
    properties: {
      options: mcqOptions,
      type: selectionType,
    },
  };
};

export const getImageComponentJson = (
  wrapperName: string,
  componentName: string,
  imageProperties: {
    height: any;
    width: any;
    source: any;
    alt: any;
    label: any;
    labelPosition: any;
  }
) => {
  return {
    name: wrapperName,
    renderer: componentName,
    properties: {
      height: imageProperties.height,
      width: imageProperties.width,
      source: imageProperties.source,
      alt: imageProperties.alt,
      label: imageProperties.label,
      labelPosition: imageProperties.labelPosition,
    },
  };
};
