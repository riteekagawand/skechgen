import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Generate from "./pages/Generate";
import Login from "./components/login";

function App() {
 
  return (
    <Router>
        {/* Define your routes */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/generate' element={<Generate />} />
          <Route path='/samples' element={<div className="min-h-screen flex items-center justify-center text-2xl font-bold">Samples Page (Coming Soon)</div>} />
          <Route path='/login' element={<Login />} />
        </Routes>
    </Router>
  );
}

export default App;