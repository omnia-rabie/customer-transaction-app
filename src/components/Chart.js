import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({ transactions }) => {
  const data = {
    labels: transactions.map((transaction) => transaction.date),
    datasets: [
      {
        label: 'Total Transactions Amount',
        data: transactions.map((transaction) => transaction.amount),
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  return (
    <div className="chart-container">
      <Line data={data} />
    </div>
  );
};

export default Chart;