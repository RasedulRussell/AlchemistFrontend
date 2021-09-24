
import React, { Component, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Container, Nav, Dropdown, Button } from "react-bootstrap";
import Marquee from "react-fast-marquee";


import routes from "routes.js";
import axios from "axios";
function Header() {

  const [newses, setData] = useState(undefined);

  const getData = async () => {
    const response = await axios.get("http://localhost:8080/marque")
    const data = await response.data;
    setData(data);
  }
  useEffect(() => {
    getData();
  }, []);

  const location = useLocation();
  const [searchText, setValue] = useState('ddd');

  const mobileSidebarToggle = (e) => {
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function () {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  };


  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  const handleChange = (value) => {
    window.location.href = '/news/search/'+searchText;
  }
 
  useEffect(() => {

      var searchBox = document.getElementById('search_input_box');
      searchBox.onchange= (e) => {
        setValue(e.target.value)
      }
  }, []) // this diff is necessary
  
  const styleObj = {
    
}

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
          <Button
            variant="dark"
            className="d-lg-none btn-fill d-flex justify-content-center align-items-center rounded-circle p-2"
            onClick={mobileSidebarToggle}
          >
            <i className="fas fa-ellipsis-v"></i>
          </Button>
          <Navbar.Brand
            href="#home"
            onClick={(e) => e.preventDefault()}
            className="mr-2"
          >
            {getBrandText()}
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2">
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav mr-auto" navbar>
            <Nav.Item>
                <Marquee style={{width:'560px', height:'50px', whiteSpace:'nowrap',}} velocity={10000} minScale={0.7} resetAfterTries={200} scatterRandomly>
                  {
                    newses!=undefined ? newses.map(item=> {
                      return <a href={item.url} target="fred" style={{color: 'black'}}>
                          <p style={styleObj}>
                            {item.title}
                          </p>
                       </a>
                      
                    }): ""
                  }
                </Marquee>
              
            </Nav.Item>
            
            <Nav.Item>
              <Nav.Link
                className="m-0"
                href="#pablo"
                onClick={(e) => e.preventDefault()}>

                <input type="text" class="form-control" id="search_input_box" aria-label="Default" aria-describedby="inputGroup-sizing-default" onKeyDown={(e) => e.stopPropagation()}/>

                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-default">
                    <i className="nc-icon nc-zoom-split" onClick={handleChange}></i></span>
                </div>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
