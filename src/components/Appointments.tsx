import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import db from "../firebase";
import { Timestamp, addDoc, collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function Appointments() {
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "appointments"),
      (snapshot) => {
        const appointmentData: any = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAppointmentsData(appointmentData);
      }
    );

    return () => unsubscribe();
  }, []);

  const [AppointmentsData, setAppointmentsData] = useState([]);
  const [newAppointment, setNewAppointment] = useState({
    patientName: "",
    appointmentDate: "",
    appointmentTime: "",
    appointmentFor: "",
    email: "",
    phone: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const handleChange = (e: any) => {
    setNewAppointment({
      ...newAppointment,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!newAppointment.patientName || !newAppointment.appointmentDate) {
      alert("Please fill in all fields.");
      return;
    }

    const collectionRef = collection(db, "appointments");
    const appointmentDateTime = new Date(
      `${newAppointment.appointmentDate}T${newAppointment.appointmentTime}`
    );

    const payload = {
      patientName: newAppointment.patientName,
      appointmentFor: newAppointment.appointmentFor,
      datetime: Timestamp.fromDate(appointmentDateTime),
      email: newAppointment.email,
      phone: newAppointment.phone,
    };

    try {
      await addDoc(collectionRef, payload);
      setShowLoader(true);

      setNewAppointment({
        patientName: "",
        appointmentDate: "",
        appointmentTime: "",
        appointmentFor: "",
        email: "",
        phone: "",
      });

      setTimeout(() => {
        setShowLoader(false);
        setShowSuccess(true);
      }, 5000);

      setTimeout(() => {
        setShowSuccess(false);
      }, 10000);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const cancelAppointment = async (index:any) => {
    try {
      await deleteDoc(doc(db, 'appointments', index));
      console.log(`Appointment with ID ${index} canceled`);
    } catch (error) {
      console.error('Error canceling appointment: ', error);
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="background-main appointments-main"></div>
        <div className="shared-container">
          <Tabs
            defaultActiveKey="form"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="form" title="Appointments form">
              <div className="d-flex justify-content-between">
                <div className="left-section">
                  <h2>Appointments</h2>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3 d-flex" controlId="patientName">
                      <Form.Label className="form-first">
                        Patient Name:
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className="form-second"
                        placeholder="Enter patient name"
                        name="patientName"
                        value={newAppointment.patientName}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group
                      className="mb-3 d-flex"
                      controlId="appointmentFor"
                    >
                      <Form.Label className="form-first">
                        Appointment For:
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className="form-second"
                        placeholder="Enter appointment for"
                        name="appointmentFor"
                        value={newAppointment.appointmentFor}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group
                      className="mb-3 d-flex"
                      controlId="appointmentDate"
                    >
                      <Form.Label className="form-first">
                        Appointment Date:
                      </Form.Label>
                      <Form.Control
                        type="date"
                        className="form-second"
                        name="appointmentDate"
                        value={newAppointment.appointmentDate}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group
                      className="mb-3 d-flex"
                      controlId="appointmentTime"
                    >
                      <Form.Label className="form-first">
                        Appointment Time:
                      </Form.Label>
                      <Form.Control
                        type="time"
                        className="form-second"
                        name="appointmentTime"
                        value={newAppointment.appointmentTime}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex" controlId="email">
                      <Form.Label className="form-first">Email:</Form.Label>
                      <Form.Control
                        type="email"
                        className="form-second"
                        placeholder="Enter email"
                        name="email"
                        value={newAppointment.email}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex" controlId="phone">
                      <Form.Label className="form-first">Phone:</Form.Label>
                      <Form.Control
                        type="tel"
                        className="form-second"
                        placeholder="Enter phone number"
                        name="phone"
                        value={newAppointment.phone}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Button
                      variant="primary"
                      className="btn-primary"
                      type="submit"
                    >
                      Schedule Appointment
                    </Button>
                  </Form>

                  {showLoader && (
                    <div className="overlay">
                      <img src="./Spinner-1s-200px.svg" alt="Loading..." />
                    </div>
                  )}

                  {showSuccess && (
                    <div className="alert alert-success mt-3" role="alert">
                      Appointment successfully scheduled!
                    </div>
                  )}
                </div>
                <div className="right-section">
                  <div className="image"></div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="table" title="Show Appointments">
              <table className="table">
                <thead>
                  <tr>
                    <th>Patient Name</th>
                    <th>Appointment For</th>
                    <th>Date</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {AppointmentsData.map((appointment: any) => (
                    <tr key={appointment.id}>
                      <td>{appointment.patientName}</td>
                      <td>{appointment.appointmentFor}</td>
                      <td>
                        {appointment.datetime
                          ?.toDate()
                          ?.toLocaleString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric",
                            timeZoneName: "short",
                          }) ?? "N/A"}
                      </td>
                      <td>{appointment.email}</td>
                      <td>{appointment.phone}</td>
                      <td>
                        <button
                          onClick={() => cancelAppointment(appointment.id)}
                          className="btn btn-danger"
                        >
                          Cancel
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default Appointments;
