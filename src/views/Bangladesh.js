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

import CategoryPage from "./common/CategoryPage"

function Bangladesh() {
  return (
    <>
    <CategoryPage title={"Home"} url={"http://localhost:8080/articles/bangladesh"}></CategoryPage>
    </>
  );
}

export default Bangladesh;
