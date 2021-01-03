import React, { useState } from "react"
import { Grid, Paper } from "@material-ui/core"
import NavigationBar from "../navigation/NavigationBar"
import SubNavBar from "../navigation/SubNavigationBar"
import SearchDrawer from "../navigation/SeachDrawer"

const Layout = ({
  location,
  title,
  children,
  currentPage,
  setCurrentPage,
  allPosts,
}) => {
  const [searchDrawerIsOpen, setSearchDrawer] = useState(false)
  return (
    <Grid style={{ backgroundColor: "#fafafa" }}>
      <header>
        <Paper elevation={2}>
          <SearchDrawer
            setSearchDrawer={setSearchDrawer}
            searchDrawerIsOpen={searchDrawerIsOpen}
            allPosts={allPosts}
          />

          <NavigationBar setSearchDrawer={setSearchDrawer} />
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
