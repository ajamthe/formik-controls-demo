import React from 'react';
import './App.css';
// import FormikContainer from './components/FormikContainer';
import LoginForm from  './components/LoginForm'
import { ThemeProvider, theme} from '@chakra-ui/core'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <LoginForm/>
          {/* <FormikContainer/> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
