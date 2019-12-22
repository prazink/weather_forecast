import React from 'react';


function Header (props) {
    const { title, subTitle } = props;

    return (
      <>
        <h1 className= "titleHeader">{title}</h1>
        <p className= "subTitle">{subTitle}</p>
      </>
      );
}


export default Header;