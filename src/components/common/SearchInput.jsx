import React from "react"
import { Paper, IconButton, InputBase } from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  input: {
    flex: 1,
  },
})

const SearchInput = ({ onCloseClick, onChange, searchTerm }) => {
  const classes = useStyles()
  return (
    <Paper
      onSubmit={e => {
        e.preventDefault()
      }}
      component="form"
      className={classes.root}
    >
      <IconButton className={classes.iconButton} aria-label="menu">
        <SearchIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Search Site"
        inputProps={{ "aria-label": "search site" }}
        onChange={onChange}
        value={searchTerm}
      />
      <IconButton
        onClick={onCloseClick}
        className={classes.iconButton}
        aria-label="menu"
      >
        <CancelOutlinedIcon />
      </IconButton>
    </Paper>
  )
}

export default SearchInput
