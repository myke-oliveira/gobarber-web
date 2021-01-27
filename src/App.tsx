import React from 'react';

import SignIn from "./pages/SignIn";
import GlobalStyle from './styles/global'

import AuthContext from './context/AuthContext';

AuthContext.Provider

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Myke' }}>
      <SignIn />
    </AuthContext.Provider>
    <GlobalStyle />
  </>
);

export default App;
