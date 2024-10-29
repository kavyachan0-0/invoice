// import React, { useState } from 'react';
// import Invoice from './Invoice';

// const InvoiceForm = () => {
 
//   const [formData, setFormData] = useState({
//     companyName: '',
//     companyAddress: '',
//     companyEmail: '',
//     companyPhone: '',
//     clientName: '',
//     clientCompany: '',
//     clientAddress: '',
//     clientEmail: '',
//     clientPhone: '',
//     items: [
//       { name: '', description: '', quantity: 1, unitPrice: 0 },
//     ],
//     taxRate: 10,
//     discount: '',
//     notes: '',
//     invoiceDate: new Date().toISOString().substring(0, 10), 
//     invoiceNumber: '001', 
//     bankName: '',
//     accountNumber: '',
//     swift: '',
//     iban: '',
//     branchAddress: '',
//   });

//   const [showInvoice, setShowInvoice] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

   
//     const newValue = name === 'discount' ? parseFloat(value) : value;

//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: newValue,
//     }));
//   };

//   const handleItemChange = (index, e) => {
//     const { name, value } = e.target;
//     const updatedItems = [...formData.items];
//     updatedItems[index][name] = name === 'quantity' || name === 'unitPrice' ? parseFloat(value) : value;
//     setFormData({ ...formData, items: updatedItems });
//   };

//   const addItem = () => {
//     setFormData((prevData) => ({
//       ...prevData,
//       items: [...prevData.items, { name: '', description: '', quantity: 1, unitPrice: 0 }],
//     }));
//   };

 
//   const generateInvoice = () => {
//     setShowInvoice(true); 
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-10 bg-gray-50 mb-10">
//       <h2 className="text-xl font-bold mb-4">Invoice Form</h2>
//       <form className="space-y-4">
      
