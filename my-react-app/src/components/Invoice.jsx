// import React from 'react';

// const Invoice = ({ data }) => {
//     if (!data) {
//         return <div>Loading...</div>;
//     }
//   const currentDate = new Date(data.invoiceDate).toLocaleDateString();

  
//   const subtotal = data.items.reduce((acc, item) => acc + item.quantity * item.unitPrice, 0);
//   const tax = (data.taxRate / 100) * subtotal;

//   const total = subtotal + tax - data.discount;
//   const discount = typeof data.discount === 'number' ? data.discount : 0;

//   return (
//     <div className=" max-w-3xl mx-auto p-10 bg-white shadow-lg rounded-lg border border-gray-200">
     
//       <div className="flex justify-between items-center pb-6 mb-6 border-b border-gray-300">
//         <div className="flex items-center space-x-4">
//           <img src="src/image/starbucks-logo-png-1666.png" alt="Company Logo" className="w-16 h-16 rounded-full shadow-md" />
//           <div>
//             <h1 className="text-3xl font-bold text-gray-800">{data.companyName}</h1>
//             <p className="text-sm text-gray-500">{data.companyAddress}</p>
//             <p className="text-sm text-gray-500">Email: {data.companyEmail}</p>
//             <p className="text-sm text-gray-500">Phone: {data.companyPhone}</p>
//             <p className="text-sm text-gray-500">Website: www.company.com</p>
//           </div>
//         </div>
       
//         <div className="text-right space-y-2">
//           <h2 className="text-2xl font-semibold text-gray-700">Invoice</h2>
//           <p className="text-sm text-gray-500">Date: {currentDate}</p>
//           <p className="text-sm text-gray-500">Invoice #: {data.invoiceNumber}</p>
//           <p className="text-sm text-gray-500">Due Date: {new Date(data.invoiceDate).toLocaleDateString()}</p>
//           <p className="text-sm text-gray-500">Payment Terms: Net 30</p>
//           <p className="text-sm text-gray-500">Currency: USD</p>
//         </div>
//       </div>

//       <div className="mb-10">
//         <h3 className="text-lg font-semibold text-gray-700">Bill To:</h3>
//         <p className="text-gray-600">{data.clientName}</p>
//         <p className="text-gray-600">{data.clientCompany}</p>
//         <p className="text-gray-600">{data.clientAddress}</p>
//         <p className="text-gray-600">Email: {data.clientEmail}</p>
//         <p className="text-gray-600">Phone: {data.clientPhone}</p>
//       </div>

//       <table className="w-full mb-10 border-collapse border border-gray-200 rounded-lg shadow-sm">
//         <thead>
//           <tr className="bg-gray-100 text-gray-700">
//             <th className="p-3 text-left font-semibold">Item</th>
//             <th className="p-3 text-left font-semibold">Description</th>
//             <th className="p-3 text-center font-semibold">Quantity</th>
//             <th className="p-3 text-center font-semibold">Unit Price</th>
//             <th className="p-3 text-center font-semibold">Amount</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.items.map((item, index) => (
//             <tr key={index} className="border-t border-gray-200">
//               <td className="p-3 text-gray-800">{item.name}</td>
//               <td className="p-3 text-gray-600">{item.description}</td>
//               <td className="p-3 text-center text-gray-800">{item.quantity}</td>
//               <td className="p-3 text-center text-gray-800">${item.unitPrice.toFixed(2)}</td>
//               <td className="p-3 text-center text-gray-800">${(item.quantity * item.unitPrice).toFixed(2)}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>


//       <div className="space-y-2 text-right text-gray-800 mb-10">
//         <div className="flex justify-end items-center">
//           <p className="text-gray-500">Subtotal:</p>
//           <p className="ml-4">${subtotal.toFixed(2)}</p>
//         </div>
//         <div className="flex justify-end items-center">
//           <p className="text-gray-500">Tax ({data.taxRate}%):</p>
//           <p className="ml-4">${tax.toFixed(2)}</p>
//         </div>
//         <div className="flex justify-end items-center">
//           <p className="text-gray-500">Discount:</p>
//           <p className="ml-4">-{discount.toFixed(2)}%</p>
         
//         </div>
//         <div className="flex justify-end items-center font-semibold text-gray-900">
//           <p>Total:</p>
//           <p className="ml-4">${total.toFixed(2)}</p>
//         </div>
//       </div>

      
//       <div className="mb-10">
//         <h3 className="text-lg font-semibold text-gray-700">Bank Details</h3>
//         <p className="text-gray-600">Bank Name: {data.bankName}</p>
//         <p className="text-gray-600">Account Number: {data.accountNumber}</p>
//         <p className="text-gray-600">SWIFT/BIC: {data.swift}</p>
//         <p className="text-gray-600">IBAN: {data.iban}</p>
//         <p className="text-gray-600">Branch Address: {data.branchAddress}</p>
//       </div>

      
//       <div className="mb-10">
//         <h3 className="text-lg font-semibold text-gray-700">Additional Notes</h3>
//         <p className="text-sm text-gray-600">{data.notes}</p>
//       </div>

     
//       <div className="mt-10 text-center text-xs text-gray-500">
//         <p>If you have any questions, please contact us at {data.companyEmail}</p>
//       </div>
//     </div>
//   );
// };

// export default Invoice;






import React from "react";

