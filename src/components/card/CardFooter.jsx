import React from "react"
import { Avatar, Typography, CardActions } from "@material-ui/core"
const CardFooter = ({ frontmatter, acr }) => {
  return (
    <CardActions>
      <Avatar rounded>
        <Typography variant="subtitle2" style={{ color: "white" }}>
          {acr}
        </Typography>
      </Avatar>
      <Typography variant="subtitle2" color="textSecondary">
        {frontmatter.date} | {frontmatter.category}
      </Typography>
    </CardActions>
  )
}

export default CardFooter
