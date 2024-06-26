import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ children, siteTitle }) => (
  <header className="usa-header usa-header--extended" role="banner">
    {/* <div className="usa-navbar">
      <div className="usa-logo" id="extended-logo" style={{maxWidth: "100%"}}>
        <em className="usa-logo__text">
          <Link to="/" title="Home" aria-label="Home">
          <img src={headshot1} style={{width: 100}} />
            {siteTitle}
          </Link>
        </em>
      </div>
      <button className="usa-menu-btn">Menu</button>
    </div> */}
    {children}
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
