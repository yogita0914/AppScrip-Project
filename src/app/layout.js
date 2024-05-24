"use client";

import React from 'react';
import Header from './components/Header';
import './globals.css';
import Footer from './components/Footer';

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>My App</title>
      </head>
      <body>
        <Header />
        <div className="root-container">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
