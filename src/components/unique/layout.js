import React, { useState } from "react"
import { Grid, Paper } from "@material-ui/core"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"

import NavigationBar from "../navigation/NavigationBar"
import SubNavBar from "../navigation/SubNavigationBar"
import SearchDrawer from "../navigation/SeachDrawer"
const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#3c096c",
    },
    secondary: {
      main: "#ef7a85",
    },
    info: {
      main: "#f6edff",
    },
  },
  typography: {
    h4: {
      fontFamily: "Montserrat",
      fontWeight: 800,
    },
    h5: {
      fontFamily: "Montserrat",
      fontWeight: 400,
    },
  },
})
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
    <ThemeProvider theme={theme}>
      <Grid>
        <header style={{ margin: 0 }}>
          <SearchDrawer
            setSearchDrawer={setSearchDrawer}
            searchDrawerIsOpen={searchDrawerIsOpen}
            allPosts={allPosts}
          />
          <Paper elevation={2}>
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
    </ThemeProvider>
  )
}

export default Layout
