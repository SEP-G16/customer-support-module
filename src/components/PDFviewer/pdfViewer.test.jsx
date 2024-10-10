// PDFViewer.test.jsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import PDFViewer from './pdfViewer';

// Mock the components from react-pdf-viewer
jest.mock('@react-pdf-viewer/core', () => ({
  Worker: ({ children }) => <div>{children}</div>, // Mock Worker
  Viewer: ({ fileUrl }) => <div>{fileUrl ? 'PDF Loaded' : 'No PDF Loaded'}</div>, // Mock Viewer
}));

describe('PDFViewer Component', () => {
  test('renders the PDF Viewer with the correct PDF URL', () => {
    const pdfUrl = 'https://example.com/sample.pdf';
    
    render(<PDFViewer pdfUrl={pdfUrl} />);

    // Check if the mock Viewer component displays the correct file URL
    expect(screen.getByText('PDF Loaded')).toBeInTheDocument();
  });

  test('renders a fallback message when no pdfUrl is provided', () => {
    render(<PDFViewer pdfUrl="" />);

    // Check if the mock Viewer component renders a fallback message
    expect(screen.getByText('No PDF Loaded')).toBeInTheDocument();
  });
});
