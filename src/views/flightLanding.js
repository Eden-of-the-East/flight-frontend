import React from "react";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

import {
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Button
} from "reactstrap";

import ReactDatetime from "react-datetime";

import { useState } from "react";
import { getFlights } from "../services/flightService"

import LoginButton from "../components/Auth0LogInButton"

function FlightLanding(props) {
  const [departingCity, setDepartingCity] = useState();
  const [departingDate, setDepartingDate] = useState();
  const [flightNumber, setFlightNumber] = useState();
  const [flightData, setFlightData] = useState();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, []);

  async function handleSubmitClick() {
    console.log('Submitting: ' + departingCity + departingDate);
    setFlightData(await getFlights(departingCity, flightNumber, departingDate));
  }

  return (
    <>
      <Row>
        <LoginButton></LoginButton>
      </Row>
      <Row>
        <Col lg="4" sm="6">
          <FormGroup>
            <Input
              placeholder="Departing City (IATA 3-letter code)"
              type="text"
              onChange={e => setDepartingCity(e.target.value)}
            />
          </FormGroup>
        </Col>
        <Col lg="4" sm="6">
          <FormGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="ni ni-calendar-grid-58" />
                </InputGroupText>
              </InputGroupAddon>
              <ReactDatetime
                inputProps={{
                  placeholder: "Date Picker Here"
                }}
                timeFormat={false}
                onChange={(date) => setDepartingDate(new Date(date).toLocaleDateString('en-CA').replaceAll('/', '-'))}
              />
            </InputGroup>
          </FormGroup>
        </Col>
        <Col lg="4" sm="6">
          <Input
            placeholder="Full Flight Number (eg. AS422)"
            type="text"
            onChange={e => setFlightNumber(e.target.value)}
          />
        </Col>
        <Col lg="4" sm="6">
          <Button color="primary" type="button"
            onClick={handleSubmitClick}>
            Submit
          </Button>
        </Col>
      </Row>
      <Row>
        <h1>Flight Detail</h1>
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
    </>
  );
}

export default FlightLanding;