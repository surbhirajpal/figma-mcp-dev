import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Card1 from './testing/card1.jsx';
import Test from './Test.jsx';
import CardScreen from './CardScreen.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Test/>
    <CardScreen/> */}
    <Card1 />
  </StrictMode>,
)
