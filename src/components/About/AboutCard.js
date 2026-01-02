import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Malik Rihan</span> from{" "}
            <span className="purple">India</span>.
            <br />
            <br />
            I am an aspiring Web Developer with a strong foundation in HTML, CSS, JavaScript, Java, Python, and SQL. I enjoy building responsive, user-friendly web applications and have worked on projects such as a Restaurant Booking System and other real-world problem-solving applications.
            <br />
            <br />
            I am continuously improving my skills with the goal of becoming a full-stack developer, and I am passionate about learning new technologies and contributing to impactful software solutions.
            <br />
            <br />
            Outside of coding, I enjoy activities that keep me motivated and creative:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Learning new technologies 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Working on personal and academic projects 🚀
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring problem-solving and logical challenges 🧠
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Learning to code is learning to think."
          </p>
          <footer className="blockquote-footer">Malik Rihan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
