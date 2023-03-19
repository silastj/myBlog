import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not Found" />
    <h1>404</h1>
    <p>Ops...não tem nada aqui.</p>
  </Layout>
)

export default NotFoundPage
