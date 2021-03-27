import React from "react";
import NotificationAlert from "react-notification-alert";

import {
  Alert,
  Badge,
  Button,
  Card,
  Modal,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";

import CategoryPage from "./common/CategoryPage"

function Entertainment() {
  return (
    <>
    <CategoryPage title={"Home"} url={"http://localhost:8080/articles/entertainment"}></CategoryPage>
    </>
  );
}

export default Entertainment;
