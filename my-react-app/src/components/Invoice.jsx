import React from 'react';

const Invoice = ({ data }) => {
    if (!data) {
        return <div>Loading...</div>;
    }
  const currentDate = new Date(data.invoiceDate).toLocaleDateString();

  
  const subtotal = data.items.reduce((acc, item) => acc + item.quantity * item.unitPrice, 0);
  const tax = (data.taxRate / 100) * subtotal;

  const total = subtotal + tax - data.discount;
  const discount = typeof data.discount === 'number' ? data.discount : 0;

  return (
    <div className=" max-w-3xl mx-auto p-10 bg-white shadow-lg rounded-lg border border-gray-200">
     
      <div className="flex justify-between items-center pb-6 mb-6 border-b border-gray-300">
        <div className="flex items-center space-x-4">
          <img src="src/image/starbucks-logo-png-1666.png" alt="Company Logo" className="w-16 h-16 rounded-full shadow-md" />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{data.companyName}</h1>
            <p className="text-sm text-gray-500">{data.companyAddress}</p>
            <p className="text-sm text-gray-500">Email: {data.companyEmail}</p>
            <p className="text-sm text-gray-500">Phone: {data.companyPhone}</p>
            <p className="text-sm text-gray-500">Website: www.company.com</p>
          </div>
        </div>
       
        <div className="text-right space-y-2">
          <h2 className="text-2xl font-semibold text-gray-700">Invoice</h2>
          <p className="text-sm text-gray-500">Date: {currentDate}</p>
          <p className="text-sm text-gray-500">Invoice #: {data.invoiceNumber}</p>
          <p className="text-sm text-gray-500">Due Date: {new Date(data.invoiceDate).toLocaleDateString()}</p>
          <p className="text-sm text-gray-500">Payment Terms: Net 30</p>
          <p className="text-sm text-gray-500">Currency: USD</p>
        </div>
      </div>

      <div className="mb-10">
        <h3 className="text-lg font-semibold text-gray-700">Bill To:</h3>
        <p className="text-gray-600">{data.clientName}</p>
        <p className="text-gray-600">{data.clientCompany}</p>
        <p className="text-gray-600">{data.clientAddress}</p>
        <p className="text-gray-600">Email: {data.clientEmail}</p>
        <p className="text-gray-600">Phone: {data.clientPhone}</p>
      </div>

      <table className="w-full mb-10 border-collapse border border-gray-200 rounded-lg shadow-sm">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="p-3 text-left font-semibold">Item</th>
            <th className="p-3 text-left font-semibold">Description</th>
            <th className="p-3 text-center font-semibold">Quantity</th>
            <th className="p-3 text-center font-semibold">Unit Price</th>
            <th className="p-3 text-center font-semibold">Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.items.map((item, index) => (
            <tr key={index} className="border-t border-gray-200">
              <td className="p-3 text-gray-800">{item.name}</td>
              <td className="p-3 text-gray-600">{item.description}</td>
              <td className="p-3 text-center text-gray-800">{item.quantity}</td>
              <td className="p-3 text-center text-gray-800">${item.unitPrice.toFixed(2)}</td>
              <td className="p-3 text-center text-gray-800">${(item.quantity * item.unitPrice).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>


      <div className="space-y-2 text-right text-gray-800 mb-10">
        <div className="flex justify-end items-center">
          <p className="text-gray-500">Subtotal:</p>
          <p className="ml-4">${subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-end items-center">
          <p className="text-gray-500">Tax ({data.taxRate}%):</p>
          <p className="ml-4">${tax.toFixed(2)}</p>
        </div>
        <div className="flex justify-end items-center">
          <p className="text-gray-500">Discount:</p>
          <p className="ml-4">-{discount.toFixed(2)}%</p>
         
        </div>
        <div className="flex justify-end items-center font-semibold text-gray-900">
          <p>Total:</p>
          <p className="ml-4">${total.toFixed(2)}</p>
        </div>
      </div>

      
      <div className="mb-10">
        <h3 className="text-lg font-semibold text-gray-700">Bank Details</h3>
        <p className="text-gray-600">Bank Name: {data.bankName}</p>
        <p className="text-gray-600">Account Number: {data.accountNumber}</p>
        <p className="text-gray-600">SWIFT/BIC: {data.swift}</p>
        <p className="text-gray-600">IBAN: {data.iban}</p>
        <p className="text-gray-600">Branch Address: {data.branchAddress}</p>
      </div>

      
      <div className="mb-10">
        <h3 className="text-lg font-semibold text-gray-700">Additional Notes</h3>
        <p className="text-sm text-gray-600">{data.notes}</p>
      </div>

     
      <div className="mt-10 text-center text-xs text-gray-500">
        <p>If you have any questions, please contact us at {data.companyEmail}</p>
      </div>
    </div>
  );
};

export default Invoice;
