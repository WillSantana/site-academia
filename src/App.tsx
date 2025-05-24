import { Outlet } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar transparent={true} />
      
      <main>
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
