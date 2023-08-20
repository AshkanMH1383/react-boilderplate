import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient , QueryClientProvider } from "react-query";

import App from '@/App';
import '@/assets/styles/main.scss'


const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>  
      <QueryClientProvider client={client}>
        <App />
      </QueryClientProvider>
  </React.StrictMode>,
)
