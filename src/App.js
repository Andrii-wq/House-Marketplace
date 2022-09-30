import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Explore from '../src/pages/Explore'
import ForgotPassword from '../src/pages/ForgotPassword'
import Offers from '../src/pages/Offers'
import Profile from '../src/pages/Profile'
import SignIn from '../src/pages/SignIn'
import SignUp from '../src/pages/SignUp'
import Navbar from './components/Navbar'
import PrivateRoute from './components/PrivateRoute'
import Category from './pages/Category'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Explore />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/category/:categoryName' element={<Category />} />
          <Route path='/profile' element={<PrivateRoute />}>
            <Route path='/profile' element={<Profile />} />
          </Route>
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
        </Routes>
        <Navbar />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
