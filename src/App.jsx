import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Navbar from './components/navbar';

import Dashboard from "./pages/dashboard/index";
import SignUp from './pages/signUp';
import SignIn from './pages/signIn';

import {UserProvider} from './contexts/UserContext';

function App() {
  return (
    <>
      <ToastContainer/>
      <UserProvider>
        <Navbar/>
        <Router>
          <Routes>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            
            <Route
              path="/"
              element={
                <Dashboard />
              }
            >
              
            {/* <Route path="subscription" element={<FillSubscription />} />
            <Route path="payment" element={<Payment />} />
            <Route path="hotel" element={<Hotel />} />
            <Route path="activities" element={<Activities />} />
            <Route path="certificate" element={<Certificate />} />
            <Route index path="*" element={<Navigate to="/" />} />
             */}</Route>
          </Routes>
        </Router>
      </UserProvider>
    </>
  )
}

export default App;