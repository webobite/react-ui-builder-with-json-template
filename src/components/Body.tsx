import React from 'react'

interface IBody {
    title : string | '';
    extraProps?: any;
}

const Body = (props : IBody) => {
    const {title} = props;
  return (
    <div>{title}</div>
  )
}

export default Body