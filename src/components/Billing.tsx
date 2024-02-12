import React from "react";
import Table from "react-bootstrap/Table";

function Billing() {
  const billingData = [
    {
      id: 1,
      name: "John Doe",
      phone: "123-456-7890",
      number: "INV-001",
      amount: "$100.00",
    },
    {
      id: 2,
      name: "Jane Doe",
      phone: "987-654-3210",
      number: "INV-002",
      amount: "$150.00",
    },
    {
      id: 3,
      name: "Alice Smith",
      phone: "555-123-4567",
      number: "INV-003",
      amount: "$75.50",
    },
  ];

  return (
    <>
      <div className="background-main billing-main"></div>
      <h2 className="text-center">Invoices</h2>
      <div className="shared-container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Invoice Number</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {billingData.map((bill, index) => (
              <tr key={index}>
                <td>{bill.id}</td>
                <td>{bill.name}</td>
                <td>{bill.phone}</td>
                <td>{bill.number}</td>
                <td>{bill.amount}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Billing;
