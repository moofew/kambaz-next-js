import Link from "next/link";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardImg from "react-bootstrap/CardImg";
import CardBody from "react-bootstrap/CardBody";
import CardTitle from "react-bootstrap/CardTitle";
import CardText from "react-bootstrap/CardText";
import Button from "react-bootstrap/Button";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
      <div id="wd-dashboard-courses">
        {/* gx-4 keeps horizontal spacing, vertical spacing handled with marginTop/Bottom */}
        <Row className="gx-4">
          <Col xs="auto" className="wd-dashboard-course" style={{ width: 300, marginTop: 35, marginBottom: 35 }}>
            <Card>
              <Link href="/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/reactjs.jpg" width="100%" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS1234 React JS
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden">
                    Full Stack software developer
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col xs="auto" className="wd-dashboard-course" style={{ width: 300, marginTop: 35, marginBottom: 35 }}>
            <Card>
              <Link href="/Courses/1" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/black.jpg" width="100%" height={160} />
                <CardBody>
                  <CardTitle>CS1 Intro to Java</CardTitle>
                  <CardText>Java Developer</CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col xs="auto" className="wd-dashboard-course" style={{ width: 300, marginTop: 35, marginBottom: 35 }}>
            <Card>
              <Link href="/Courses/2" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/blue.png" width="100%" height={160} />
                <CardBody>
                  <CardTitle>CS2 Intro to Python</CardTitle>
                  <CardText>Python Developer</CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col xs="auto" className="wd-dashboard-course" style={{ width: 300, marginTop: 35, marginBottom: 35 }}>
            <Card>
              <Link href="/Courses/3" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/green.png" width="100%" height={160} />
                <CardBody>
                  <CardTitle>CS3 HTML/CSS</CardTitle>
                  <CardText>Full Stack Web Developer</CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col xs="auto" className="wd-dashboard-course" style={{ width: 300, marginTop: 35, marginBottom: 35 }}>
            <Card>
              <Link href="/Courses/4" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/orange.png" width="100%" height={160} />
                <CardBody>
                  <CardTitle>CS4 Kotlin</CardTitle>
                  <CardText>Kotlin Developer</CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col xs="auto" className="wd-dashboard-course" style={{ width: 300, marginTop: 35, marginBottom: 35 }}>
            <Card>
              <Link href="/Courses/5" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/purple.png" width="100%" height={160} />
                <CardBody>
                  <CardTitle>CS5 MERN Stack</CardTitle>
                  <CardText>Front End Engineer</CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col xs="auto" className="wd-dashboard-course" style={{ width: 300, marginTop: 35, marginBottom: 35 }}>
            <Card>
              <Link href="/Courses/6" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/red.png" width="100%" height={160} />
                <CardBody>
                  <CardTitle>CS6 C++</CardTitle>
                  <CardText>C++ Developer</CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col xs="auto" className="wd-dashboard-course" style={{ width: 300, marginTop: 35, marginBottom: 35 }}>
            <Card>
              <Link href="/Courses/7" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/yellow.jpg" width="100%" height={160} />
                <CardBody>
                  <CardTitle>CS7 OCaml</CardTitle>
                  <CardText>OCaml Developer</CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
