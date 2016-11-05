// Numenta shared web components
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import moment from 'moment'
import React from 'react'

import {getRepo} from '../../utils/shared'
import Spacer from '../Spacer'
import TextLink from '../TextLink'

import styles from './index.css'


/**
 * Site Footer - React view component.
 */
const Footer = (props, {config}) => {
  const {links, siteTitle} = config
  const repo = getRepo()
  const year = moment().year()

  return (
    <div className={styles.footbar}>
      <footer className={styles.footer}>
        <span>
          © {year} {' '}
          <TextLink to={links.in.home}>{siteTitle}</TextLink>
        </span>
        {/*
        <span className={styles.mark}>
          {mark}
        </span>
        */}
        <span>
          <TextLink to={links.in.terms}>Terms</TextLink>
          <Spacer />
          <TextLink to={links.in.privacy}>Privacy</TextLink>
          <Spacer />
          <TextLink to={links.in.sitemap}>Sitemap</TextLink>
          <Spacer />
          <TextLink to={repo}>Source</TextLink>
        </span>
      </footer>
    </div>
  )
}

Footer.contextTypes = {
  config: React.PropTypes.object,
}

export default Footer
