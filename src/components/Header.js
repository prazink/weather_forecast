import React from 'react';


function Header (props) {
    return (
      <>
        <h1 className= "titleHeader">{props.title}</h1>
        <p className= "subTitle">{props.subTitle}</p>
      </>
      );
}
export default Header;