/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menu_links {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <>
      <body className="Site">
      <Header site_title={data.site.siteMetadata?.title || `Title`} nav_links={data.site.siteMetadata?.menu_links || []} />
        {/* <div
          style={{
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            position: "relative",
          }}
        > */}
          <div 
            className="insides" 
            style={{
            }}>
            <main>{children}</main>
          </div>
          {/* <Footer /> */}
        {/* </div> */}
        {/* <Footer /> */}
        {/* <footer
            // style={{
            //   textAlign: 'center',
            //   fontSize: `var(--font-sm)`,
            //   color: 'white'
            // }}
            style= {{
              fontFamily: "var(--font-sans)",
              textAlign: "center",
              left: 0,
              bottom: 0,
              fontSize: `var(--font-sm)`,
              color: 'white',
              width: 'calc(100% - 20px)',
              // position: "absolute",
              background: "rgba(0, 0, 0)",
              margin: "auto",
              // height: "20px",
              padding: "10px",
              justifyContent: "flex-end",
              overflow: "hidden",
          }}
          >
            © {new Date().getFullYear()} &middot; built by Shoaib Rakhangi with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </footer> */}
          <Footer />
      </body>
      {/* <div className="page"> */}

      {/* </div> */}
    </>
  )
}

export default Layout
