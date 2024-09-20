import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './pages/sign-up';
import DashBoard from './pages/dashboard';
import SignIn from './pages/sign-In';
import NavBar from './components/navbar';
import AppointmentPage from './pages/appointment';
import Template from './pages/template';
import ForgotPassword from './pages/forgot';
import Error404 from './pages/404';
import Settings from './pages/settings';
import MyRecords from './pages/healthrecords';
import Geoservices from './pages/geoservices';
import Tests from './pages/testmaps';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<><NavBar /><DashBoard /></>} />
        <Route path="/appointment" element={<><NavBar /><AppointmentPage /></>} />
        <Route path="/forgot" element={<><NavBar /><ForgotPassword /></>} />
        <Route path="/template" element={<><NavBar /><Template /></>} />
        <Route path="/404" element={<><NavBar /><Error404 /></>} />
        <Route path="/settings" element={<><NavBar /><Settings /></>} />
        <Route path="/healthrecords" element={<><NavBar /><MyRecords /></>} />
        <Route path="/geoservices" element={<><NavBar /><Geoservices /></>} />
        <Route path="/testmaps" element={<><NavBar /><Tests /></>} />
      </Routes>
    </Router>
  );
}

export default App;
