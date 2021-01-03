import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Img from "gatsby-image"

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core"
import { Link } from "gatsby"

import CardFooter from "./CardFooter"

const useStyles = makeStyles({
  root: {
    flex: "0 0 auto",
    width: 300,
    margin: 5,
  },
  media: {
    height: 300,
  },
  linkStyle: {
    textDecoration: "none",
    color: "inherit",
  },
  splash: {
    width: "100%",
    height: "5px",
  },
})

const FeaturedCard = ({ post }) => {
  const theme = useTheme()
  const classes = useStyles()
  const { frontmatter, fields } = post

  return (
    <Link className={classes.linkStyle} to={fields.slug} itemProp="url">
      <Card className={classes.root}>
        <CardActionArea>
          {frontmatter.thumbnail && (
            <CardMedia
              image="https://via.placeholder.com/350"
              className={classes.media}
              title={frontmatter.title}
            >
              {frontmatter.thumbnail && (
                <Img fixed={frontmatter.thumbnail.childImageSharp.fixed} />
              )}
            </CardMedia>
          )}

          <div
            style={{ backgroundColor: theme.palette.primary.main }}
            className={classes.splash}
          ></div>
          <CardContent>
            <Typography gutterBottom variant="h5">
              {frontmatter.title}
            </Typography>
            <Typography variant="body" color="textSecondary" component="p">
              {frontmatter.description}
            </Typography>
          </CardContent>
          <CardFooter frontmatter={frontmatter} />
        </CardActionArea>
      </Card>
    </Link>
  )
}

export default FeaturedCard
