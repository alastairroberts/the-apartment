import React from "react"
import { Container, Header, Content, Footer } from "rsuite"
import NavigationBar from "./NavigationBar"

const Layout = ({ location, title, children, currentPage, setCurrentPage }) => {
  return (
    <Container>
      <Header>
        <NavigationBar />
      </Header>
      <Content>{children}</Content>
      <Footer>
        © {new Date().getFullYear()}, Nathan Jenkins-Boale
        {` `}
      </Footer>
    </Container>
  )
}

export default Layout
