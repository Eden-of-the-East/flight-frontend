import React from "react";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import classnames from "classnames";

import {
  Card,
  CardBody,
  CardHeader,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Form,
  Button
} from "reactstrap";

import ReactDatetime from "react-datetime";

import { useState, useRef } from "react";
import { getFlights } from "../services/flightService"

import LoginButton from "../components/Auth0LogInButton"

function FlightLanding(props) {
  const [departingCity, setDepartingCity] = useState();
  const [departingDate, setDepartingDate] = useState();
  const [flightNumber, setFlightNumber] = useState();
  const [flightData, setFlightData] = useState();
  const [nameFocused, setNameFocused] = useState();
  const [emailFocused, setEmailFocused] = useState();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, []);

  const main = useRef();

  async function handleSubmitClick() {
    console.log('Submitting: ' + departingCity + departingDate);
    setFlightData(await getFlights(departingCity, flightNumber, departingDate));
  }

  return (
    <>
      <DemoNavbar />
      <main ref={main}>
        <div className="position-relative">

          <section className="section section-lg section-shaped pb-100">
            <div className="shape shape-style-1 shape-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="py-lg-md d-flex">
              <div className="col px-0">
                <Row>
                  <Col lg="6">
                    <h1 className="display-3 text-white">
                      A beautiful Design System{" "}
                      <span>completed with examples</span>
                    </h1>
                    <p className="lead text-white">
                      The design system comes with four pre-built pages to
                      help you get started faster. You can change the text and
                      images and you're go
                    </p>
                  </Col>
                </Row>
              </div>
            </Container>
          </section>
          <section className="section section-components">
            <Container className="pt-lg-4">
              <h1 className="h3 font-weight-bold mt-sm mb-sm">Sign In to Use The Service</h1>
              <h1 className="h5 mb-md">Due to the limited budget on the project, we provide the service only to registered users. </h1>
              <Row className="justify-content-center">
                <Col lg="5">
                  <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-white pb-5">
                      <div className="text-muted text-center mb-3">
                        <small>Sign up with</small>
                      </div>
                      <div className="text-center">
                        <Button
                          className="btn-neutral btn-icon mr-4"
                          color="default"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <span className="btn-inner--icon mr-1">
                            <img
                              alt="..."
                              src={
                                require("assets/img/icons/common/github.svg")
                                  .default
                              }
                            />
                          </span>
                          <span className="btn-inner--text">Github</span>
                        </Button>
                        <Button
                          className="btn-neutral btn-icon ml-1"
                          color="default"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <span className="btn-inner--icon mr-1">
                            <img
                              alt="..."
                              src={
                                require("assets/img/icons/common/google.svg")
                                  .default
                              }
                            />
                          </span>
                          <span className="btn-inner--text">Google</span>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                      <div className="text-center text-muted mb-4">
                        <small>Or sign up with credentials</small>
                      </div>
                      <Form role="form">
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-hat-3" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Name" type="text" />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Email" type="email" />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Password"
                              type="password"
                              autoComplete="off"
                            />
                          </InputGroup>
                        </FormGroup>
                        <div className="text-muted font-italic">
                          <small>
                            password strength:{" "}
                            <span className="text-success font-weight-700">
                              strong
                            </span>
                          </small>
                        </div>
                        <Row className="my-4">
                          <Col xs="12">
                            <div className="custom-control custom-control-alternative custom-checkbox">
                              <input
                                className="custom-control-input"
                                id="customCheckRegister"
                                type="checkbox"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheckRegister"
                              >
                                <span>
                                  I agree with the{" "}
                                  <a
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                  >
                                    Privacy Policy
                                  </a>
                                </span>
                              </label>
                            </div>
                          </Col>
                        </Row>
                        <div className="text-center">
                          <Button
                            className="mt-4"
                            color="primary"
                            type="button"
                          >
                            Create account
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                  <Row className="mt-3">
                    <Col xs="6">
                      <a
                        className="text-dark"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <small>Forgot password?</small>
                      </a>
                    </Col>
                    <Col className="text-right" xs="6">
                      <a
                        className="text-dark"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <small>Create new account</small>
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>

          </section>
          <section className="section-sm section-shaped pb-200">
            <div className="shape shape-style-1 bg-gradient-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container>
              <h2 className="text-light pb-md">Select the flight below</h2>
              <Row className="row-grid align-items-center pt-3">
              <Col lg="8" sm="6">
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-calendar-grid-58" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <ReactDatetime
                        closeOnSelect={true}
                        inputProps={{
                          placeholder: "Date Picker Here"
                        }}
                        timeFormat={false}
                        onChange={(date) => setDepartingDate(new Date(date).toLocaleDateString('en-CA').replaceAll('/', '-'))}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col lg="8" sm="8">
                  <FormGroup>
                    <Input
                      placeholder="Departing City (IATA 3-letter code)"
                      type="text"
                      onChange={e => setDepartingCity(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col lg="8" sm="8">
                  <FormGroup>
                    <Input
                      placeholder="Full Flight Number (eg. AS422)"
                      type="text"
                      onChange={e => setFlightNumber(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col lg="5" sm="8">
                  <FormGroup>
                    <Button color="primary" type="button"
                      onClick={handleSubmitClick}>
                      Submit
                    </Button>
                  </FormGroup>
                </Col>
              </Row>
            </Container>
          </section>
          <section>
            <Container>
            <h1 className="h2 text-success font-weight-bold mt-md mb-4">Flight Detail</h1>
            <Row className="row-grid align-items-center">
              {!flightData &&
                <Col lg="4" sm="8"><h4>Fetching result for the data...</h4></Col>}
              {flightData &&
                <tbody>
                  <tr>
                    <th>Seen</th>
                    <th>Flight Number</th>
                    <th>Gate</th>
                    <th>To/From</th>
                    <th>Aircraft</th>
                    <th>Direction</th>
                  </tr>
                  {flightData.map((item, i) => (
                    <tr key={i}>
                      <td><div className="custom-control custom-checkbox mb-3">
                        <input
                          className="custom-control-input"
                          id="customCheck1"
                          type="checkbox"
                        />
                      </div></td>
                      <td>{item.flightNumber}</td>
                      <td>{item.gate}</td>
                      <td>{item.origin}</td>
                      <td>{item.direction}</td>
                    </tr>
                  ))}
                </tbody>}
            </Row>
          </Container>
        </section>
        <section className="section section-sm bg-gradient-warning mb-md">
          <Container>
            <Row className="justify-content-center text-center mb-sm">
              <Col lg="8">
                <h2 className="display-3">About Me</h2>
                <p className="lead text-muted">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record maximum.
                </p>
              </Col>
            </Row>
            <Row className="justify-content-center text-center mb-md">
              <Col className="mb-5 mb-lg-0" lg="3" md="6">
                <div className="px-4">
                  <img
                    alt="..."
                    className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                    src={require("assets/img/theme/team-1-800x800.jpg")}
                    style={{ width: "200px" }}
                  />
                  <div className="pt-4 text-center">
                    <h5 className="title">
                      <span className="d-block mb-1">Ryan Tompson</span>
                      <small className="h6 text-muted">Web Developer</small>
                    </h5>
                    <div className="mt-3">
                      <Button
                        className="btn-icon-only rounded-circle"
                        color="warning"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fa fa-twitter" />
                      </Button>
                      <Button
                        className="btn-icon-only rounded-circle ml-1"
                        color="warning"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fa fa-facebook" />
                      </Button>
                      <Button
                        className="btn-icon-only rounded-circle ml-1"
                        color="warning"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fa fa-dribbble" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section section-lg pt-lg-0 section-contact-us">
          <Container>
            <Row className="justify-content-center mt--100">
              <Col lg="8">
                <Card className="bg-gradient-secondary shadow">
                  <CardBody className="p-lg-5">
                    <h4 className="mb-1">Want to work with us?</h4>
                    <p className="mt-0">
                      Your project is very important to us.
                    </p>
                    <FormGroup
                      className={classnames("mt-5", {
                        focused: nameFocused
                      })}
                    >
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-user-run" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Your name"
                          type="text"
                          onFocus={(e) =>
                            setNameFocused(true)
                          }
                          onBlur={(e) =>
                            setNameFocused(false)
                          }
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup
                      className={classnames({
                        focused: emailFocused
                      })}
                    >
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Email address"
                          type="email"
                          onFocus={(e) =>
                            setEmailFocused(true)
                          }
                          onBlur={(e) =>
                            setEmailFocused(false)
                          }
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className="mb-4">
                      <Input
                        className="form-control-alternative"
                        cols="80"
                        name="name"
                        placeholder="Type a message..."
                        rows="4"
                        type="textarea"
                      />
                    </FormGroup>
                    <div>
                      <Button
                        block
                        className="btn-round"
                        color="default"
                        size="lg"
                        type="button"
                      >
                        Send Message
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </main>
    </>
  );
}

export default FlightLanding;