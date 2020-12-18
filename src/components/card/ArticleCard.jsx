import React from "react"
import {
  Panel,
  Container,
  Footer,
  Content,
  Avatar,
  Whisper,
  Tooltip,
  Row,
  Col,
} from "rsuite"
import { Link } from "gatsby"

const ArticleCard = ({ post }) => {
  const { frontmatter, fields } = post
  let acr = ""
  if (frontmatter.author) acr = frontmatter.author.match(/\b(\w)/g).join("")
  return (
    <Link style={styles.linkStyle} to={fields.slug} itemProp="url">
      <Panel bordered style={styles.card} header={frontmatter.title}>
        <Container>
          <Content>
            <p>{frontmatter.description}</p>
          </Content>

          <Footer style={{ marginTop: 20 }}>
            <Row
              style={{
                flexGrow: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Col style={{ textAlign: "left " }} xs={12}>
                <Whisper
                  placement="top"
                  speaker={<Tooltip>{frontmatter.author}</Tooltip>}
                >
                  <Avatar variant="circle" size="sm">
                    {acr}
                  </Avatar>
                </Whisper>{" "}
              </Col>
              <Col style={{ textAlign: "right" }} xs={12}>
                <span>
                  {frontmatter.date} | {frontmatter.category}
                </span>
              </Col>
            </Row>
          </Footer>
        </Container>
      </Panel>
    </Link>
  )
}

export default ArticleCard

const styles = {
  card: {
    marginTop: 30,
  },
  linkStyle: {
    textDecoration: "none",
    color: "inherit",
  },
}
