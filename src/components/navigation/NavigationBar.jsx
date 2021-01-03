import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import { AppBar, Toolbar, Typography } from "@material-ui/core"
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined"

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

const NavigationBar = ({ setSearchDrawer }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar color="primary" position="static">
        <Toolbar>
          <Typography variant="inherit" className={classes.title}>
            <Link className={classes.link} to="/">
              The Apartment
            </Link>
          </Typography>
          {/* <Link className={classes.link} to="/contact">
            <TooltipButton
              title={"Contact"}
              icon={<ContactSupportOutlinedIcon />}
            />
          </Link>
          <Link className={classes.link} to="/about">
            <TooltipButton title="About" icon={<InfoOutlinedIcon />} />
          </Link> */}

          <TooltipButton
            onClick={() => setSearchDrawer(true)}
            title="Search"
            icon={<SearchOutlinedIcon />}
          />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavigationBar
