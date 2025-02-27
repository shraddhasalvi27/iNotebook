import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home"; // Import Home as a default import
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);
  const Showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  setTimeout(() => {
    setAlert(null);
  }, 3000);

  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert} />;
          <div className="container">
            <Routes>
              <Route path="/" element={<Home Showalert={Showalert} />} />
              {/* Specify the element to be rendered */}
              <Route path="/about" element={<About />} />

              {/* Specify the element to be rendered */}
              <Route path="/login" element={<Login Showalert={Showalert} />} />
              <Route
                path="/signup"
                element={<Signup Showalert={Showalert} />}
              />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
