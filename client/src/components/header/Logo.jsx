import React from 'react'
import { Link } from 'react-router-dom'

const Logo = ({ currentPage }) => (
  // TODO - figure out how to make currentPage =/ undefined
  <Link to={`/1`}>
    <h1>ConsuMore</h1>
  </Link>
)

export const mapStateToProps = state => {
  return {
    currentPage: state.page.page
  }
}

export default Logo
