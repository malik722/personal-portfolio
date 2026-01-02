import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Particle from "../Particle";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const whatsappMessage = `Hello, I'm ${formData.name} (Phone: ${formData.phone}). ${formData.message}`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // WhatsApp link with Indian number (91 is country code for India)
    const whatsappUrl = `https://wa.me/919019035576?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
    
    // Reset form
    setFormData({
      name: "",
      phone: "",
      message: "",
    });
  };

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row>
          <Col md={8} className="mx-auto">
            <h1 className="project-heading">
              Get In <strong className="purple">Touch</strong>
            </h1>
            <p style={{ color: "white", textAlign: "center", paddingBottom: "30px" }}>
              Feel free to reach out to me. Fill in the form below and I'll get back to you on WhatsApp.
            </p>
            
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label style={{ color: "white", fontSize: "1.1em", marginBottom: "10px" }}>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    color: "#000",
                    border: "2px solid rgba(200, 137, 230, 0.637)",
                    padding: "12px",
                    fontSize: "1em",
                  }}
                  onFocus={(e) => {
                    e.target.style.backgroundColor = "rgba(255, 255, 255, 1)";
                    e.target.style.borderColor = "#c084f5";
                  }}
                  onBlur={(e) => {
                    e.target.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
                    e.target.style.borderColor = "rgba(200, 137, 230, 0.637)";
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label style={{ color: "white", fontSize: "1.1em", marginBottom: "10px" }}>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter your phone number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    color: "#000",
                    border: "2px solid rgba(200, 137, 230, 0.637)",
                    padding: "12px",
                    fontSize: "1em",
                  }}
                  onFocus={(e) => {
                    e.target.style.backgroundColor = "rgba(255, 255, 255, 1)";
                    e.target.style.borderColor = "#c084f5";
                  }}
                  onBlur={(e) => {
                    e.target.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
                    e.target.style.borderColor = "rgba(200, 137, 230, 0.637)";
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label style={{ color: "white", fontSize: "1.1em", marginBottom: "10px" }}>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Enter your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    color: "#000",
                    border: "2px solid rgba(200, 137, 230, 0.637)",
                    padding: "12px",
                    fontSize: "1em",
                    resize: "vertical",
                  }}
                  onFocus={(e) => {
                    e.target.style.backgroundColor = "rgba(255, 255, 255, 1)";
                    e.target.style.borderColor = "#c084f5";
                  }}
                  onBlur={(e) => {
                    e.target.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
                    e.target.style.borderColor = "rgba(200, 137, 230, 0.637)";
                  }}
                />
              </Form.Group>

              <div style={{ textAlign: "center", paddingTop: "20px" }}>
                <Button
                  variant="primary"
                  type="submit"
                  style={{
                    maxWidth: "250px",
                    backgroundColor: "#c084f5",
                    borderColor: "#c084f5",
                    fontSize: "1.1em",
                    padding: "10px 30px",
                  }}
                >
                  Send via WhatsApp
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;

