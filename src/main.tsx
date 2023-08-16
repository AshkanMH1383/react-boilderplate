import React from 'react'
import ReactDOM from 'react-dom/client'
// import { Provider } from 'react-redux';
import { QueryClient , QueryClientProvider } from "react-query";

// import store from '@/store';
import Layout from '@/Layout';
import '@/assets/styles/main.scss'


const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>  
    {/* <Provider store={store}> */}
      <QueryClientProvider client={client}>
        <Layout />
      </QueryClientProvider>
    {/* </Provider> */}
  </React.StrictMode>,
)
