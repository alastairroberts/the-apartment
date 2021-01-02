import React from "react"
import { Grid, Paper } from "@material-ui/core"
import NavigationBar from "../navigation/NavigationBar"
import SubNavBar from "../navigation/SubNavigationBar"

const Layout = ({ location, title, children, currentPage, setCurrentPage }) => {
  return (
    <Grid style={{ backgroundColor: "#fafafa" }}>
      <header>
        <Paper elevation={2}>
          <NavigationBar />
          {location.pathname === "/" && (
            <SubNavBar
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              location={location}
            />
          )}
        </Paper>
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
