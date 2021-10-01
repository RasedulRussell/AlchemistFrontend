import { data } from "jquery";
import React from "react";
import TimeAgo from 'javascript-time-ago'
import ReactTimeAgo from 'react-time-ago'

import en from 'javascript-time-ago/locale/en'
TimeAgo.addDefaultLocale(en)
// react-bootstrap components
import {
    Badge,
    Button,
    Card,
    Navbar,
    Nav,
    Table,
    Container,
    Row,
    Col,
} from "react-bootstrap";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.query = props.match.params.query;
        console.log(props)
        this.state = {
            url: "http://localhost:8080/news/search/" + props.match.params.query,
            newses: []
        };
    }
    componentDidMount() {
        console.log(this.state.url)
        fetch(this.state.url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        newses: result
                    });
                },
            )
    }
    getNewspaperName(newsPaperUrl) {
        if(newsPaperUrl.includes("samakal")) return "Samakal";
  if(newsPaperUrl.includes("prothomalo")) return "Prothomalo";
  if(newsPaperUrl.includes("kalerkantho")) return "Kalerkantho";
  if(newsPaperUrl.includes("bdnews24")) return "Bdnews24";
  if(newsPaperUrl.includes("thedailystar")) return "Thedailystar";
  if(newsPaperUrl.includes("samakal")) return "Samakal";
  if(newsPaperUrl.includes("ittefaq")) return "Ittefaq";
  if(newsPaperUrl.includes("jugantor")) return "Jugantor";
  if(newsPaperUrl.includes("nayadiganta")) return "Nayadiganta";
        return "other";
    }
    render() {
        return (
            <div>
                <Container fluid>
                    {
                        this.state.newses.map(item => (
                            <a href={item.url} target="fred" style={{color: 'black'}}>
                            <Row  className="justify-content-md-center" style={{marginTop:'15px', marginBottom:'15px'}}>
                                <Col md={2}>
                                    {item.mediaurl != null? <img height="100" width="100"  src={item.mediaurl} /> : ''}
                                </Col>
                                <Col md={10}  style={{marginLeft: '-50px'}}>
                                    <div>{item.title}</div>
                                    <p>{item.details.substring(0, 200) + "..."}</p>
                                    <Row>
                                        <Col md={4}>{item.category}</Col>
                                        <Col md={4}><p>Published: <ReactTimeAgo date={item.publishTime} locale="en-US"/></p></Col>
                                        <Col md={4}>{this.getNewspaperName(item.url)}</Col>
                                    </Row>
                                </Col>
                            </Row>
                            </a>
                        ))}
                </Container>
            </div>
        );
    }
}

export default Search