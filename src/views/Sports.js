import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";

import CategoryPage from "./common/CategoryPage"

function Sports() {
  return (
    <>
    <CategoryPage title={"Home"} url={"http://localhost:8080/articles"}></CategoryPage>
    </>
  );
}

export default Sports;