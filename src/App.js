import { BrowserRouter, Routes, Route } from "react-router-dom";

// import logo from './logo.svg';
import './App.css';
import { Frame } from "./pages/Frame";
import { Home } from "./pages/Home";
import { NoPage } from "./pages/NoPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Frame />}>
            <Route index element={<Home />} />
            {/* <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} /> */}
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
