import React from "react"
import Layout from "../components/unique/layout"

import { Box, Typography } from "@material-ui/core"

const Contact = ({ location }) => {
  return (
    <Layout location={location}>
      <Box mx={6}>
        <Typography variant="h4">Want to Contribute?</Typography>
        <Typography variant="body">
          Drop us an email and we will get back to you
        </Typography>
      </Box>
    </Layout>
  )
}

export default Contact
