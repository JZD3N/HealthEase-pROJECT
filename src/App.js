import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './pages/sign-up';
import DashBoard from './pages/dashboard';
import SignIn from './pages/sign-In';
import NavBar from './components/navbar';


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        {/* Define the URL paths for each page */}
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
