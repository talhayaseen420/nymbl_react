import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function PatientHistory() {
  const [patientData, setPatientData] = useState([]);
  const [newPatient, setNewPatient] = useState({
    name: "",
    id: "",
  });

  const handleInputChange = (e: any) => {
    setNewPatient({
      ...newPatient,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!newPatient.name || !newPatient.id) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("your-api-endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPatient),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch patient history");
      }

      const patientHistory = await response.json();

      setPatientData(patientHistory);
    } catch (error: any) {
      console.error("Error fetching patient history:", error.message);
    }
  };

  return (
    <>
      <div className="background-main history-main"></div>
      <h2 className="text-center">Patient History</h2>
      <div className="d-flex justify-content-between shared-container">
        <div className="left-section">
          <p className="text-center">Enter Patient info to get data</p>
          <div className="">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="d-flex" controlId="name">
                <Form.Label className="form-first">Patient Name</Form.Label>
                <Form.Control
                  className="form-second"
                  type="text"
                  name="name"
                  value={newPatient.name}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="d-flex" controlId="id">
                <Form.Label className="form-first">Patient ID</Form.Label>
                <Form.Control
                  className="form-second"
                  type="text"
                  name="id"
                  value={newPatient.id}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Button variant="primary" className="btn-primary" type="submit">
                Submit
              </Button>
            </Form>

            {patientData.length > 0 && (
              <Table striped bordered hover>
                <thead>
                  <tr>
                    {/* Define table headers based on your API response */}
                    <th>Field1</th>
                    <th>Field2</th>
                    {/* Add more fields as needed */}
                  </tr>
                </thead>
                <tbody>
                  {patientData.map((data: any, index) => (
                    <tr key={index}>
                      <td>{data.field1}</td>
                      <td>{data.field2}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </div>
        </div>
        <div className="right-section">
          <div className="history-image"></div>
        </div>
      </div>
    </>
  );
}

export default PatientHistory;
