import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Styles from './styles.module.scss';
import FullWidthContainer from '../FullWidthContainer';

const Header = ({ siteTitle }) => (
  <div className={ Styles.nav_bar }>
    <FullWidthContainer>
      <h1>
        <Link
          to="/"
          style={{textDecoration: `none`,}}>
          {siteTitle}
        </Link>
      </h1>
    </FullWidthContainer>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