//         <div>
//           <h3 className="font-semibold">Company Information</h3>
//           <input name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Company Name" className="w-full p-2 border border-gray-300 rounded" />
//           <input name="companyAddress" value={formData.companyAddress} onChange={handleChange} placeholder="Address" className="w-full p-2 border border-gray-300 rounded" />
//           <input name="companyEmail" value={formData.companyEmail} onChange={handleChange} placeholder="Email" className="w-full p-2 border border-gray-300 rounded" />
//           <input name="companyPhone" value={formData.companyPhone} onChange={handleChange} placeholder="Phone" className="w-full p-2 border border-gray-300 rounded" />
//         </div>

        
//         <div>
//           <h3 className="font-semibold">Client Information</h3>
//           <input name="clientName" value={formData.clientName} onChange={handleChange} placeholder="Client Name" className="w-full p-2 border border-gray-300 rounded" />
//           <input name="clientCompany" value={formData.clientCompany} onChange={handleChange} placeholder="Client Company" className="w-full p-2 border border-gray-300 rounded" />
//           <input name="clientAddress" value={formData.clientAddress} onChange={handleChange} placeholder="Address" className="w-full p-2 border border-gray-300 rounded" />
//           <input name="clientEmail" value={formData.clientEmail} onChange={handleChange} placeholder="Email" className="w-full p-2 border border-gray-300 rounded" />
//           <input name="clientPhone" value={formData.clientPhone} onChange={handleChange} placeholder="Phone" className="w-full p-2 border border-gray-300 rounded" />
//         </div>

        
//         <div>
//           <h3 className="font-semibold">Items</h3>
//           {formData.items.map((item, index) => (
//             <div key={index} className="flex space-x-2">
//               <input name="name" value={item.name} onChange={(e) => handleItemChange(index, e)} placeholder="Item Name" className="w-full p-2 border border-gray-300 rounded" />
//               <input name="description" value={item.description} onChange={(e) => handleItemChange(index, e)} placeholder="Description" className="w-full p-2 border border-gray-300 rounded" />
//               <input name="quantity" type="number" value={item.quantity} onChange={(e) => handleItemChange(index, e)} placeholder="Quantity" className="w-full p-2 border border-gray-300 rounded" />
//               <input name="unitPrice" type="number" value={item.unitPrice} onChange={(e) => handleItemChange(index, e)} placeholder="Unit Price" className="w-full p-2 border border-gray-300 rounded" />
//             </div>
//           ))}
//           <button type="button" onClick={addItem} className="mt-2 p-2 bg-blue-500 text-white rounded">Add Item</button>
//         </div>

       
//         <div>
//           <h3 className="font-semibold">Totals</h3>
//           <input name="taxRate" type="number" value={formData.taxRate} onChange={handleChange} placeholder="Tax Rate (%)" className="w-full p-2 border border-gray-300 rounded" />
//           <input
//             type="number" 
//             name="discount"
//             value={formData.discount}
//             onChange={handleChange}
//             placeholder="Discount"
//             className="w-full p-2 border border-gray-300 rounded"
//             required
//           />
//         </div>

     
//         <div>
//           <h3 className="font-semibold">Invoice Details</h3>
//           <input name="invoiceDate" type="date" value={formData.invoiceDate} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
//           <input name="invoiceNumber" value={formData.invoiceNumber} onChange={handleChange} placeholder="Invoice Number" className="w-full p-2 border border-gray-300 rounded" />
//         </div>

        
//         <div>
//           <h3 className="font-semibold">Bank Details</h3>
//           <input name="bankName" value={formData.bankName} onChange={handleChange} placeholder="Bank Name" className="w-full p-2 border border-gray-300 rounded" />
//           <input name="accountNumber" value={formData.accountNumber} onChange={handleChange} placeholder="Account Number" className="w-full p-2 border border-gray-300 rounded" />
//           <input name="swift" value={formData.swift} onChange={handleChange} placeholder="SWIFT/BIC" className="w-full p-2 border border-gray-300 rounded" />
//           <input name="iban" value={formData.iban} onChange={handleChange} placeholder="IBAN" className="w-full p-2 border border-gray-300 rounded" />
//           <input name="branchAddress" value={formData.branchAddress} onChange={handleChange} placeholder="Branch Address" className="w-full p-2 border border-gray-300 rounded" />
//         </div>

      
//         <div>
//           <h3 className="font-semibold">Additional Notes</h3>
//           <textarea name="notes" value={formData.notes} onChange={handleChange} placeholder="Notes" className="w-full p-2 border border-gray-300 rounded" />
//         </div>

//         <button type="button" onClick={generateInvoice} className="mt-4 p-2 bg-green-500 text-white rounded">
//           Generate Invoice
//         </button>
//       </form>

//       {showInvoice && <Invoice data={formData} />}
//     </div>
//   );
// };

// export default InvoiceForm;






import React, { useState } from "react";

const InvoiceForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    companyName: "",
    companyAddress: "",
    companyEmail: "",
    companyPhone: "",
    clientName: "",
    clientCompany: "",
    clientAddress: "",
    clientEmail: "",
    clientPhone: "",
    items: [{ name: "", description: "", quantity: 1, unitPrice: 0 }],
    taxRate: 10,
    discount: 0,
    notes: "",
    invoiceDate: new Date().toISOString().substring(0, 10),
    invoiceNumber: "001",
    bankName: "",
    accountNumber: "",
    swift: "",
    iban: "",
    branchAddress: "",
  });

  const [activeTab, setActiveTab] = useState("company");
  const [showAlert, setShowAlert] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]:
        name === "discount" || name === "taxRate"
          ? parseFloat(value) || 0
          : value,
    }));
  };

  const removeItem = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      items: prevData.items.filter((_, i) => i !== index),
    }));
  };

  const validateBankDetails = () => {
    const newErrors = {};
    if (!formData.bankName) newErrors.bankName = "Bank name is required.";
    if (!formData.accountNumber) {
      newErrors.accountNumber = "Account number is required.";
    } else if (!/^\d+$/.test(formData.accountNumber)) {
      newErrors.accountNumber = "Account number must contain only digits.";
    }
    if (!formData.branchAddress) {
      newErrors.branchAddress = "Branch address is required.";
    }
    // Optionally validate SWIFT and IBAN if needed
    // if (formData.swift && !/^[A-Z]{6}[0-9A-Z]{2}.*$/.test(formData.swift)) {
    //   newErrors.swift = "Invalid SWIFT code format.";
    // }
    // if (formData.iban && formData.iban.length < 15) {
    //   newErrors.iban = "IBAN must be at least 15 characters long.";
    // }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleItemChange = (index, e) => {
    const { name, value } = e.target;
    const updatedItems = [...formData.items];
    updatedItems[index][name] =
      name === "quantity" || name === "unitPrice"
        ? parseFloat(value) || 0
        : value;
    setFormData({ ...formData, items: updatedItems });
  };

  const addItem = () => {
    setFormData((prevData) => ({
      ...prevData,
      items: [
        ...prevData.items,
        { name: "", description: "", quantity: 1, unitPrice: 0 },
      ],
    }));
  };

  const calculateTotalPrice = () => {
    const subtotal = formData.items.reduce(
      (acc, item) => acc + item.quantity * item.unitPrice,
      0
    );

    const discountAmount = (subtotal * formData.discount) / 100;
    const taxAmount = ((subtotal - discountAmount) * formData.taxRate) / 100;

    return subtotal - discountAmount + taxAmount;
  };


  const generateInvoice = () => {
    if (!validateBankDetails()) {
      return; // Stop if validation fails
    }
    onSubmit(formData);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

   const currencyFormatter = new Intl.NumberFormat("en-IN", {
     style: "currency",
     currency: "INR",
   });

  const tabs = [
    { id: "company", label: "Company Details" },
    { id: "client", label: "Client Details" },
    { id: "items", label: "Items" },
    { id: "totals", label: "Totals & Date" },
    { id: "bank", label: "Bank Details" },
    { id: "notes", label: "Notes" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "company":
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Company Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Company Name
                </label>
                <input
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                  placeholder="Enter company name"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  name="companyAddress"
                  value={formData.companyAddress}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                  placeholder="Enter company address"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="companyEmail"
                  value={formData.companyEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                  placeholder="Enter company email"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  name="companyPhone"
                  value={formData.companyPhone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                  placeholder="Enter company phone number"
                />
              </div>
            </div>
          </div>
        );

      case "client":
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Client Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Client Name
                </label>
                <input
                  name="clientName"
                  value={formData.clientName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                  placeholder="Enter client name"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Client Company
                </label>
                <input
                  name="clientCompany"
                  value={formData.clientCompany}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                  placeholder="Enter client company name"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  name="clientAddress"
                  value={formData.clientAddress}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                  placeholder="Enter client address"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="clientEmail"
                  onChange={handleChange}
                  value={formData.clientEmail}
                  className="w-full px-4 py-2 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                  placeholder="Enter client email"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  name="clientPhone"
                  value={formData.clientPhone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                  placeholder="Enter client phone number"
                />
              </div>
            </div>
          </div>
        );

      case "items":
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Items</h3>
            <div className="space-y-6">
              {formData.items.map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-sm border"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Item Name
                      </label>
                      <input
                        name="name"
                        value={item.name}
                        onChange={(e) => handleItemChange(index, e)}
                        className="w-full px-4 py-2 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                        placeholder="Enter item name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Description
                      </label>
                      <input
                        name="description"
                        value={item.description}
                        onChange={(e) => handleItemChange(index, e)}
                        className="w-full px-4 py-2 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                        placeholder="Enter item description"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Quantity
                      </label>
                      <input
                        type="number"
                        name="quantity"
                        value={item.quantity}
                        onChange={(e) => handleItemChange(index, e)}
                        className="w-full px-4 py-2 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                        min="1"
                        placeholder="Enter quantity"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Unit Price
                      </label>
                      <input
                        type="number"
                        name="unitPrice"
                        value={item.unitPrice}
                        onChange={(e) => handleItemChange(index, e)}
                        className="w-full px-4 py-2 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                        min="0"
                        placeholder="Enter unit price"
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-lg font-semibold text-gray-700">
                      Total:{" "}
                      {currencyFormatter.format(item.quantity * item.unitPrice)}
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(index)}
                      className="px-4 py-2 text-sm text-red-600 hover:text-red-700 font-medium rounded-l bg-red-200 hover:bg-red-50"
                    >
                      Delete Item
                    </button>
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={addItem}
                className="w-full px-4 py-2 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg font-medium"
              >
                Add Item
              </button>
            </div>
          </div>
        );

      case "totals":
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Totals & Invoice Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Tax Rate (%)
                </label>
                <input
                  type="number"
                  name="taxRate"
                  onChange={handleChange}
                  value={formData.taxRate}
                  className="w-full px-4 py-2 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                  min="0"
                  placeholder="Enter tax rate"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Discount Rate (%)
                </label>
                <input
                  type="number"
                  name="discount"
                  onChange={handleChange}
                  value={formData.discount}
                  className="w-full px-4 py-2 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                  min="0"
                  placeholder="Enter discount rate"
                />
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-gray-700">
                Total Price: {currencyFormatter.format(calculateTotalPrice())}
              </h4>
            </div>
          </div>
        );

          case "bank":
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Bank Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Bank Name
                </label>
                <input
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                  placeholder="e.g., 'State bank of india'"
                />
                {errors.bankName && (
                  <span className="text-red-600 text-sm">
                    {errors.bankName}
                  </span>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Account Number
                </label>
                <input
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                  placeholder="8-12 digit number"
                />
                {errors.accountNumber && (
                  <span className="text-red-600 text-sm">
                    {errors.accountNumber}
                  </span>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  SWIFT Code (optional)
                </label>
                <input
                  name="swift"
                  value={formData.swift}
                  placeholder="eg. 'DEUTDEDBXXX'"
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                />
                {errors.swift && (
                  <span className="text-red-600 text-sm">{errors.swift}</span>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  IBAN (optional)
                </label>
                <input
                  name="iban"
                  value={formData.iban}
                  onChange={handleChange}
                  placeholder="eg . 'GB29NWBK60161331926819'"
                  className="w-full px-4 py-2 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                />
                {errors.iban && (
                  <span className="text-red-600 text-sm">{errors.iban}</span>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Branch Address
                </label>
                <input
                  name="branchAddress"
                  value={formData.branchAddress}
                  placeholder="Enter branch address"
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                />
                {errors.branchAddress && (
                  <span className="text-red-600 text-sm">
                    {errors.branchAddress}
                  </span>
                )}
              </div>
            </div>
          </div>
        );

      case "notes":
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Notes</h3>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Additional Notes
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Add any additional notes or payment terms..."
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[150px] resize-y"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };


  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Create Invoice</h2>

      <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors duration-200 ${
              activeTab === tab.id
                ? "bg-blue-50 text-rose-600 border-b-2 border-rose-600"
                : "text-gray-500 hover:text-pink-700 hover:bg-gray-50"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mb-8">{renderTabContent()}</div>

      <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
        <button
          type="button"
          onClick={() => {
            const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
            if (currentIndex > 0) {
              setActiveTab(tabs[currentIndex - 1].id);
            }
          }}
          className={`px-6 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
            activeTab === tabs[0].id
              ? "hidden"
              : "bg-red-100 text-red-600 hover:bg-destructive hover:text-white"
          }`}
        >
          ← Previous
        </button>

        {activeTab === tabs[tabs.length - 1].id ? (
          <button
            type="button"
            onClick={generateInvoice}
            className="px-6 py-2 bg-teal-700 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Generate Invoice →
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              const currentIndex = tabs.findIndex(
                (tab) => tab.id === activeTab
              );
              if (currentIndex < tabs.length - 1) {
                setActiveTab(tabs[currentIndex + 1].id);
              }
            }}
            className="px-6 py-2 bg-fuchsia-500 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Next →
          </button>
        )}
      </div>

      {showAlert && (
        <div className="fixed bottom-4 right-4 bg-green-50 text-green-800 px-6 py-3 rounded-lg shadow-lg animate-fade-in-out">
          Invoice generated successfully!
        </div>
      )}
    </div>
  );
};

export default InvoiceForm