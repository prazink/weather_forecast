import React from 'react';

const titleHeader = {
  fontSize: '32px',
  fontWeight: 'bold',
  color: '#fff',
  textAlign: 'center'

}
const subTitle = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#fff',
  textAlign: 'center'

}

function Header (props) {
    return (
      <>
        <h1 style={titleHeader}>{props.title}</h1>
        <p style={subTitle}>{props.subTitle}</p>
      </>
      );
}
export default Header;