const Invoice = ({ data }) => {
  // Remove the loading check since data should always be provided from the form
  const currentDate = new Date(
    data?.invoiceDate || new Date()
  ).toLocaleDateString();

  const subtotal =
    data?.items?.reduce(
      (acc, item) => acc + item.quantity * item.unitPrice,
      0
    ) || 0;
  const tax = ((data?.taxRate || 0) / 100) * subtotal;
  const discount = typeof data?.discount === "number" ? data.discount : 0;
  const total = subtotal + tax - discount;

  const TableRow = ({ label, value, bold }) => (
    <div
      className={`flex justify-end items-center space-x-4 ${
        bold ? "font-semibold text-gray-900" : "text-gray-600"
      }`}
    >
      <span>{label}</span>
      <span className="w-24 text-right">{value}</span>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto my-8 p-8 bg-white shadow-xl rounded-xl border border-gray-200">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 mb-8 border-b border-gray-200">
        <div className="flex items-start space-x-4">
          <img
            src="src/image/starbucks-logo-png-1666.png"
            alt="Company Logo"
            className="w-16 h-16 rounded-full shadow-md object-cover"
            onError={(e) => {
              e.target.src =
                'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"%3E%3Cpath fill="%23CBD5E0" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/%3E%3C/svg%3E';
            }}
          />
          <div className="space-y-1">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              {data?.companyName || "Company Name"}
            </h1>
            <p className="text-sm text-gray-600">{data?.companyAddress}</p>
            <p className="text-sm text-gray-600">Email: {data?.companyEmail}</p>
            <p className="text-sm text-gray-600">Phone: {data?.companyPhone}</p>
          </div>
        </div>

        <div className="text-right space-y-2 bg-gray-50 p-4 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800">INVOICE</h2>
          <div className="text-sm space-y-1">
            <p className="text-gray-600">
              Date: <span className="font-medium">{currentDate}</span>
            </p>
            <p className="text-gray-600">
              Invoice #:{" "}
              <span className="font-medium">{data?.invoiceNumber}</span>
            </p>
            <p className="text-gray-600">
              Due Date: <span className="font-medium">{currentDate}</span>
            </p>
          </div>
        </div>
      </div>

      
      <div className="mb-8 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Bill To:</h3>
        <div className="space-y-1 text-gray-600">
          <p className="font-medium text-gray-800">{data?.clientName}</p>
          <p>{data?.clientCompany}</p>
          <p>{data?.clientAddress}</p>
          <p>Email: {data?.clientEmail}</p>
          <p>Phone: {data?.clientPhone}</p>
        </div>
      </div>

      {/* Items Table */}
      <div className="mb-8 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Item
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Description
              </th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
                Qty
              </th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">
                Unit Price
              </th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">
                Amount
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data?.items?.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-800">{item.name}</td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {item.description}
                </td>
                <td className="px-4 py-3 text-sm text-center text-gray-800">
                  {item.quantity}
                </td>
                <td className="px-4 py-3 text-sm text-right text-gray-800">
                  ${item.unitPrice.toFixed(2)}
                </td>
                <td className="px-4 py-3 text-sm text-right text-gray-800">
                  ${(item.quantity * item.unitPrice).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
      <div className="mb-8">
        <div className="w-full md:w-72 ml-auto space-y-3 p-4 bg-gray-50 rounded-lg">
          {/* <TableRow label="Subtotal:" value={$${subtotal.toFixed(2)}} />
          <TableRow
            label={Tax (${data?.taxRate}%):}
            value={$${tax.toFixed(2)}}
          />
          <TableRow label="Discount:" value={-$${discount.toFixed(2)}} />
          <div className="border-t border-gray-300 pt-3">
            <TableRow label="Total:" value={$${total.toFixed(2)}} bold /> */}


          <TableRow label="Subtotal:" value={`$${subtotal.toFixed(2)}`} />
          <TableRow
            label={`Tax (${data?.taxRate}%):`}
            value={`$${tax.toFixed(2)}`}
          />
          <TableRow label="Discount:" value={`-$${discount.toFixed(2)}`} />
          <div className="border-t border-gray-300 pt-3">
            <TableRow label="Total:" value={`$${total.toFixed(2)}`} bold />



           
          </div>
        </div>
      </div>

      
      <div className="mb-8 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          Bank Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <p className="text-gray-600">
            Bank Name:{" "}
            <span className="font-medium text-gray-800">{data?.bankName}</span>
          </p>
          <p className="text-gray-600">
            Account Number:{" "}
            <span className="font-medium text-gray-800">
              {data?.accountNumber}
            </span>
          </p>
          <p className="text-gray-600">
            SWIFT/BIC:{" "}
            <span className="font-medium text-gray-800">{data?.swift}</span>
          </p>
          <p className="text-gray-600">
            IBAN:{" "}
            <span className="font-medium text-gray-800">{data?.iban}</span>
          </p>
          <p className="text-gray-600 md:col-span-2">
            Branch Address:{" "}
            <span className="font-medium text-gray-800">
              {data?.branchAddress}
            </span>
          </p>
        </div>
      </div>

      
      {data?.notes && (
        <div className="mb-8 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Notes</h3>
          <p className="text-sm text-gray-600">{data.notes}</p>
        </div>
      )}

      
      <div className="text-center text-sm text-gray-500 mt-12 pt-6 border-t border-gray-200">
        <p>Thank you for your business!</p>
        <p className="mt-2">
          If you have any questions, please contact us at {data?.companyEmail}
        </p>
      </div>
    </div>
  );
};

export default Invoice;
