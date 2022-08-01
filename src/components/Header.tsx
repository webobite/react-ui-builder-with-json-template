import React from 'react'

interface IHeader {
    title? : string | '';
    extraProps?: any;
}

const Header = (props : IHeader) => {
    const {title} = props;
  return (
    <div>{title}</div>
  )
}

export default Header