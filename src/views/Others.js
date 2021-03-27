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

function Others() {
  return (
    <>
    <CategoryPage title={"Home"} url={"http://localhost:8080/articles/others"}></CategoryPage>
    </>
  );
}

export default Others;
