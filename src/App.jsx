import {Routes, Route} from 'react-router-dom'
import "./styles/App.scss";
import NavBar  from './components/NavBar';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from "./pages/Home";

  
  
function App() {


  return (
    <div className="App">
      <div className="main">
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
