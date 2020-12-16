import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Grid, Row, Col } from "rsuite"
import { graphql } from "gatsby"

import ArticleCard from "../components/ArticleCard"
import SubNavBar from "../components/SubNavBar"

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
        <Row style={{ marginTop: 10 }}>
          <Col md={12}>
            <h2>Featured</h2>
            {featuredPosts.map((post, i) => {
              return <ArticleCard key={i} post={post} />
            })}
          </Col>
          <Col md={12}>
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
