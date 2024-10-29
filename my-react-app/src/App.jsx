import { useState } from 'react';
import './App.css';
import Invoice from './components/Invoice';
import InvoiceForm from './components/InvoiceForm';

function App() {
  const [invoiceData, setInvoiceData] = useState(null); 

  const handleInvoiceSubmit = (data) => {
    setInvoiceData(data);
  };

  return (
    <>
      <InvoiceForm onSubmit={handleInvoiceSubmit} />
      <Invoice data={invoiceData} />
    </>
  );
}

export default App;





