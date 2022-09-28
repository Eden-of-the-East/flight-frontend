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
  
function FlightLanding(props){
    const [departingCity, setDepartingCity] = useState();
    const [departingDate, setDepartingDate] = useState();

    React.useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
      }, []);
    
    function handleSubmitClick() {
      console.log('hello');
        console.log('Submitting: ' + departingCity + departingDate);
    }   
    
    return (
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
                          onChange={(date) => setDepartingDate(new Date(date).toLocaleDateString())}
                        />
                      </InputGroup>
                    </FormGroup>
                    </Col>
                    <Col lg="4" sm="6">
                    <Button color="primary" type="button"
                        onClick={handleSubmitClick}>
                        Submit
                    </Button>
                    </Col>
                    </Row>
    );
}

export default FlightLanding;