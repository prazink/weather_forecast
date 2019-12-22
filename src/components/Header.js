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

function Header () {
    return (
      <>
        <h1 style={titleHeader}>Header</h1>
        <p style={subTitle}>Me</p>
      </>
      );
}
export default Header;