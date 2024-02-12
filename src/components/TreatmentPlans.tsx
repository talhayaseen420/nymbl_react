import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function TreatmentPlans() {
  const [patientName, setPatientName] = useState("");
  const [treatmentDetails, setTreatmentDetails] = useState("");
  const [treatmentDate, setTreatmentDate] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log("Treatment Plan Submitted:", {
      patientName,
      treatmentDetails,
      treatmentDate,
    });

    setPatientName("");
    setTreatmentDetails("");
    setTreatmentDate("");
  };

  return (
    <>
      <div className="background-main plans-main"></div>
      <div className="d-flex justify-content-between shared-container">
        <div className="left-section">
          <h2>Treatment Plans</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="patientName">
              <Form.Label>Patient Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter patient name"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="treatmentDetails">
              <Form.Label>Treatment Details:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter treatment details"
                value={treatmentDetails}
                onChange={(e) => setTreatmentDetails(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="treatmentDate">
              <Form.Label>Treatment Date:</Form.Label>
              <Form.Control
                type="date"
                value={treatmentDate}
                onChange={(e) => setTreatmentDate(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" className="btn-primary" type="submit">
              Submit Treatment Plan
            </Button>
          </Form>
        </div>
        <div className="right-section">
          <div className="image"></div>
        </div>
      </div>
    </>
  );
}

export default TreatmentPlans;
