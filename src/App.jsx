import './App.css'
import { Navbar } from './components/Navbar'
import { UserStatus } from './components/Status'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <UserStatus/>
    </div>
  )
}

export default App