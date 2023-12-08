"use client"
import React from 'react';

const DownloadPDFButton = () => {
  const handleDownloadPDF = async () => {
    if (typeof window !== 'undefined') {
      const html2pdf = require('html2pdf.js');

      // Get the current page content
      const pageContent = document.getElementById('pdf-content');

      // Set the options for html2pdf
      const pdfOptions = {
        margin: 10,
        filename: 'document.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      };

      // Generate PDF
      html2pdf().from(pageContent).set(pdfOptions).outputPdf((pdf) => {
        // Download the PDF
        const blob = new Blob([pdf], { type: 'application/pdf' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'document.pdf';
        link.click();
      });
    }
  };

  return (
    <button onClick={handleDownloadPDF} className='text-white'>
      Download PDF
    </button>
  );
};

export default DownloadPDFButton;
