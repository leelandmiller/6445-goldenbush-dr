import React from "react"


import About from "../components/About";
import Hero from '../components/Hero';
import Features from '../components/Features';
import Photos from '../components/Photos';
import Agent from "../components/Agent";
import Layout from "../components/layout"

import SEO from "../components/seo"

const keywords = [
  'carlsbad home for sale',
  'homes for sale in carlsbad',
  'aviara homes for sale',
  'homes for sale in aviara carlsbad',
  'carlsbad homes',
  'houses for sale carlsbad ca',
  'liz bishop',
  'houses for sale near me'
]

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="6445 Goldenbush Drive Carlsbad, CA 92011" keywords={keywords} />
      <Hero/>
      <About/>
      <Features/>
      <Photos/>
      <Agent/>
    </Layout>
  </>
)

export default IndexPage
