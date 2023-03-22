import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { getDetails } from "../services/Api";

const FlightDetails = () => {
  const [details, setdetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDetails();
      setdetails(data.data.data);
      //   console.log("get", data);
    };
    fetchData();
  }, []);
  return (
    <div style={{ margin: 15, marginTop: 65 }}>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Flight Number</th>
            <th>Airline</th>
            <th>Destination</th>
            <th>Departure Time</th>
            <th>Gate Number</th>
            <th>Terminal</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{detail.flightNumber}</td>
              <td>{detail.airline}</td>
              <td>{detail.destination}</td>
              <td>{detail.departureTime}</td>
              <td>{detail.gateNumber}</td>
              <td>{detail.terminal}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default FlightDetails;
