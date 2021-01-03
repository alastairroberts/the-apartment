import React, { useState, useEffect } from "react"
import { Drawer, Box } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"

import ArticleCard from "../card/ArticleCard"
import SearchInput from "../common/SearchInput"

const SearchDrawer = ({ searchDrawerIsOpen, setSearchDrawer }) => {
  const data = useStaticQuery(graphql`
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
            meta
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  const allPosts = data.allMarkdownRemark.nodes
  const [filteredPosts, setFilteredPosts] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const handleKeyPress = e => {
    e.preventDefault()
    const { value } = e.target
    setSearchTerm(value)
  }

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredPosts([])
      return
    }
    setFilteredPosts(
      allPosts.filter(post => {
        const metaTags = post.frontmatter.meta
        if (!metaTags) return false
        const value = metaTags.find(tag => {
          const lowerTag = tag.toLowerCase()
          const searchLower = searchTerm.toLowerCase()
          return lowerTag.toLowerCase().startsWith(searchLower)
        })

        return value ? true : false
      })
    )
  }, [searchTerm, allPosts])

  return (
    <>
      <Drawer
        onClose={() => setSearchDrawer(false)}
        anchor="top"
        open={searchDrawerIsOpen}
      >
        <SearchInput
          onChange={handleKeyPress}
          onCloseClick={() => setSearchDrawer(false)}
          searchTerm={searchTerm}
        />
        {filteredPosts.map((post, i) => {
          return (
            <Box key={i} mb={2}>
              <ArticleCard post={post} />
            </Box>
          )
        })}
      </Drawer>
    </>
  )
}

export default SearchDrawer
