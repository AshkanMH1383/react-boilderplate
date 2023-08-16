import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';

import store from '@/store';
import Layout from '@/Layout';
import '@/assets/styles/main.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>  
    <Provider store={store}>
      <Layout />
    </Provider>
  </React.StrictMode>,
)
