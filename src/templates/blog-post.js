import React from "react"
import { Link, graphql } from "gatsby"
import { Grid, Row, Col, IconButton, Icon, Nav } from "rsuite"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Grid>
        <Row>
          <Col>
            <h1>{post.frontmatter.title}</h1>
            <p>
              {post.frontmatter.author} | {post.frontmatter.date}
            </p>
            <hr />
          </Col>
        </Row>

        <Row>
          <Col>
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
          </Col>
        </Row>

        <hr />
        <Row>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  <IconButton icon={<Icon icon="left" />} placement="left">
                    {previous.frontmatter.title}
                  </IconButton>
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  <IconButton icon={<Icon icon="right" />} placement="right">
                    {next.frontmatter.title}
                  </IconButton>
                </Link>
              )}
            </li>
          </ul>
        </Row>
      </Grid>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        author
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
