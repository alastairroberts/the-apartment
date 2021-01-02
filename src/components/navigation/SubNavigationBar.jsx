import React from "react"

import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"

const SubNavigationBar = ({ setCurrentPage }) => {
  const [value, setValue] = React.useState(0)
  const pagesByIndex = [
    "front-page",
    "science-and-tech",
    "politics",
    "opinion",
    "arts-and-community",
    "advice",
  ]

  const handleChange = (event, newValue) => {
    setCurrentPage(pagesByIndex[newValue])
    setValue(newValue)
  }

  return (
    <AppBar position="static" color="inherit" elevation={0}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable"
      >
        <Tab label="Front Page" />
        <Tab label="Science and Tech" />
        <Tab label="Politics" />
        <Tab label="Opinion" />
        <Tab label="Arts and Community" />
        <Tab label="Advice" />
      </Tabs>
    </AppBar>
  )
}

export default SubNavigationBar
