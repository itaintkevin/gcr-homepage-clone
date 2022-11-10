import Card from "./components/Card";
import Filters from "./components/Filters";
import Help from "./components/Help";
import Navbar from "./components/Navbar"
import { useState } from 'react'

function App() {

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav)
  }
  
  return (
    <div className=''>
      <Navbar onClick={handleNav} />
      <Filters />
      <Help />
      <Card onClick={handleNav} />
    </div>
  );
}

export default App;
