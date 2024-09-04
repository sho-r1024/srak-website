import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import About from "../components/about"
import Experience from "../components/experience"
import Redirect from "../components/redirects"
import linkedin from "../images/linkedin-white.png"
import github from "../images/github.png"
import * as styles from "../components/index.module.css"
import Projects from "../components/projects"

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
      <div>
        <div>
            <h1 className="introduction">
              hi, my name is <b>shoaib</b>
            </h1>
            <p>and this is my corner of the internet...</p>
        </div>
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
        </div>
      </div>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
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
