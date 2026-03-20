import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Barberia } from './Barberia'
import '../src/index.css'
import { BrowserRouter } from 'react-router-dom'
import { DataProvider } from './context/DataProvider'


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <DataProvider>
        <Barberia />
      </DataProvider>
    </StrictMode>
  </BrowserRouter>
);
