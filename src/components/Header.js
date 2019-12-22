import React from 'react';
import PropTypes from 'prop-types';


function Header (props) {
    const { title, subTitle } = props;

    return (
      <>
        <h1 className= "titleHeader">{title}</h1>
        <p className= "subTitle">{subTitle}</p>
      </>
      );
}

Header.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
}
Header.defaultProps = {
    title: '',
    subTitle: ''
};

export default Header;