import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store, persistor} from './store/store.ts'
import { PersistGate } from 'redux-persist/integration/react';
// import {ChakraProvider} from "@chakra-ui/react"
import theme from './theme/theme.js'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
 
    
      <Provider store={store}>
         <PersistGate loading={<h1>Loading ...</h1>} persistor={persistor}> 

       <BrowserRouter>
   
        <App />
      
        </BrowserRouter>

    </PersistGate>

      </Provider>

  </React.StrictMode>,
)
