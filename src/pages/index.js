import React from "react"


import About from "../components/About";
import Hero from '../components/Hero';
import Features from '../components/Features';
import Photos from '../components/Photos';
import Agent from "../components/Agent";
import Layout from "../components/layout"

import SEO from "../components/seo"



const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Hero/>
      <About/>
      <Features/>
      <Photos/>
      <Agent/>
    </Layout>
  </>
)

export default IndexPage
