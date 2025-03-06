import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import MemoExample from "./MemoExample";
import CallbackExample from "./CallbackExample";
import RefExample from "./RefExample";
import "./App.css"
const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link><br />
          <Link to="/memo">useMemo</Link><br />
          <Link to="/callback">useCallback</Link><br />
          <Link to="/ref">useRef</Link><br />
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/memo" element={<MemoExample />} />
          <Route path="/callback" element={<CallbackExample />} />
          <Route path="/ref" element={<RefExample />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;