/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import Header from "./Header"
import Profile from "./Profile"

const Layout = ({ children }) => {

  return (
    <>
      <nav>
        <Header/>
      </nav>
      <aside>
        <Profile/>
      </aside>
      <main>{children}</main>
    </>
  )
}

export default Layout
