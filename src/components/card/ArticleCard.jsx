import React from "react"
import { Paper, Grid, Typography, Divider } from "@material-ui/core"

import CardFooter from "./CardFooter"

import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  linkStyle: {
    textDecoration: "none",
    color: "inherit",
  },
})

const ArticleCard = ({ post }) => {
  const classes = useStyles()
  const { frontmatter, fields } = post

  return (
    <Link className={classes.linkStyle} to={fields.slug} itemProp="url">
      <Paper variant="outlined">
        <Grid container direction="row">
          <Grid item>
            <img
              src="https://via.placeholder.com/250x250"
              alt={frontmatter.title}
            ></img>
          </Grid>

          <Grid container item xs={12} sm style={{ margin: 10 }}>
            <Grid item xs container direction="column" spacing={2}>
              <Grid xs item>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item>
                    <Typography variant="h5">{frontmatter.title}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      component="p"
                    >
                      {frontmatter.description}
                    </Typography>
                  </Grid>
                  <Divider />
                  <Grid item>
                    <Typography variant="body2" component="p">
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
