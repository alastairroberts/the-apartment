import React from "react"

import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"

import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined"
import PaletteOutlinedIcon from "@material-ui/icons/PaletteOutlined"
import BallotOutlinedIcon from "@material-ui/icons/BallotOutlined"
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined"
import NaturePeopleOutlinedIcon from "@material-ui/icons/NaturePeopleOutlined"
import ForumOutlinedIcon from "@material-ui/icons/ForumOutlined"

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
        <Tab icon={<HomeOutlinedIcon />} label="Front Page" />
        <Tab icon={<NaturePeopleOutlinedIcon />} label="Science and Tech" />
        <Tab icon={<BallotOutlinedIcon />} label="Politics" />
        <Tab icon={<ForumOutlinedIcon />} label="Opinion" />
        <Tab icon={<PaletteOutlinedIcon />} label="Arts and Community" />
        <Tab icon={<GroupOutlinedIcon />} label="Advice" />
      </Tabs>
    </AppBar>
  )
}

export default SubNavigationBar
