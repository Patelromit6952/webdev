import Usercontextprovider from './context/Usercontextprovider'
import Login from './components/login'
import Profile from './components/Profile'
import './App.css'
function App() {
 
  return (
    <>
      <Usercontextprovider>
        <h2>React with romit</h2>
        <Login/>
        <Profile/>  
      </Usercontextprovider>
    </>
  )
}

export default App
