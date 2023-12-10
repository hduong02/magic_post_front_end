import React from 'react'
import ReactDOM from 'react-dom/client'
import Leader from './pages/roles/Leader.tsx'
import Staff from './pages/roles/Staff.tsx'
import Customer from './pages/roles/Customer.tsx'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Customer/>
  </React.StrictMode>,
)
