import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import Home from './home.mdx'

class IndexPage extends React.Component {
  render() {
    const siteTitle = "My Personal Website"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
          tagline="Personal Blog Rajat Negi"
        />
        <img style={{ margin: 0 }} src="./scene.gif" alt="Gatsby Scene" />
        <Home style={{ textDecoration: 'none' }}/>
        { /*<p>Check out my blog!</p>*/}        
          <Link to="/blog/">
          <Button marginTop="35px">Read all articles</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
