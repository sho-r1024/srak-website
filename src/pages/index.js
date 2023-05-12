import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Redirect from "../components/redirects"
import linkedin from "../images/linkedin-white.png"
import github from "../images/github.png"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "LinkedIn →",
    url: "https://www.linkedin.com/in/shoaib-rakhangi-5b3352204/",
    img: linkedin
  },
  {
    text: "GitHub →",
    url: "https://github.com/sho-r1024",
    img: github
  }
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <body style={{
    minHeight: "100vh",
  }}>
    <Layout>
      {/* <div className={styles.textCenter}> */}
      <div>
        <h1>
          hi, my name is <b>shoaib rakhangi</b> <i>&#40;he/him&#41;</i>
        </h1>

        <p>and this is my corner of the internet...</p>
        
        {/* <p className={styles.intro}>
          <b>Example pages:</b>{" "}
          {samplePageLinks.map((link, i) => (
            <React.Fragment key={link.url}>
              <Link to={link.url}>{link.text}</Link>
              {i !== samplePageLinks.length - 1 && <> · </>}
            </React.Fragment>
          ))}
          <br />
          Edit <code>src/pages/index.js</code> to update this page.
        </p> */}
      </div>
      {/* <ul className={styles.list}>
        {links.map(link => (
          <li key={link.url} className={styles.listItem}>
            <a
              className={styles.listItemLink}
              href={`${link.url}${utmParameters}`}
            >
              {link.text} ↗
            </a>
            <p className={styles.listItemDescription}>{link.description}</p>
          </li>
        ))}
      </ul>
      {moreLinks.map((link, i) => (
        <React.Fragment key={link.url}>
          <a href={`${link.url}${utmParameters}`}>{link.text}</a>
          {i !== moreLinks.length - 1 && <> · </>}
        </React.Fragment>
      ))} */}
    <div className={styles.index_links}>
      {links.map(
        link => (
          <Redirect
            link_img={link.img}
            link_text={link.text}
            destination={link.url} 
          />
        )
      )}
      {/* <Redirect 
                  link_img={linkedin}
                  link_text="LinkedIn &#8594;" 
                  destination="https://www.linkedin.com/in/shoaib-rakhangi-5b3352204/"/> */}
    </div>
    </Layout>
  </body>

)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="home" />

export default IndexPage
