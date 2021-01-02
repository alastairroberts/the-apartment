import React from "react"
import { makeStyles } from "@material-ui/core/styles"
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
    height: 200,
  },
  linkStyle: {
    textDecoration: "none",
    color: "inherit",
  },
})

const FeaturedCard = ({ post }) => {
  const classes = useStyles()
  const { frontmatter, fields } = post

  return (
    <Link className={classes.linkStyle} to={fields.slug} itemProp="url">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://via.placeholder.com/300x200"
            title={frontmatter.title}
          />

          <CardContent>
            <Typography gutterBottom variant="h5">
              {frontmatter.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
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
