import React from "react"
import { Nav, Icon } from "rsuite"

const SubNavBar = ({ location, currentPage, setCurrentPage }) => {
  return (
    <Nav
      style={{
        display: "flex",
        justifyContent: "center",
      }}
      reversed
      appearance="subtle"
    >
      <Nav.Item
        onClick={() => {
          setCurrentPage("front-page")
        }}
        active={currentPage === "front-page"}
        icon={<Icon icon="home" />}
      >
        Front Page
      </Nav.Item>

      <Nav.Item
        onClick={() => {
          setCurrentPage("science-and-tech")
        }}
        active={currentPage === "science-and-tech"}
        icon={<Icon icon="flask" />}
      >
        Science and Tech
      </Nav.Item>
      <Nav.Item
        onClick={() => {
          setCurrentPage("politics")
        }}
        active={currentPage === "politics"}
        icon={<Icon icon="newspaper-o" />}
      >
        Politics
      </Nav.Item>
      <Nav.Item
        onClick={() => {
          setCurrentPage("opinion")
        }}
        active={currentPage === "opinion"}
        icon={<Icon icon="comment-o" />}
      >
        Opinion
      </Nav.Item>
      <Nav.Item
        onClick={() => {
          setCurrentPage("arts-and-community")
        }}
        active={currentPage === "arts-and-community"}
        icon={<Icon icon="paint-brush" />}
      >
        Arts and Community
      </Nav.Item>
      <Nav.Item
        onClick={() => {
          setCurrentPage("advice")
        }}
        active={currentPage === "advice"}
        icon={<Icon icon="group" />}
      >
        Advice
      </Nav.Item>
    </Nav>
  )
}

export default SubNavBar
