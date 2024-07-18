import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Collapse } from 'react-bootstrap';
import Chart from './Chart';
import { Table } from 'react-bootstrap';

const TransactionTable = ({ customer }) => {
  const [transactions, setTransactions] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:5000/transactions?customer_id=${customer.id}`)
      .then((response) => {
        setTransactions(response.data);
      });
  }, [customer.id]);

  return (
    <>
      <tr onClick={() => setOpen(!open)} aria-controls="transaction-table" aria-expanded={open}>
        <td>{customer.id}</td>
        <td>{customer.name}</td>
      </tr>
      <Collapse in={open}>
        <tr>
          <td colSpan="2">
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td>{transaction.date}</td>
                    <td>{transaction.amount}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Chart transactions={transactions} />
          </td>
        </tr>
      </Collapse>
    </>
  );
};

export default TransactionTable;