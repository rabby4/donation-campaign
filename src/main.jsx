import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home'
import Donation from './components/Donation/Donation'
import Statistics from './components/Statistics/Statistics'
import DonationDetails from './components/DonationDetails/DonationDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/donation',
        element: <Donation></Donation>,
        loader: () => fetch('../donations.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/donationDetails/:id',
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch('../donations.json')
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
