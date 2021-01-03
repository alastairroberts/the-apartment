import React from "react"

const styles = {
  root: {
    display: "flex",
    flexWrap: "nowrap",
    overflowX: "auto",
  },
}

const HorrizontalScrollContainer = ({ elements }) => {
  return <div style={styles.root}>{elements}</div>
}

export default HorrizontalScrollContainer
