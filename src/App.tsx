import React from 'react';
import { ToastProvider } from 'react-toast-notifications';

import { Global } from './styles';
import Home from './pages/Home';

function App() {
  return (
      <ToastProvider autoDismiss>
        <Global />
        <Home />
      </ToastProvider>
  );
}

export default App;
