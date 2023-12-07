import './App.css';
import Navbar from './components/navbar';
import Navigation from './components/navigation/navigation.component';
import Home from './pages/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
