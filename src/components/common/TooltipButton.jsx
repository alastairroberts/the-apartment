import React from "react"
import { IconButton, Tooltip } from "@material-ui/core"

const TooltipButton = ({ icon, title }) => {
  return (
    <Tooltip title={title}>
      <IconButton aria-label={title} color="inherit">
        {icon}
      </IconButton>
    </Tooltip>
  )
}

export default TooltipButton
