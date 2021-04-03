import React from 'react'

import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  CardColumns
} from "react-bootstrap";

class CategoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }
  componentDidMount() {
    fetch(this.props.url)
      .then(res => res.json())
      .then((data) => {
        this.setState({ contacts: data })
      })
      .catch(console.log)
  }

  render() {
    return (
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col md={1}>
          </Col>
          <Col md={7}>
            {
              this.state.contacts.map((contact) => (
                <Card key={contact.id}>
                  <Card.Img variant="top" src={contact.mediaurl} />
                  <Card.Body>
                    <Card.Title>
                      <h3>
                      <a href={contact.url} target="fred" style={{color: 'black'}}>
                        {contact.title}
                      </a>
                      </h3>
                    </Card.Title>
                    <Card.Text>
                    <a href={contact.url} target="fred" style={{color: 'black'}}>
                        {contact.details}
                    </a>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                  </Card.Footer>
                </Card>
              ))
            }
          </Col>
          <Col md={4}></Col>
        </Row>
      </Container>
    )
  }
}

export default CategoryPage