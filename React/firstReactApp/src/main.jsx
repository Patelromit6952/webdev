import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Romit from './Romit.jsx'

const anotherelement = (
   <a href="https://google.com" target="__blank">visit google</a>
)
const reactelement = React.createElement(
   'a',
   {href:'https://google.com',target: '__blank'},
   'click me to visit google'
)

createRoot(document.getElementById('root')).render(
 <StrictMode>
    <App/>
    <Romit/>
   </StrictMode>,
)