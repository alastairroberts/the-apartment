import React, { useState, useEffect } from "react"

import Layout from "../components/unique/layout"
import SEO from "../components/unique/seo"

import { Box, Paper } from "@material-ui/core"
import { graphql } from "gatsby"

import FeaturedCard from "../components/card/FeaturedCard"
import ArticleCard from "../components/card/ArticleCard"
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

      <Paper elevation={6}>
        <Box mt={5} py={6}>
          <Box mx={6}>
            <h2 style={{ marginTop: 0 }}>Featured</h2>
          </Box>

          <HorrizontalScrollContainer elements={generateFeaturedCardGroup()} />
        </Box>
      </Paper>

      <Box mx={6}>
        <h2>All Related Posts</h2>

        {posts.map((post, i) => {
          return (
            <Box key={i} mb={2}>
              <ArticleCard post={post} />
            </Box>
          )
        })}
      </Box>
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
