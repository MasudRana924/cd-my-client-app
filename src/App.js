import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './screens/Home';
import NewCreateLink from './screens/NewCreateLink';
import SignUp from './screens/user/SignUp';
import Login from './screens/user/Login';
import VeriFyEmail from './screens/user/VeriFyEmail';
import CheckEmail from './screens/user/CheckEmail';
import EmailVeried from './screens/user/EmailVeried';
import ForgotPassword from './screens/user/ForgotPassword';
import GetForgotEmail from './screens/user/GetForgotEmail';
import SetPass from './screens/user/SetPass';
import PassReset from './screens/user/PassReset';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home></Home>} />
        <Route exact path="/createlink" element={<NewCreateLink />} />
        <Route  path="/signup" element={<SignUp/>} />
        <Route  path="/login" element={<Login/>} />
        <Route  path="/verifyemail" element={<VeriFyEmail/>} />
        <Route  path="/checkemail" element={<CheckEmail/>} />
        <Route  path="/email-verify" element={<EmailVeried/>} />
        <Route  path="/forgot-password" element={<ForgotPassword/>} />
        <Route  path="/recover-password" element={<GetForgotEmail/>} />
        <Route  path="/set-new-password" element={<SetPass/>} />
        <Route  path="/pass-reset" element={<PassReset/>} />

       
       

      </Routes>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
