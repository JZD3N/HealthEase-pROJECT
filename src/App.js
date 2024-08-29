import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './pages/sign-up';
import DashBoard from './pages/dashboard';
import SignIn from './pages/sign-In';


function App() {
  return (
    <Router>
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
