import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import { AppBar, Toolbar, Typography } from "@material-ui/core"
import ContactSupportOutlinedIcon from "@material-ui/icons/ContactSupportOutlined"
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined"
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"

import { Link } from "gatsby"

import TooltipButton from "../common/TooltipButton"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    color: "grey",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: "inherit",
    textDecoration: "none",
  },
}))

const NavigationBarM = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar color="inherit" position="static">
        <Toolbar>
          <Typography variant="inherit" className={classes.title}>
            <Link className={classes.link} to="/">
              The Apartment
            </Link>
          </Typography>
          <Link className={classes.link} to="/contact">
            <TooltipButton
              title={"Contact"}
              icon={<ContactSupportOutlinedIcon />}
            />
          </Link>
          <Link className={classes.link} to="/about">
            <TooltipButton title="About" icon={<InfoOutlinedIcon />} />
          </Link>

          <TooltipButton title="Search" icon={<SearchOutlinedIcon />} />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavigationBarM
