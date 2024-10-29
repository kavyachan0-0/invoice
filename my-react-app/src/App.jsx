// import { useState } from 'react';
// import './App.css';
// import Invoice from './components/Invoice';
// import InvoiceForm from './components/InvoiceForm';

// function App() {
//   const [invoiceData, setInvoiceData] = useState(null); 

//   const handleInvoiceSubmit = (data) => {
//     setInvoiceData(data);
//   };

//   return (
//     <>
//       <InvoiceForm onSubmit={handleInvoiceSubmit} />
//       <Invoice data={invoiceData} />
//     </>
//   );
// }

// export default App;





import { useState } from 'react';
import Invoice from './components/Invoice.jsx';
import InvoiceForm from './components/InvoiceForm.jsx';
import "./App.css"

function App() {
  const [invoiceData, setInvoiceData] = useState(null);
  
  const handleInvoiceSubmit = (data) => {
    setInvoiceData(data);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <InvoiceForm onSubmit={handleInvoiceSubmit} />
      {invoiceData && <Invoice data={invoiceData} />}
    </div>
  );
}

export default App;