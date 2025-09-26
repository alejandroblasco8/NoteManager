import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';
import SignIn from './pages/Sign_in'
import SignUp from './pages/Sign_up'
import background from './assets/artwork.png'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${background})` }}>
            <Home />
          </div>
        } />
        <Route path="/Sign_in" element={<SignIn />} />
        <Route path="/Sign_up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
