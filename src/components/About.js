import React from 'react'
import Img from "gatsby-image"
import { StaticQuery, graphql } from 'gatsby';

import Container from './Container';
import "./about.css"

const imgQuery = graphql`
  {
    interior:file(relativePath: {eq: "about/interior-entry.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const About = () => (
  <Container style={{
    marginTop: '64px',
    marginBottom: '64px'
  }}>
    <h1 className="about-title">About This Property</h1>
    <h3 className="about-subtitle">Aviara &bull; Carlsbad Shorepointe</h3>

    <div className="about-content">
      <p className="description">
        This is a large 3,188 sq ft home sitting on a 10,400 square foot lot. The professionally landscaped exterior is equipped with an automated timed sprinkler system and a peaceful backyard waterfall. Upon entering the home, you are greeted by a stunning spiral stair-case and a living room for relaxing and entertaining guests. The entry-way, kitchen, family room, and downstairs hallways all have 18x18” tile floors. The spacious kitchen features beautiful, light-colored cabinets with lots of space. With granite counter-tops, a center island, 5-burner stove, and a view of the waterfall out of the window, this kitchen is a cook’s paradise! The home has recessed lighting throughout the home with a dimmable light in the dining room. In the family room, there is a lovely brick fireplace and a large inlet for a TV/entertainment system. The laundry room in this home is located upstairs - very convenient! The massive, private master suite boasts a large walk-in shower, separate soaking tub, and an enormous walk-in closet. Two of the bedrooms have a “Jack and Jill” bathroom and the 4th bedroom has its own private bathroom.
      </p>

      <div className="about-img">
        <StaticQuery query={imgQuery}
          render={data => (
            <Img fluid={data.interior.childImageSharp.fluid}/>
          )}
        />
      </div>
    </div>
  </Container>
)

export default About