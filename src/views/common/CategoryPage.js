import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import TimeAgo from 'javascript-time-ago'
import ReactTimeAgo from 'react-time-ago'

import en from 'javascript-time-ago/locale/en'
TimeAgo.addDefaultLocale(en)

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
import { getSupportedCodeFixes } from 'typescript';

class CategoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        offset: 0,
        data: [],
        perPage: 10,
        currentPage: 0
    };
    this.handlePageClick = this
        .handlePageClick
        .bind(this);
}
getNewspaperName(newsPaperUrl) {
  if(newsPaperUrl.includes("samakal")) return "Samakal";
  if(newsPaperUrl.includes("prothomalo")) return "Prothomalo";
  if(newsPaperUrl.includes("kalerkantho")) return "Kalerkantho";
  if(newsPaperUrl.includes("bdnews24")) return "Bdnews24";
  if(newsPaperUrl.includes("thedailystar")) return "Thedailystar";
  if(newsPaperUrl.includes("samakal")) return "samakal";
  return "other";
}
receivedData() {
    axios
        .get(this.props.url)
        .then(res => {
            const data = res.data;
            const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
            const postData = slice.map(contact => <React.Fragment>
        <Container fluid>
        <Row className="justify-content-md-center">
          <Col md={1}>
          </Col>
          <Col md={7}>
            {
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
                    {contact.details.substring(0, 400) + "....."}
                </a>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Row>
                  <Col md={4}>{contact.category}</Col>
                  <Col md={4}>{this.getNewspaperName(contact.url)}</Col>
                  <Col md={7}>Published: <ReactTimeAgo date={contact.publishTime} locale="en-US"/></Col>
                </Row>
              </Card.Footer>
            </Card>
            }
          </Col>
          <Col md={4}></Col>
        </Row>
      </Container>
            </React.Fragment>)
            this.setState({
                pageCount: Math.ceil(data.length / this.state.perPage),
                postData
            })
        });
}
handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState({
        currentPage: selectedPage,
        offset: offset
    }, () => {
        this.receivedData()
    });

};

componentDidMount() {
    this.receivedData()
}

render() {
    return (
        <div>
            {this.state.postData}
            <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={this.state.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}/>
        </div>

    )
}
}

export default CategoryPage;