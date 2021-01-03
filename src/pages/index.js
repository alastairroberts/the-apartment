import React, { useState, useEffect } from "react"

import Layout from "../components/unique/layout"
import SEO from "../components/unique/seo"

import { makeStyles } from "@material-ui/core/styles"
import { Box, Paper, Typography } from "@material-ui/core"
import { graphql } from "gatsby"

import FeaturedCard from "../components/card/FeaturedCard"
import ArticleCard from "../components/card/ArticleCard"
import HorrizontalScrollContainer from "../components/common/HorrizontalScrollContainer"

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(0, 0, 6, 6),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2),
    },
  },
}))

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
    featuredPosts.map((post, i) => (
      <FeaturedCard
        thumbnail={post.frontmatter.thumbnail}
        key={i}
        post={post}
      />
    ))

  const classes = useStyles()
  return (
    <Layout
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      location={location}
      title={siteTitle}
    >
      <SEO title="All posts" />

      <Box my={4}>
        <Paper elevation={6}>
          <Box pt={2} className={classes.margin}>
            <Typography color="primary" variant="h4">
              Featured
            </Typography>
          </Box>

          <Box pb={2}>
            <HorrizontalScrollContainer
              elements={generateFeaturedCardGroup()}
            />
          </Box>
        </Paper>
      </Box>

      <Box className={classes.margin} mt={6} mx={6}>
        <Box my={4}>
          <Typography color="primary" variant="h4">
            All Related Posts
          </Typography>
        </Box>

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
          thumbnail {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
