import React, { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { useForm, Controller } from "react-hook-form";
import { AddDetails } from "../services/Api";

const initialValues = {
  flightNumber: "",
  airline: "",
  destination: "",
  departureTime: "",
  terminal: "",
  gateNumber: "",
};
const Forms = () => {
  const [details, setdetails] = useState(initialValues);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ initialValues });

  const navigate = useNavigate();

  const timeHandler = (time) => {
    const departureTime = dayjs(time).format("h:mm A");
    setdetails({ ...details, departureTime: departureTime });
  };

  const formSubmit = (data) => {
    data.departureTime = details.departureTime;

    AddDetails(data);
    navigate("/flightDetails");
    // console.log("see", data);
  };

  return (
    <div style={{ marginTop: 90 }}>
      <h2 style={{ paddingBottom: 25 }}>Add Details</h2>
      <Form noValidate onSubmit={handleSubmit(formSubmit)}>
        <Row className="mb-3" style={{ marginLeft: 100, marginRight: 100 }}>
          <Form.Group as={Col} controlId="FlightNumber">
            <Form.Label>Flight Number</Form.Label>
            <Controller
              name="flightNumber"
              control={control}
              rules={{ required: true, maxLength: 10 }}
              render={({ field }) => (
                <Form.Control
                  isInvalid={errors.flightNumber}
                  style={{ height: 58 }}
                  {...field}
                  sname="flightNumber"
                  placeholder=" Flight Number"
                />
              )}
            />
            <Form.Control.Feedback type="invalid">
              {errors.flightNumber &&
                errors.flightNumber.type === "required" && (
                  <span>This is required</span>
                )}
              {errors.flightNumber &&
                errors.flightNumber.type === "maxLength" && (
                  <span>Must be 10 characters or less</span>
                )}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="Airline">
            <Form.Label>Airline</Form.Label>
            <Controller
              name="airline"
              control={control}
              rules={{ required: true, maxLength: 20 }}
              render={({ field }) => (
                <Form.Control
                  isInvalid={errors.airline}
                  style={{ height: 58 }}
                  {...field}
                  name="airline"
                  placeholder="Airline"
                />
              )}
            />
            <Form.Control.Feedback type="invalid">
              {errors.airline && errors.airline.type === "required" && (
                <span>This is required</span>
              )}
              {errors.airline && errors.airline.type === "maxLength" && (
                <span>Must be 20 characters or less</span>
              )}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3" style={{ marginLeft: 100, marginRight: 100 }}>
          <Form.Group as={Col} controlId="Destination">
            <Form.Label>Destination</Form.Label>

            <Controller
              name="destination"
              control={control}
              rules={{ required: true, maxLength: 50 }}
              render={({ field }) => (
                <Form.Control
                  isInvalid={errors.destination}
                  style={{ height: 58 }}
                  {...field}
                  name="destination"
                  placeholder="Destination"
                />
              )}
            />
            <Form.Control.Feedback type="invalid">
              {errors.destination && errors.destination.type === "required" && (
                <span>This is required</span>
              )}
              {errors.destination &&
                errors.destination.type === "maxLength" && (
                  <span>Must be 50 characters or less</span>
                )}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            {/* <Form.Label>Departure Time</Form.Label> */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                sx={{ padding: 0, margin: 0.8, marginLeft: 0 }}
                components={[
                  "TimePicker",
                  "MobileTimePicker",
                  "DesktopTimePicker",
                ]}
              >
                <DemoItem label="Departure Time">
                  <MobileTimePicker
                    dateFormat="h:mm aaaa"
                    onChange={timeHandler}
                    name="departureTime"
                  />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
          </Form.Group>
        </Row>
        <Row className="mb-3" style={{ marginLeft: 100, marginRight: 100 }}>
          <Form.Group as={Col} controlId="Terminal">
            <Form.Label>Terminal</Form.Label>
            <Controller
              name="terminal"
              control={control}
              rules={{ required: true, maxLength: 2 }}
              render={({ field }) => (
                <Form.Control
                  isInvalid={errors.terminal}
                  style={{ height: 58 }}
                  {...field}
                  name="terminal"
                  placeholder="Terminal"
                />
              )}
            />
            <Form.Control.Feedback type="invalid">
              {errors.terminal && errors.terminal.type === "required" && (
                <span>This is required</span>
              )}
              {errors.terminal && errors.terminal.type === "maxLength" && (
                <span>Must be 2 characters or less</span>
              )}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="GateNumber">
            <Form.Label>Gate Number</Form.Label>
            <Controller
              name="gateNumber"
              control={control}
              rules={{ required: true, maxLength: 2 }}
              render={({ field }) => (
                <Form.Control
                  isInvalid={errors.gateNumber}
                  style={{ height: 58 }}
                  {...field}
                  name="gateNumber"
                  placeholder="GateNumber"
                />
              )}
            />
            <Form.Control.Feedback type="invalid">
              {errors.gateNumber && errors.gateNumber.type === "required" && (
                <span>This is required</span>
              )}
              {errors.gateNumber && errors.gateNumber.type === "maxLength" && (
                <span>Must be 2 characters or less</span>
              )}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <div>
          <Button
            style={{ margin: 20, width: 75 }}
            variant="success"
            type="submit"
          >
            Save
          </Button>
          <Button style={{ margin: 20 }} variant="danger" type="submit">
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Forms;
