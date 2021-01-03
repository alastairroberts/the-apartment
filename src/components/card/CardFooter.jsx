import React from "react"
import { Avatar, Typography, CardActions, Tooltip } from "@material-ui/core"
import { useTheme } from "@material-ui/core/styles"
const CardFooter = ({ frontmatter }) => {
  const theme = useTheme()
  let acr = ""
  if (frontmatter.author) acr = frontmatter.author.match(/\b(\w)/g).join("")
  return (
    <CardActions>
      <Tooltip title={frontmatter.author || "Anon"}>
        <Avatar style={{ backgroundColor: theme.palette.secondary.main }}>
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
