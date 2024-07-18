import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Form } from 'react-bootstrap';
import TransactionTable from './TransactionTable';

const CustomerTable = () => {
  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/customers').then((response) => {
      setCustomers(response.data);
    });
  }, []);

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container table-container">
      <Form.Control
        type="text"
        placeholder="Search by customer name"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map((customer) => (
            <TransactionTable key={customer.id} customer={customer} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CustomerTable;