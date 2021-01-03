import React from "react"
import { Paper, Grid, Typography, Divider } from "@material-ui/core"
import Img from "gatsby-image"
import CardFooter from "./CardFooter"

import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  linkStyle: {
    textDecoration: "none",
    color: "inherit",
  },
  imageStyle: {
    height: "100%",
  },
}))

const ArticleCard = ({ post }) => {
  const classes = useStyles()
  const { frontmatter, fields } = post

  return (
    <Link className={classes.linkStyle} to={fields.slug} itemProp="url">
      <Paper variant="outlined">
        <Grid container justify="center" direction="row">
          <Grid item md={4} xs={12}>
            {frontmatter.thumbnail && (
              <Img
                className={classes.imageStyle}
                fluid={{
                  ...frontmatter.thumbnail.childImageSharp.fluid,
                  aspectRatio: 16 / 9,
                }}
              />
            )}
          </Grid>

          <Grid container item xs={12} md style={{ margin: 10 }}>
            <Grid item xs container direction="column" spacing={2}>
              <Grid xs item>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item>
                    <Typography variant="h5">{frontmatter.title}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body"
                      color="textSecondary"
                      component="h6"
                    >
                      {frontmatter.description}
                    </Typography>
                  </Grid>
                  <Divider />
                  <Grid item>
                    <Typography variant="body" component="p">
                      {post.excerpt}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <CardFooter frontmatter={frontmatter} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Link>
  )
}

export default ArticleCard
