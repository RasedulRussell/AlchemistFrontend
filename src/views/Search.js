import { data } from "jquery";
import React from "react";

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

    render() {
        return (
            <div>
                <Container fluid>
                {
                this.state.newses.map(item => (
                    <Row className="justify-content-md-center">
                        <Col md={2}>
                            <img height="200" width="200" src={item.mediaurl}></img>
                        </Col>
                        <Col md={10}>
                            <Row>{item.title}</Row>
                            {/* <Row>{item.details}</Row> */}
                        </Col>
                    </Row>
                ))}
                </Container>
            </div>
        );
    }
}

export default Search