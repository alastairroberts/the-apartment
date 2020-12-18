import React from "react"
import { Grid } from "@material-ui/core"
import NavigationBar from "../navigation/NavigationBar"

const Layout = ({ location, title, children, currentPage, setCurrentPage }) => {
  return (
    <Grid style={{ backgroundColor: "#fafafa" }}>
      <header>
        <NavigationBar />
      </header>
      {children}
      <footer>
        © {new Date().getFullYear()}, Nathan Jenkins-Boale
        {` `}
      </footer>
    </Grid>
  )
}

export default Layout
