import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
// react-bootstrap components
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
    <CategoryPage title={"Home"} url={"http://localhost:8080/articles"}></CategoryPage>
    </>
  );
}

export default Entertainment;
