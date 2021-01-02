import React from "react"
import { Avatar, Typography, CardActions, Tooltip } from "@material-ui/core"
const CardFooter = ({ frontmatter }) => {
  let acr = ""
  if (frontmatter.author) acr = frontmatter.author.match(/\b(\w)/g).join("")
  return (
    <CardActions>
      <Tooltip title={frontmatter.author || "Anon"}>
        <Avatar>
          <Typography variant="subtitle2" style={{ color: "white" }}>
            {acr}
          </Typography>
        </Avatar>
      </Tooltip>
      <Typography variant="subtitle2" color="textSecondary">
        {frontmatter.date} | {frontmatter.category}
      </Typography>
    </CardActions>
  )
}

export default CardFooter
