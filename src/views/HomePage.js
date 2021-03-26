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
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

import CategoryPage from "./common/CategoryPage"

function HomePage() {
  return (
    <>
      <CategoryPage title={"Home"} url={"http://localhost:8080/articles"}></CategoryPage>
    </>
  );
}

export default HomePage;
