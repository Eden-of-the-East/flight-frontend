import React from "react";

// core components
import Navbar from "../components/NavBar.js";

import "../assets/vendor/nucleo/css/nucleo.css";

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
import { upcertUserUsage } from "../services/UserService"

import LoginButton from "../components/Auth0LogInButton"
import { FlightTable } from "../components/FlightTable"
import { useAuth0 } from "@auth0/auth0-react"
import NavBar from "../components/NavBar.js";

function FlightLanding(props) {
  const [departingCity, setDepartingCity] = useState();
  const [departingDate, setDepartingDate] = useState();
  const [flightNumber, setFlightNumber] = useState();
  const [flightData, setFlightData] = useState();
  const [flightSearchError, setFlightSearchError] = useState();
  const [flightSearchInProgress, setFlightSearchInProgress] = useState();

  const { user, isAuthenticated, isLoading } = useAuth0();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, []);

  const main = useRef();

  async function handleSubmitClick() {
    console.log('Submitting: ' + departingCity + departingDate);
    var userWithinDailyLimit = await upcertUserUsage(user.email);
    if (!userWithinDailyLimit) setFlightSearchError("You have exceeded your daily limit to query flight info. Please try again tomorrow");
    else {
      setFlightData(null)
      setFlightSearchInProgress("Searching for flights...")
      var response = await getFlights(departingCity, flightNumber, departingDate);
      setFlightSearchInProgress(null)
      if (response == null) setFlightSearchError("Couldn't get flight information properly due to user input. Please check if your flight number, date and airport is correct");
      else {
        setFlightData(response);
        setFlightSearchError(null);
      }
    }
  }

  return (
    <>
      <NavBar />
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
                  <Col lg="8">
                    <h2 className="display-3 text-white">
                      airgeek is...{" "}
                      <span>made by aviation geek, for aviation geek</span>
                    </h2>
                    <p className="lead text-white">
                      <p>airgeek building all sorts of fun products for aviation geek to enjoy. </p>
                      <p>We are constantly building out new features for avaiation geeks to try. The best part? It's built by aviation geek!</p>
                      <p>Please don't hesitate to send me an email (click on the email icon) if you have new feature request, idea or comments on the existing features!</p>
                    </p>
                  </Col>
                </Row>
              </div>
            </Container>
          </section>
          <section className="section section-components">
            <Container className="pt-lg-4">
              {isAuthenticated && <>
                <h1 className="h2 font-weight-bold mt-sm mb-sm">Happy Airplane Spotting! </h1>
                <h1 className="h6 mb-md text-warning">NOTE: Due to limited budgets, we only allow 2 queries per user per day. Sorry for the inconvenience. </h1>
              </>}
              {!isAuthenticated && <>
                <h1 className="h2 font-weight-bold mt-sm mb-sm">The Ultimate Airplane Spotter</h1>
                <h1 className="h5 mb-md">Say you are taking an airplane soon and want to spend time at the airplane spotting some "fun" aircrafts? Use the service below to find them! </h1>
                <h1 className="h6 mb-md text-warning">We only provide the service to registered user for now</h1>
              </>}
              <p className="p mb-sm">For now, the criteria for a "fun" aircraft are: </p>
              <ul className="p mb-md">
                <li>The flight is departing 3 hours before your departure time, and 2 hours after your departure time </li>
                <li>The flight is arriving 3 hours before your departure time </li>
                <li>The flight is a wide-body aircraft (eg. Boeing 777, Airbus 359) </li>
                <li>...or The flight is a <a href="https://simpleflying.com/5-best-special-liveries/">special livery </a></li>
                <li>Excludes most freighters or private jets </li>
              </ul>
              {!isAuthenticated && <>
                <p className="p mb-sm">Sample Result Image: </p>
                <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("../assets/img/sample-flight-table.PNG")}
                    />
              
              <Row className="justify-content-center mt-md">
                <Col lg="5">
                 <LoginButton></LoginButton>
                </Col>
              </Row>
              </>}
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
                    {isAuthenticated &&
                      <Button color="primary" type="button"
                        onClick={handleSubmitClick}>
                        Submit
                      </Button>
                    }
                    {!isAuthenticated &&
                      <Button color="primary" type="button" disabled="true"
                        onClick={handleSubmitClick}>
                        Submit
                      </Button>
                    }
                  </FormGroup>
                </Col>
              </Row>
            </Container>
            <Container>
              <h1 className="h2 text-light mt-md mb-4">Flight Detail</h1>
              <Row className="row-grid align-items-center">
                {!flightData && !flightSearchError && !flightSearchInProgress &&
                  <Col lg="4" sm="8"><h4 className="text-light">Try search for flight!</h4></Col>}
                {flightSearchError &&
                  <Col lg="8" sm="12"><h4 className="text-warning">{flightSearchError}</h4></Col>}
                {flightData && !flightSearchError &&
                  <FlightTable data={flightData} flightNumber={flightNumber}></FlightTable>}
                {flightSearchInProgress && 
                 <Col lg="4" sm="8"><h4 className="text-light">Searching for flights...</h4></Col>}
              </Row>
            </Container>
          </section>
          <section className="section section-sm mb-md">
            <Container>
              <Row className="justify-content-center text-center mb-sm">
                <Col lg="10">
                  <h2 className="display-3">About Me</h2>
                  <p className="lead text-muted">
                    airgeek is currently a one-man crew. I am both an aviation geek and a software engineer at a tech company.
                    I currently live in Seattle, WA (SEA). I do airplane spotting and airplane photography for fun. I am also a railway geek.
                  </p>
                  <b className="lead text-bold">
                    Use the button below to shoot me an email if you want to join or have any comments
                  </b>
                </Col>
              </Row>
              <Row className="justify-content-center text-center mb-md">
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <div className="pt-4 text-center">
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="warning"
                          href="#pablo"
                          onClick={(e) => window.open('mailto:xyinblue@gmail.com?subject=Comments About Your Project')}
                        >
                          <i className="ni ni-email-83" />
                        </Button>
                      </div>
                    </div>
                  </div>
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