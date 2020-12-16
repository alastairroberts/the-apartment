import React from "react"
import { Drawer, Button, Input } from "rsuite"
const Search = ({ showSearch, setShowSearch }) => {
  return (
    <div>
      <Drawer
        backdrop
        size="xs"
        show={showSearch}
        onHide={() => setShowSearch(false)}
      >
        <Drawer.Header>
          <Drawer.Title>Search</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <Input placeholder="Search" />
        </Drawer.Body>
        <Drawer.Footer>
          <Button onClick={() => setShowSearch(false)} appearance="primary">
            Confirm
          </Button>
          <Button onClick={() => setShowSearch(false)} appearance="subtle">
            Cancel
          </Button>
        </Drawer.Footer>
      </Drawer>
    </div>
  )
}

export default Search
