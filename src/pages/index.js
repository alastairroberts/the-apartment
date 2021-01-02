import React, { useState, useEffect } from "react"

import Layout from "../components/unique/layout"
import SEO from "../components/unique/seo"
import { Grid, Row, Col } from "rsuite"
import { graphql } from "gatsby"

import FeaturedCard from "../components/card/FeaturedCard"
import ArticleCard from "../components/card/ArticleCard"
import SubNavBar from "../components/navigation/SubNavigationBar"

import HorrizontalScrollContainer from "../components/common/HorrizontalScrollContainer"

const BlogIndex = ({ data, location }) => {
  const siteTitle = "dd "
  const [currentPage, setCurrentPage] = useState("front-page")

  const allPosts = data.allMarkdownRemark.nodes
  const [posts, setPosts] = useState(allPosts)
  const [featuredPosts, setFeaturedPosts] = useState(
    allPosts.filter(post => post.frontmatter.featured)
  )

  useEffect(() => {
    if (currentPage !== "front-page") {
      setPosts(
        allPosts.filter(post => post.frontmatter.category === currentPage)
      )
      setFeaturedPosts(
        allPosts.filter(
          post =>
            post.frontmatter.category === currentPage &&
            post.frontmatter.featured
        )
      )
    } else {
      setPosts(allPosts)
      setFeaturedPosts(allPosts.filter(post => post.frontmatter.featured))
    }
  }, [currentPage, allPosts])

  const generateFeaturedCardGroup = () =>
    featuredPosts.map((post, i) => <FeaturedCard key={i} post={post} />)

  return (
    <Layout
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      location={location}
      title={siteTitle}
    >
      <SEO title="All posts" />
      <SubNavBar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        location={location}
      />
      <Grid>
        <h2>Featured</h2>
      </Grid>
      <Grid fluid>
        <HorrizontalScrollContainer elements={generateFeaturedCardGroup()} />
      </Grid>

      <Grid style={{ marginTop: 10 }} justify="center">
        <Row>
          <Col>
            <h2>All Posts</h2>
            {posts.map((post, i) => {
              return <ArticleCard key={i} post={post} />
            })}
          </Col>
        </Row>
      </Grid>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          author
          category
          featured
        }
      }
    }
  }
`
