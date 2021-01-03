import React from "react"
import { IconButton, Tooltip } from "@material-ui/core"

const TooltipButton = ({ icon, title, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton onClick={onClick} aria-label={title} color="inherit">
        {icon}
      </IconButton>
    </Tooltip>
  )
}

export default TooltipButton
