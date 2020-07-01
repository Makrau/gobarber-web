import React from 'react';

import Signin from './pages/Signin';
// import Signup from './pages/Signup';

import GlobalStyle from './styles/global';

import { AuthProvider } from './context/AuthContext';
import ToastContainer from './components/ToastContainer';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <Signin />
    </AuthProvider>

    <ToastContainer />

    <GlobalStyle />
  </>
);

export default App;
