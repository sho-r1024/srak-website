import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <div style={{
    height: "100%"
  }}>
    <Layout>
      <h1>404: not found</h1>
      <p>Sorry! This page doesn't exist!</p>
    </Layout>
  </div>

)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
