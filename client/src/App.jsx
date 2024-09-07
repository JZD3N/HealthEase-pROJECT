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


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        {/* Define the URL paths for each page */}
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path='/appointment' element={<AppointmentPage />} />
        <Route path='/forgot' element={<ForgotPassword />} />
        <Route path='/template' element={<Template />} />
        <Route path='/404' element={<Error404 />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/healthrecords' element={<MyRecords />} />
        <Route path='/geoservices' element={<Geoservices />} />

      </Routes>
    </Router>
  );
}

export default App;
