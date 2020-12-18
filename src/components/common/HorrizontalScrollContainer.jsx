import React from "react"
import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "nowrap",
    overflowX: "auto",
  },
})

const HorrizontalScrollContainer = ({ elements }) => {
  const classes = useStyles()
  return <div className={classes.root}>{elements}</div>
}

export default HorrizontalScrollContainer
