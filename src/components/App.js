import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Diplomas from "./Diplomas";
import Diploma from "./Diploma";
import Module from "./Module";
import Header from "./Header";
import Register from "./Register";
import Confirmation from "./Confirmation";
import FAQ from "./FAQ";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home title="Welcome to RP School of Infocomm" />} />
        <Route path="about" element={<About />} />

        {/* Diplomas parent */}
        <Route path="diplomas" element={<Diplomas />}>
          <Route path=":diplomaId" element={<Diploma />}>
            <Route path=":moduleId" element={<Module />} />
          </Route>
        </Route>

        {/* Standalone pages */}
        <Route path="register" element={<Register />} />
        <Route path="confirmed" element={<Confirmation />} />

        <Route path="faq" element={<FAQ />} />

        <Route
          path="*"
          element={<h1 className="not-found">Page Not Found</h1>}
        />
      </Routes>

      <footer className="container">
        &copy;2025 | Republic Polytechnic – School of Infocomm
      </footer>
    </div>
  );
}

export default App;
