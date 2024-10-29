import React, { useState } from 'react';
import Invoice from './Invoice';

const InvoiceForm = () => {
 
  const [formData, setFormData] = useState({
    companyName: '',
    companyAddress: '',
    companyEmail: '',
    companyPhone: '',
    clientName: '',
    clientCompany: '',
    clientAddress: '',
    clientEmail: '',
    clientPhone: '',
    items: [
      { name: '', description: '', quantity: 1, unitPrice: 0 },
    ],
    taxRate: 10,
    discount: '',
    notes: '',
    invoiceDate: new Date().toISOString().substring(0, 10), 
    invoiceNumber: '001', 
    bankName: '',
    accountNumber: '',
    swift: '',
    iban: '',
    branchAddress: '',
  });

  const [showInvoice, setShowInvoice] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

   
    const newValue = name === 'discount' ? parseFloat(value) : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleItemChange = (index, e) => {
    const { name, value } = e.target;
    const updatedItems = [...formData.items];
    updatedItems[index][name] = name === 'quantity' || name === 'unitPrice' ? parseFloat(value) : value;
    setFormData({ ...formData, items: updatedItems });
  };

  const addItem = () => {
    setFormData((prevData) => ({
      ...prevData,
      items: [...prevData.items, { name: '', description: '', quantity: 1, unitPrice: 0 }],
    }));
  };

 
  const generateInvoice = () => {
    setShowInvoice(true); 
  };

  return (
    <div className="max-w-3xl mx-auto p-10 bg-gray-50 mb-10">
      <h2 className="text-xl font-bold mb-4">Invoice Form</h2>
      <form className="space-y-4">
      
        <div>
          <h3 className="font-semibold">Company Information</h3>
          <input name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Company Name" className="w-full p-2 border border-gray-300 rounded" />
          <input name="companyAddress" value={formData.companyAddress} onChange={handleChange} placeholder="Address" className="w-full p-2 border border-gray-300 rounded" />
          <input name="companyEmail" value={formData.companyEmail} onChange={handleChange} placeholder="Email" className="w-full p-2 border border-gray-300 rounded" />
          <input name="companyPhone" value={formData.companyPhone} onChange={handleChange} placeholder="Phone" className="w-full p-2 border border-gray-300 rounded" />
        </div>

        
        <div>
          <h3 className="font-semibold">Client Information</h3>
          <input name="clientName" value={formData.clientName} onChange={handleChange} placeholder="Client Name" className="w-full p-2 border border-gray-300 rounded" />
          <input name="clientCompany" value={formData.clientCompany} onChange={handleChange} placeholder="Client Company" className="w-full p-2 border border-gray-300 rounded" />
          <input name="clientAddress" value={formData.clientAddress} onChange={handleChange} placeholder="Address" className="w-full p-2 border border-gray-300 rounded" />
          <input name="clientEmail" value={formData.clientEmail} onChange={handleChange} placeholder="Email" className="w-full p-2 border border-gray-300 rounded" />
          <input name="clientPhone" value={formData.clientPhone} onChange={handleChange} placeholder="Phone" className="w-full p-2 border border-gray-300 rounded" />
        </div>

        
        <div>
          <h3 className="font-semibold">Items</h3>
          {formData.items.map((item, index) => (
            <div key={index} className="flex space-x-2">
              <input name="name" value={item.name} onChange={(e) => handleItemChange(index, e)} placeholder="Item Name" className="w-full p-2 border border-gray-300 rounded" />
              <input name="description" value={item.description} onChange={(e) => handleItemChange(index, e)} placeholder="Description" className="w-full p-2 border border-gray-300 rounded" />
              <input name="quantity" type="number" value={item.quantity} onChange={(e) => handleItemChange(index, e)} placeholder="Quantity" className="w-full p-2 border border-gray-300 rounded" />
              <input name="unitPrice" type="number" value={item.unitPrice} onChange={(e) => handleItemChange(index, e)} placeholder="Unit Price" className="w-full p-2 border border-gray-300 rounded" />
            </div>
          ))}
          <button type="button" onClick={addItem} className="mt-2 p-2 bg-blue-500 text-white rounded">Add Item</button>
        </div>

       
        <div>
          <h3 className="font-semibold">Totals</h3>
          <input name="taxRate" type="number" value={formData.taxRate} onChange={handleChange} placeholder="Tax Rate (%)" className="w-full p-2 border border-gray-300 rounded" />
          <input
            type="number" 
            name="discount"
            value={formData.discount}
            onChange={handleChange}
            placeholder="Discount"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

     
        <div>
          <h3 className="font-semibold">Invoice Details</h3>
          <input name="invoiceDate" type="date" value={formData.invoiceDate} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
          <input name="invoiceNumber" value={formData.invoiceNumber} onChange={handleChange} placeholder="Invoice Number" className="w-full p-2 border border-gray-300 rounded" />
        </div>

        
        <div>
          <h3 className="font-semibold">Bank Details</h3>
          <input name="bankName" value={formData.bankName} onChange={handleChange} placeholder="Bank Name" className="w-full p-2 border border-gray-300 rounded" />
          <input name="accountNumber" value={formData.accountNumber} onChange={handleChange} placeholder="Account Number" className="w-full p-2 border border-gray-300 rounded" />
          <input name="swift" value={formData.swift} onChange={handleChange} placeholder="SWIFT/BIC" className="w-full p-2 border border-gray-300 rounded" />
          <input name="iban" value={formData.iban} onChange={handleChange} placeholder="IBAN" className="w-full p-2 border border-gray-300 rounded" />
          <input name="branchAddress" value={formData.branchAddress} onChange={handleChange} placeholder="Branch Address" className="w-full p-2 border border-gray-300 rounded" />
        </div>

      
        <div>
          <h3 className="font-semibold">Additional Notes</h3>
          <textarea name="notes" value={formData.notes} onChange={handleChange} placeholder="Notes" className="w-full p-2 border border-gray-300 rounded" />
        </div>

        <button type="button" onClick={generateInvoice} className="mt-4 p-2 bg-green-500 text-white rounded">
          Generate Invoice
        </button>
      </form>

      {showInvoice && <Invoice data={formData} />}
    </div>
  );
};

export default InvoiceForm;