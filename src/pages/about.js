import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaCheckCircle } from "react-icons/fa"
import "./index.css"

import Sidebar from "../components/sidebar/Sidebar"
import TechTag from "../components/tags/TechTag"

// import TXG from "../images/TXG-2.jpg"
// import TXG_2 from "/icons/TXG-2.jpg"

// import TXG_2 from "../images/TXG-2.jpg"
import TXG_2 from "../images/Logo-White-Slogan.jpg"

const AboutPage = props => {
  const labels = props.data.site.siteMetadata.labels
  const aboutTags = ["react", "nodejs", "html", "css"]
  const tags = {}
  labels.forEach(label => {
    aboutTags.forEach(tag => {
      if (tag === label.tag) {
        tags[tag] = label.name
      }
    })
  })

  return (
    <Layout>
      <SEO title="About" />
      <div className="post-page-main">
        <div className="sidebar px-4 py-2">
          <Sidebar />
        </div>

        <div className="post-main">
          <SEO title="About" />
          <div className="mt-3">
            {/* <img src="/icons/TXG-2.jpg"/> */}
            <img src={TXG_2}/>
            {/* <p><strong>Weekly articles from a self-taught Generation X programmer</strong></p> */}
            <p><strong></strong></p>
            <h2 className="heading">About</h2>
            {/* <p><em><strong>This blog documents the self-taught coding journey of a Generation X programmer.</strong></em></p> */}
            <p>Hello, I'm Michael. Like many people, I am an aspiring self-taught web developer.</p>
            <p>My goal for this blog is to document and share the progress of my self-taught coding journey. </p>
            <br />
            <p><h6><strong>Affiliate Disclaimer: </strong>Some of the links included in my articles may be affiliate links to products that I recommend, which may generate a sales commission at no additional cost to you.</h6>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query aboutQuery {
    site {
      siteMetadata {
        labels {
          tag
          tech
          name
          size
          color
        }
      }
    }
  }
`

export default AboutPage
