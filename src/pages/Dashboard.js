import React from 'react';
import { UilTransaction, UilDollarSign, UilClock } from '@iconscout/react-unicons';

const formatAmount = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(amount);
};

const Dashboard = () => {
  const totalSuccessfulTransactions = 102;
  const totalAmount = 85000;

  return (
    <div className="text-white bg-gradient-to-br from-gray-800 to-gray-800 p-6 rounded-lg shadow-xl">
      <h1 className="text-3xl font-bold mb-8">Transactions</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Total Transaction */}
        <div className="bg-gray-700 p-6 rounded-lg flex flex-col items-center justify-between">
          <p className="text-gray-300 text-lg md:text-xl font-semibold">{totalSuccessfulTransactions}</p>
          <div className="flex items-center justify-center">
            <UilTransaction className="text-4xl md:text-6xl text-blue-500 mr-4" />
            <h2 className="text-lg md:text-xl font-semibold">Total Transaction</h2>
          </div>
        </div>

        {/* Card 2: Total Amount of SUCCESS */}
        <div className="bg-gray-700 p-6 rounded-lg flex flex-col items-center justify-between">
          <p className="text-gray-300 text-lg md:text-xl font-semibold">{formatAmount(totalAmount)}</p>
          <div className="flex items-center justify-center">
            <UilDollarSign className="text-4xl md:text-6xl text-green-500 mr-4" />
            <h2 className="text-lg md:text-xl font-semibold">Total Amount of Success</h2>
          </div>
        </div>

        {/* Card 3: Total Amount of PENDING */}
        <div className="bg-gray-700 p-6 rounded-lg flex flex-col items-center justify-between">
          <p className="text-gray-300 text-lg md:text-xl font-semibold">{formatAmount(104500)}</p>
          <div className="flex items-center justify-center">
            <UilClock className="text-4xl md:text-6xl text-yellow-500 mr-4" />
            <h2 className="text-lg md:text-xl font-semibold">Total Amount of Pending</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
