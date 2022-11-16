import React from 'react'

interface IButtonSideControl {
    moveSlide: any;
    direction: any;
}

const ButtonSideControl = (props: IButtonSideControl) => {
    const { moveSlide, direction } = props;
    return (
        <button onClick={moveSlide}
            className={direction === "next" ? "btn-slide next" : "btn-slide prev"} >
            {direction === "next" ? "rightArrow" : "leftArrow"}
        </button>
    )
}

export default ButtonSideControl