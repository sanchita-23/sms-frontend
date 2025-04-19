import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Amplify } from 'aws-amplify';

import awsExports from './aws-exports';

import App from './pages/App';

Amplify.configure(awsExports); // Only this is needed in Amplify v6+

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);