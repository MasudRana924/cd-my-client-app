import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './screens/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home></Home>} />
      </Routes>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
