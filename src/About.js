import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import { Chat, InfoCircle, EmojiSmile } from "react-bootstrap-icons";
import SocialLinks from "./components/sociallinks";

export default function Home() {
  return (
    <Container className="vh-100 px-0 align-items-center">
      <div className="d-flex d-row justify-content-center align-items-center">
        <Link
          to="/"
          className="font-weight-light m-3 text-decoration-none"
          style={{ color: "orange" }}
        >
          PATA~KEJA
        </Link>
        <Link
          to="/"
          className="font-weight-light  text-decoration-none"
          style={{ color: "yellow" }}
        >
          HOME
        </Link>
        <Link
          to="/about-us"
          className="font-weight-light m-3 text-decoration-none"
          style={{ color: "yellow" }}
        >
          ABOUT US
        </Link>
        <div className="me-auto" />
        <SocialLinks className="m-2 text-end" />
      </div>

      <Row className="justify-content-space-around p-3 text-center align-items-center">
        <Col sm>
          <div>
            <h2
              className="fw-lighter fs-2"
              style={{
                color: "grey",
              }}
            >
              About Us
            </h2>
          </div>
        </Col>
      </Row>
      <p
        className=" fw-light    "
        style={{ color: "orange", letterSpacing: "3px" }}
      >
        -PATA KEJA-
      </p>

      <p
        className=" fw-light mb-5"
        style={{ color: "white", letterSpacing: "3px" }}
      >
        &bull; Your Partner in Renting, Owning, And Settling &bull;
      </p>

      <Stack gap={3}>
        <Row className="justify-content-center align-items-center">
          <Col sm>
            <Chat color="orange" size={90} />
            <h6 className="mt-3 fw-lighter fs-4" style={{ color: "white" }}>
              Talk to Us
            </h6>
          </Col>
          &bull;
          <Col sm>
            <InfoCircle color="orange" size={100} />
            <h6 className="mt-3 fw-lighter fs-2" style={{ color: "white" }}>
              Receive Listings from Our Team
            </h6>
          </Col>
          &bull;
          <Col sm>
            <EmojiSmile color="orange" size={90} />
            <h6 className="mt-3 fw-lighter fs-4" style={{ color: "white" }}>
              Choose Your Home
            </h6>
          </Col>
        </Row>
        <h6 className="p-4 fw-light text-primary"  >
          Your Home Matters
        </h6>
        <div>
          <h2 style={{ fontWeight: 100, color: "yellow", fontSize: 13 }}>
            {"Copyright © "}{" "}
            <Link to="/" alt="" style={{ textDecoration: "none" }}>
              Patakeja{" "}
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}{" "}
          </h2>
        </div>
      </Stack>
    </Container>
  );
}
