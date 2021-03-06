import React from 'react'
import { StaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"

import "./hero.css"

const Hero = () => (
  <StaticQuery
    query={graphql`
      {
        hero:file(relativePath: {eq: "hero.jpg"}) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        logo:file(relativePath: {eq: "aji-logo.png"}) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }      
    `}
    render={data => (
      <div className="hero-wrapper">
        <Img className="aji-logo"
          fluid={data.logo.childImageSharp.fluid}
        />
        <div className="hero-text">
          <h2 className="status">
            SOLD
          </h2>
          <h1 className="address">
            6445 Goldenbush Dr<br/>
            Carlsbad, CA 92011
          </h1>
          <h3 className="price">
            $985,000
          </h3>
        </div>
        <div className="hero-img-wrapper">
          <Img className="hero-img"
            imgStyle={{
              objectPosition: 'center 0%'
            }}
            fluid={data.hero.childImageSharp.fluid}/>
        </div>
      </div>
    )}
  />
)

export default Hero