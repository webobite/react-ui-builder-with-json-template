import React from 'react'

interface IFooter {
    title : string | '';
    extraProps?: any;
}

const Footer = (props : IFooter) => {
    const {title} = props;
  return (
    <div>{title}</div>
  )
}

export default Footer